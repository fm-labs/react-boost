import * as React from 'react'

export function useData<T>(loader: () => Promise<T>): {
  data: T | undefined
  dataRef: React.RefObject<T | null>
} {
  const [data, setData] = React.useState<T>()
  const dataRef: React.MutableRefObject<T | null> = React.useRef<T | null>(null)

  React.useEffect(() => {
    loader().then((result) => {
      setData(result)
      dataRef.current = result
    }) //.catch(defaultNetworkErrorHandler)
  }, [loader])

  return { data, dataRef: dataRef }
}
