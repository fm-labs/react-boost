import { TauriEventInterface } from '../tauri.types.ts'

/**
 * Tauri event API
 *
 * https://tauri.app/v1/api/js/event
 */
export const useTauriEvent = (): TauriEventInterface | undefined => {
  return typeof window.__TAURI__ !== 'undefined'
    ? // @ts-ignore
      window.__TAURI__.event
    : undefined
}
