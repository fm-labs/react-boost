import React from "react";
import { TauriShellRunCommandResult } from "../tauri.types.ts";
import { useTauriShell } from "../helper/useTauriShell.ts";
import { SpawnOptions } from "@tauri-apps/api/shell";

export const TauriShellRunCommandButton = ({ command, args, options }: {command: string, args?: string[] | undefined, options?: SpawnOptions}): React.JSX.Element => {
    const { createCommand, runCommand } = useTauriShell();

    // const [commandStdout, setCommandStdout] = React.useState<string[]>([]);
    // const [commandStderr, setCommandStderr] = React.useState<string[]>([]);
    // const [commandPid, setCommandPid] = React.useState<number | null>(null);
    // const [commandExitCode, setCommandExitCode] = React.useState<number | null>(null);
    // const [commandSignal, setCommandSignal] = React.useState<string | null>(null);
    const [commandResult, setCommandResult] = React.useState<TauriShellRunCommandResult | null>(null);
    const [commandError, setCommandError] = React.useState<any | null>(null);

    // const tauriCmd = React.useMemo(() => {
    //     const _tauriCmd = createCommand(command, args, options);
    //     _tauriCmd.on("close", (data: any) => {
    //         const msg = `command finished with code ${data.code} and signal ${data.signal}`;
    //         console.log(msg);
    //         setCommandExitCode(data.code);
    //         setCommandSignal(data.signal);
    //         //Promise.resolve(onComplete());
    //     });
    //     _tauriCmd.on("error", (error: any) => {
    //         console.log(`command error: "${error}"`);
    //         //Promise.reject(`command error: "${error}"`);
    //     });
    //     _tauriCmd.stdout.on("data", (line: any) => {
    //         console.log(`command stdout: "${line}"`);
    //         setCommandStdout((prev) => [...prev, line]);
    //     });
    //     _tauriCmd.stderr.on("data", (line: any) => {
    //         console.log(`command stderr: "${line}"`);
    //         setCommandStderr((prev) => [...prev, line]);
    //     });
    //     return _tauriCmd;
    // }, [command, args, options])

    const handleCommand = async (cmd: string, args?: string[]) => {
        const result = await runCommand(cmd, args).catch((err) => {
            console.error("Error running command:", err);
            console.log(err)
            setCommandError(err);
            return null;
        })
        setCommandResult(result);
    };

    const renderCommandResult = () => {
        if (commandError) {
            let errorMessage = commandError;
            if (typeof commandError === "object" && "message" in commandError) {
                errorMessage = commandError?.message;
            } else if (typeof commandError === "object") {
                errorMessage = JSON.stringify(commandError, null, 2);
            }

            return <div>
                <strong>Command Error:</strong>
                <pre>{errorMessage}</pre>
                <p>
                    <a href="#" onClick={() => setCommandError(null)}>Clear Error</a>
                </p>
                <hr />
            </div>
        }

        if (!commandResult) {
            return <></>
        }

        return <div>
            <strong>Command PID:</strong>
            <pre>{commandResult.pid}</pre>

            <strong>Command stdout:</strong>
            <pre>{commandResult.stdout.join('')}</pre>

            <strong>Command stderr:</strong>
            <pre>{commandResult.stderr.join('')}</pre>

            <strong>Command exit code:</strong>
            <pre>{commandResult.exitCode}</pre>

            <strong>Command signal:</strong>
            <pre>{commandResult.signal}</pre>

            <p>
                <a href="#" onClick={() => setCommandResult(null)}>Clear Result</a>
            </p>
            <hr />
        </div>
    }

    return <>
        <div>
            <button onClick={() => handleCommand(command, args)}>{command} {args?.join(" ")}</button>
        </div>
        {renderCommandResult()}
    </>

};
