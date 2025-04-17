import React from 'react'
//import { useLogger } from '../useLogger'

export interface IDataLoaderInitParams {
  abort: AbortController
}

export interface IDataLoaderOptions {
  autoload?: boolean
  debug?: boolean
}

// const defaultListener =
//   (debug: boolean = false) =>
//   () => {
//     if (debug) {
//       console.log('DATALOADER:ABORTED')
//     }
//   }

export const useDataLoader = <T>(
  loader: (options: IDataLoaderInitParams) => Promise<T | undefined>,
  options: IDataLoaderOptions = { autoload: true, debug: false },
) => {
  const counter = React.useRef<number>(0)
  const [data, setData] = React.useState<T|null>(null)

  //const log = useLogger(options?.debug)
  const log = console.log;
  // const listener = defaultListener(options?.debug)
  //
  // const buildAbortController = React.useCallback(() => {
  //   const abortController = new AbortController()
  //   abortController.signal.addEventListener('abort', listener)
  //   return abortController
  // }, [listener])

  const abortController = React.useRef<AbortController>(new AbortController())

  const load = React.useCallback((): Promise<any> => {
    counter.current += 1

    // reset abort controller for every request
    //abortController.current = buildAbortController()
    abortController.current = new AbortController()

    //log('DATALOADER:LOAD', counter.current)
    return loader({ abort: abortController.current })
      .then((data) => {
        log('DATALOADER:LOADER:SUCCESS', data)
        if (data === undefined) {
          setData(null)
        } else {
          setData(data)
        }
        return data
      })
      .catch((e) => {
        if (e?.code === 'ERR_CANCELED' || e?.message === 'canceled') {
          log('DATALOADER:LOADER:CANCELED')
          return
        }
        log('DATALOADER:LOADER:ERR', e)
        //setData(null)
        throw e
      })
      .finally(() => {
        //abortController.current?.signal?.removeEventListener('abort', listener)
        log('DATALOADER:SIGNAL:UNLOADLISTENER')
      })
  }, [loader, log])

  React.useEffect(() => {
    //log('DATALOADER:EFFECT:REGISTER')

    if (options?.autoload && counter?.current === 0) {
      setTimeout(load, Math.min(10000, counter?.current * 100))
      load()
      return () => {
        //log('DATALOADER:EFFECT:UNLOAD')
        abortController.current?.abort()
      }
    }
  }, [load, options?.autoload])

  return { data, setData, load, abort: abortController?.current?.abort }
}
