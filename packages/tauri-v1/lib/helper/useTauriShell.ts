import { TauriShellInterface, TauriShellRunCommandResult } from "../tauri.types.ts";
import { SpawnOptions } from "@tauri-apps/api/shell";

type TauriShellCommandCloseEvent = {
    code: number
    signal: string
}

/**
 * Tauri shell API
 *
 * https://tauri.app/v1/api/js/shell
 */
export const useTauriShell = (): TauriShellInterface => {
    const tauriShell =
        typeof window.__TAURI__!=="undefined"
            ? // @ts-ignore
            window.__TAURI__.shell
            :undefined;

    const createCommand = (command: string, args?: string | string[], options?: SpawnOptions) => {
        if (!tauriShell) {
            throw new Error("Tauri shell API is not available");
        }
        return new tauriShell.Command(command, args, options);
    }


    const runCommand = async (command: string, args?: string | string[], options?: SpawnOptions): Promise<TauriShellRunCommandResult> => {
        if (!tauriShell) {
            throw new Error("Tauri shell API is not available");
        }

        const stderr: string[] = []
        const stdout: string[] = []
        let exitCode: number | null = null
        let signal: string | null = null

        // create command
        const _tauriCmd = new tauriShell.Command(command, args, options);
        _tauriCmd.on("close", (data: TauriShellCommandCloseEvent) => {
            const msg = `command finished with code ${data.code} and signal ${data.signal}`;
            console.log(msg);
            exitCode = data.code
            signal = data.signal
        });
        _tauriCmd.on("error", (error: any) => {
            console.log(`command error: "${error}"`);
        });
        _tauriCmd.stdout.on("data", (line: any) => {
            console.log(`command stdout: "${line}"`);
            stdout.push(line)
        });
        _tauriCmd.stderr.on("data", (line: any) => {
            console.log(`command stderr: "${line}"`);
            stderr.push(line)
        });


        // spawn
        console.log("spawning command", _tauriCmd);
        const child = await _tauriCmd.spawn().catch((err: any) => {
            console.error("Error spawning command:", err);
            return null;
        })
        if (!child) {
            throw new Error("Failed to spawn command");
        }
        console.log("pid:", child.pid);

        // wait for exit
        const waitForExit = () => {
            return new Promise((resolve, reject) => {
                // loop until exitCode is set
                const interval = setInterval(() => {
                    if (exitCode !== null) {
                        clearInterval(interval);
                        resolve({ stdout, stderr, exitCode, signal });
                    }
                }, 100);
            });
        }
        const result = await waitForExit();
        console.log("command exited with result", result);

        // return result
        return {
            stdout,
            stderr,
            pid: child.pid,
            exitCode: exitCode,
            signal: signal,
            cmd: _tauriCmd,
        }
    };

    return {
        createCommand: createCommand,
        runCommand: runCommand,
        open: tauriShell?.open,
    };
};
