import { TauriShellInterface } from '../tauri.types.ts'
import { Command, SpawnOptions } from '@tauri-apps/api/shell'

export const tauriShellStub: TauriShellInterface = {
  createCommand: (program: string, args?: string | string[], options?: SpawnOptions) => {
    throw new Error('Not in tauri context')
  },
    runCommand: async (program: string, args?: string | string[], options?: SpawnOptions) => {
        throw new Error('Not in tauri context')
    },
  open: (path: string, openWith?: string) => {
    throw new Error('Not in tauri context')
  },
}
