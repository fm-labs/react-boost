import React from 'react'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { IDataLoaderOptions, useDataLoader } from './useDataLoader'

export const useAxiosLoader = <T>(
  fetcher: () => ((config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>) | undefined,
  options?: IDataLoaderOptions,
) => {
  const fetchFn = fetcher()
  if (fetchFn === undefined) {
    throw new Error('fetcher is undefined')
  }

  return useDataLoader<T>(async ({ abort }) => {
    const response = await fetchFn({ signal: abort.signal })
    return response.data
  }, options)
}

export interface ISequentialDataResponse<T> {
  total: number
  pages: number
  page: number
  limit: number
  count: number
  items: T[]
}

const defaultAggregate = {
  total: 0,
  count: 0,
  pages: 0,
  page: 0,
  limit: 0,
  items: [],
}

export const useSequentialAxiosLoader = <T extends ISequentialDataResponse<E>, E>(
  fetcher: ({
    page,
  }: {
    page: number
  }) => ((config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>) | undefined,
  options?: IDataLoaderOptions,
) => {
  const pageRef = React.useRef<number>(1)
  const aggregateRef = React.useRef<ISequentialDataResponse<E>>(defaultAggregate)
  const itemRef = React.useRef<{ [key: number]: E[] }>({})
  const autoloadedRef = React.useRef(false)
  const isLoadingRef = React.useRef(false)

  const { load } = useDataLoader<T>(
    async ({ abort }) => {
      const fetchFn = fetcher({ page: pageRef.current })
      if (fetchFn === undefined) {
        throw new Error('fetcher is undefined')
      }

      isLoadingRef.current = true
      const response = await fetchFn({ signal: abort.signal })
      isLoadingRef.current = false

      // .catch((e) => {
      //   if (e?.code === 'ERR_CANCELED' || e?.message === 'canceled') {
      //     console.log('SEQLOADER:LOADER:CANCELED')
      //     setTimeout(load, 50)
      //     return undefined
      //   }
      //   console.log('SEQLOADER:LOADER:ERR', e)
      //   //setData(null)
      //   throw e
      // })

      console.log('SEQ:RESPONSE', response)
      if (response === undefined) {
        return
      }

      const { total, count, pages, page, items } = response.data
      aggregateRef.current.total = total
      aggregateRef.current.pages = pages
      aggregateRef.current.page = page
      //aggregateRef.current.items = [...aggregateRef.current.items, ...items]
      itemRef.current[page] = items
      aggregateRef.current.items = Object.values(itemRef.current).flat()
      aggregateRef.current.count = aggregateRef.current.items.length

      console.log('SEQ:TOTAL', total)
      console.log('SEQ:COUNT', count)
      console.log('SEQ:PAGE', page, 'OF', pages)
      console.log('SEQ:ITEMS', items)
      return response.data
    },
    { autoload: false, debug: options?.debug },
  )

  const seqLoad = React.useCallback(async () => {
    console.log('SEQ:LOADER:RESET')
    aggregateRef.current.items = []
    aggregateRef.current.count = 0
    aggregateRef.current.total = 0
    aggregateRef.current.page = 0
    aggregateRef.current.pages = 0
    itemRef.current = {}
    pageRef.current = 1
    await load()
    console.log('SEQ:LOAD1:FINISHED', aggregateRef.current.page, aggregateRef.current.pages)
    while (aggregateRef.current.page < aggregateRef.current.pages) {
      pageRef.current = aggregateRef.current.page + 1
      await load()
      console.log('SEQ:LOADN:FINISHED', aggregateRef.current.page, aggregateRef.current.pages)
    }
    return aggregateRef.current
  }, [load])

  React.useEffect(() => {
    if (options?.autoload === true && pageRef.current === 1 && !autoloadedRef.current) {
      console.log('SEQ:LOADER:AUTOLOAD')
      autoloadedRef.current = true
      seqLoad()
    }
  }, [options?.autoload, seqLoad])

  return {
    data: aggregateRef.current,
    load: seqLoad,
    isLoading: false,
  }
}
