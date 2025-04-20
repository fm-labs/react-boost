import React from 'react'

import { useTauriWindow } from '../helper/useTauriWindow.ts'

export const TauriWindowView = () => {
  const tauriWindow = useTauriWindow()

  const handleMaximizeClick = async () => {
    if (!tauriWindow) {
      console.warn('Tauri window not available')
      return
    }

    console.log('maximizing window')
    const window = tauriWindow.getCurrent()
    await window.maximize()
  }

  const handleMinimizeClick = async () => {
    if (!tauriWindow) {
      console.warn('Tauri window not available')
      return
    }

    console.log('minimizing window')
    const window = tauriWindow.getCurrent()
    await window.minimize()
  }

  const handleResetClick = async () => {
    if (!tauriWindow) {
      console.warn('Tauri window not available')
      return
    }

    console.log('resetting window size')
    const window = tauriWindow.getCurrent()
    await window.unmaximize()
  }

  return (
    <div>
      <h3>Tauri Window</h3>
      <p>
        <button onClick={() => handleMaximizeClick()}>maximize window</button>
        <button onClick={() => handleMinimizeClick()}>minimize window</button>
        <button onClick={() => handleResetClick()}>reset window size</button>
      </p>
    </div>
  )
}
