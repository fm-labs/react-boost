import { TauriOsInterface } from '../tauri.types.ts'

/**
 * Tauri os API
 *
 * https://tauri.app/v1/api/js/os
 */
export const useTauriOs = (): TauriOsInterface | undefined => {
  return typeof window.__TAURI__ !== 'undefined'
    ? // @ts-ignore
      window.__TAURI__.os
    : undefined
}
