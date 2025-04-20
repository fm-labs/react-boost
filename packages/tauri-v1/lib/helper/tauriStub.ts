import { TauriInterface } from '../tauri.types.ts'

export const tauriStub: TauriInterface = {
  invoke: (...any: any[]) => {
    throw new Error('Not in tauri context')
  },
  convertFileSrc: (filePath: string, protocol?: string) => {
    throw new Error('Not in tauri context')
  },
}
