import { TauriDialogInterface } from '../tauri.types.ts'
//import { dialog } from '@tauri-apps/api'

/**
 * Tauri dialog API
 *
 * https://tauri.app/v1/api/js/dialog
 */
export const useTauriDialog = (): TauriDialogInterface | undefined => {
  //return dialog
  return typeof window.__TAURI__ !== 'undefined'
      ? // @ts-ignore
   window.__TAURI__.dialog : undefined
}
