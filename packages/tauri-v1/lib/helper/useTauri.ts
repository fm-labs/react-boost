import React from 'react'
import { TauriInterface } from '../tauri.types.ts'
import { tauriStub } from './tauriStub.ts'
//import { invoke } from '@tauri-apps/api'

const tauri: TauriInterface =
  // @ts-ignore
  typeof window.__TAURI__ !== 'undefined'
    ? // @ts-ignore
      window.__TAURI__.tauri
    : tauriStub

export const useTauri = () => {
  const isTauri = React.useMemo(() => {
    // @ts-ignore
    return typeof window.__TAURI__ !== 'undefined' && typeof window.__TAURI__.tauri !== 'undefined'
  }, [])

  // const greet = React.useCallback(
  //   (name: string = 'World') => {
  //     if (!isTauri) {
  //       console.log('NO TAURI CONTEXT')
  //       return
  //     }
  //     // invoke custom tauri command!
  //     tauri
  //       .invoke('greet', { name })
  //       // `invoke` returns a Promise
  //       .then((response: any) => console.log(response))
  //       .catch((error: any) => {
  //         console.error(error)
  //       })
  //
  //     return () => {}
  //   },
  //   [isTauri],
  // )

  return { isTauri, invoke: tauri.invoke }
}
