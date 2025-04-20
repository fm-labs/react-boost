import { TauriWindowInterface } from '../tauri.types.ts'

/**
 * Tauri window API
 *
 * https://tauri.app/v1/api/js/window
 */
export const useTauriWindow = (): TauriWindowInterface | undefined => {
  return typeof window.__TAURI__ !== 'undefined'
    ? // @ts-ignore
      window.__TAURI__.window
    : undefined
}
