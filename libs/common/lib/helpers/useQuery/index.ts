import React from 'react'
import { useSearchParams } from 'react-router-dom'

// interface QueryDict<T> {
//   [key: string]: string
// }

/**
 * Return URL query as URLSearchParams
 */
export function useQuery(): URLSearchParams {
  const [searchParams] = useSearchParams()

  return React.useMemo<URLSearchParams>(() => {
    return searchParams
  }, [searchParams])
}

/**
 * Return URL query as dict.
 */
export function useQueryDict<T>(): T {
  //const searchParams = useQuery()
  const [searchParams] = useSearchParams()

  return React.useMemo(() => {
    return parseSearchParams<T>(searchParams)
  }, [searchParams])
}

export function parseSearchParams<T>(searchParams: URLSearchParams): T {
  const query: { [key: string]: string } = {}
  for (const [key, value] of searchParams.entries()) {
    query[key] = value
  }
  return query as T
}

//export default useQuery
