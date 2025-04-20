import React from 'react'
import { useTauriApp } from '../helper/useTauriApp.ts'


export const TauriAppView = () => {
  const tauriApp = useTauriApp()
  const [data, setData] = React.useState({})

  const fetchData = React.useCallback(async () => {
    return {
      name: await tauriApp?.getName(),
      version: await tauriApp?.getVersion(),
      tauriVersion: await tauriApp?.getTauriVersion(),
    }
  }, [])

  const handleHideClick = async () => {
    if (!tauriApp) {
      console.warn('Tauri app not available')
      return
    }

    console.log('hiding window')
    await tauriApp.hide()
  }

  const handleShowClick = async () => {
    if (!tauriApp) {
      console.warn('Tauri app not available')
      return
    }

    console.log('showing window')
    await tauriApp.show()
  }

  React.useEffect(() => {
    fetchData().then(setData)
  })

  return (
    <div>
      <h3>Tauri App</h3>
      <p>
        <button onClick={() => handleShowClick()}>show</button>
        <button onClick={() => handleHideClick()}>hide</button>
      </p>
      <ul>
        {data &&
          Object.entries(data).map(([key, value]) => (
            <li key={key}>
              <strong>{key}</strong>: {value as string}
            </li>
          ))}
      </ul>
    </div>
  )
}
