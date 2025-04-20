import { TauriFsInterface } from '../tauri.types.ts'
/**
 * Tauri fs API
 *
 * https://tauri.app/v1/api/js/fs
 */
export const useTauriFs = (): TauriFsInterface | undefined => {
  return typeof window.__TAURI__ !== 'undefined'
    ? // @ts-ignore
      window.__TAURI__.fs
    : undefined
}
