import React from 'react'
import { useTauri } from '../helper/useTauri.ts'


export const TauriInvokeView = () => {
  const { isTauri, invoke } = useTauri()

  const greet = React.useCallback(
    (name: string = 'World') => {
      if (!isTauri) {
        console.log('NO TAURI CONTEXT')
        return
      }
      // invoke custom tauri command!
      invoke('greet', { name })
        // `invoke` returns a Promise
        .then((response: any) => console.log(response))
        .catch((error: any) => {
          console.error(error)
        })

      return () => {}
    },
    [isTauri],
  )

  return (
    <div>
      <h3>Tauri</h3>
      <p>
        <button onClick={() => greet()}>Invoke greet handler</button>
      </p>
    </div>
  )
}
