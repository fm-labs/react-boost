import { TauriProcessInterface } from '../tauri.types.ts'

/**
 * Tauri process API
 *
 * https://tauri.app/v1/api/js/process
 */
export const useTauriProcess = (): TauriProcessInterface | undefined => {
  return typeof window.__TAURI__ !== 'undefined'
    ? // @ts-ignore
      window.__TAURI__.process
    : undefined
}
