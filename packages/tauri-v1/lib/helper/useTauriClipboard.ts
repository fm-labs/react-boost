import { TauriClipboardInterface } from '../tauri.types.ts'
/**
 * Tauri clipboard API
 *
 * https://tauri.app/v1/api/js/clipboard
 */
export const useTauriClipboard = (): TauriClipboardInterface | undefined => {
  return typeof window.__TAURI__ !== 'undefined'
    ? // @ts-ignore
      window.__TAURI__.clipboard
    : undefined
}
