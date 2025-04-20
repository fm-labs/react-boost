import { TauriCliInterface } from '../tauri.types.ts'

/**
 * Tauri cli API
 *
 * https://tauri.app/v1/api/js/cli
 */
export const useTauriCli = (): TauriCliInterface | undefined => {
  return typeof window.__TAURI__ !== 'undefined'
    ? // @ts-ignore
      window.__TAURI__.cli
    : undefined
}
