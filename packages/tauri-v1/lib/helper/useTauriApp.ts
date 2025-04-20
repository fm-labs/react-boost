import { TauriAppInterface } from '../tauri.types.ts'

export const useTauriApp = (): TauriAppInterface | undefined => {
  return typeof window.__TAURI__ !== 'undefined'
    ? // @ts-ignore
      window.__TAURI__.app
    : undefined
}
