import React from 'react'

//import { useTauriShell } from '../helper/useTauriShell.ts'
//import { TauriShellRunCommandResult } from "../tauri.types.ts";
import { TauriShellRunCommandButton } from "./TauriShellRunCommandButton.tsx";

export const TauriShellView = () => {
  //const { createCommand, runCommand } = useTauriShell()
  // const [commandStdout, setCommandStdout] = React.useState<string[]>([])
  // const [commandStderr, setCommandStderr] = React.useState<string[]>([])
  // const [commandPid, setCommandPid] = React.useState<number | null>(null)
  // const [commandExitCode, setCommandExitCode] = React.useState<number | null>(null)
  // const [commandSignal, setCommandSignal] = React.useState<string | null>(null)
  //
  // const runCommand = async (cmd: string, args?: string[]) => {
  //   if (!tauriShell) {
  //     throw new Error('Tauri shell API is not available')
  //   }
  //
  //   setCommandPid(null)
  //   setCommandStdout([])
  //   setCommandStderr([])
  //
  //   const command = createCommand(cmd, args)
  //   command.on('close', (data) => {
  //     const msg = `command finished with code ${data.code} and signal ${data.signal}`
  //     console.log(msg)
  //     setCommandExitCode(data.code)
  //     setCommandSignal(data.signal)
  //   })
  //   command.on('error', (error) => console.error(`command error: "${error}"`))
  //   command.stdout.on('data', (line) => {
  //     console.log(`command stdout: "${line}"`)
  //     setCommandStdout((prev) => [...prev, line])
  //   })
  //   command.stderr.on('data', (line) => {
  //     console.log(`command stderr: "${line}"`)
  //     setCommandStderr((prev) => [...prev, line])
  //   })
  //
  //   const child = await command.spawn()
  //   console.log('pid:', child.pid)
  //   setCommandPid(child.pid)
  // }

  // const [commandResult, setCommandResult] = React.useState<TauriShellRunCommandResult | null>(null)
  //
  // const handleCommand = async (cmd: string, args?: string[]) => {
  //   const result = await runCommand(cmd, args)
  //   setCommandResult(result)
  // }
  //
  // const renderCommandResult = () => {
  //   if (!commandResult) {
  //     return null
  //   }
  //
  //   return <div>
  //     <strong>Command PID:</strong>
  //     <pre>{commandResult.pid}</pre>
  //
  //     <strong>Command stdout:</strong>
  //     <pre>{commandResult.stdout.join('\n')}</pre>
  //
  //     <strong>Command stderr:</strong>
  //     <pre>{commandResult.stderr.join('\n')}</pre>
  //
  //     <strong>Command exit code:</strong>
  //     <pre>{commandResult.exitCode}</pre>
  //
  //     <strong>Command signal:</strong>
  //     <pre>{commandResult.signal}</pre>
  //   </div>
  // }

  return (
    <div>
      <h3>Tauri Shell</h3>

      <hr />
      <TauriShellRunCommandButton command={'whoami'} args={[]} />
      <TauriShellRunCommandButton command={'ls'} args={['-la']} />
      <TauriShellRunCommandButton command={'cat'} args={['/etc/issue']} />
    </div>
  )
}
