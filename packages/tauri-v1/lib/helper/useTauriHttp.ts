import { TauriHttpInterface } from '../tauri.types.ts'

/**
 * Tauri http API
 *
 * https://tauri.app/v1/api/js/http
 */
export const useTauriHttp = (): TauriHttpInterface | undefined => {
  return typeof window.__TAURI__ !== 'undefined'
    ? // @ts-ignore
      window.__TAURI__.http
    : undefined
}
