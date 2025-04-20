import { TauriPathInterface } from '../tauri.types.ts'

/**
 * Tauri path API
 *
 * https://tauri.app/v1/api/js/path
 */
export const useTauriPath = (): TauriPathInterface | undefined => {
  return typeof window.__TAURI__ !== 'undefined'
    ? // @ts-ignore
      window.__TAURI__.path
    : undefined
}
