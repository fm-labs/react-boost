import { TauriNotificationInterface } from '../tauri.types.ts'

/**
 * Tauri notification API
 *
 * https://tauri.app/v1/api/js/notification
 */
export const useTauriNotification = (): TauriNotificationInterface | undefined => {
  return typeof window.__TAURI__ !== 'undefined'
    ? // @ts-ignore
      window.__TAURI__.notification
    : undefined
}

