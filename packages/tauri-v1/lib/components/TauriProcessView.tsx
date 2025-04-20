import React from 'react'

import { useTauriProcess } from '../helper/useTauriProcess.ts'

export const TauriProcessView = () => {
  const tauriProcess = useTauriProcess()

  const handleExitClick = async (exitCode: number) => {
    if (!tauriProcess) {
      console.warn('Tauri process not available')
      return
    }

    console.log('exiting with RC', exitCode)
    await tauriProcess.exit(exitCode)
  }

  const handleRelaunchClick = async () => {
    if (!tauriProcess) {
      console.warn('Tauri process not available')
      return
    }

    console.log('relaunching')
    await tauriProcess.relaunch()
  }

  return (
    <div>
      <h3>Tauri Process</h3>
      <p>
        <button onClick={() => handleExitClick(0)}>exit(0)</button>
        <button onClick={() => handleExitClick(1)}>exit(1)</button>
        <button onClick={() => handleRelaunchClick()}>relaunch</button>
      </p>
    </div>
  )
}
