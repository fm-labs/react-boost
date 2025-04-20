import React from "react";

import { useTauriFs } from "../helper/useTauriFs.ts";
import { BaseDirectory } from "@tauri-apps/api/fs";

export const TauriFsView = () => {
    const tauriFs = useTauriFs();
    if (!tauriFs) {
        console.warn("Tauri fs not available");
        return null;
    }

    const handleCreateFile = async () => {
        console.log("creating file");
        await tauriFs.writeTextFile("test.txt", "Hello, World!", { dir: BaseDirectory.AppLocalData });
    };

    const handleCreateDir = async () => {
        console.log("creating dir");
        await tauriFs.createDir("test", { dir: BaseDirectory.AppLocalData });
    };

    const handleRemoveFile = async () => {
        console.log("removing file");
        await tauriFs.removeFile("test.txt", { dir: BaseDirectory.AppLocalData });
    };

    const handleRemoveDir = async () => {
        console.log("removing dir");
        await tauriFs.removeDir("test", { dir: BaseDirectory.AppLocalData });
    };

    if (!tauriFs) {
        return (
            <div>
                <h3>Tauri Fs</h3>
                <p>Not available</p>
            </div>
        );
    }

    return (
        <div>
            <h3>Tauri Fs</h3>
            <p>Test directory: {BaseDirectory.AppLocalData}</p>
            <p>
                <button onClick={() => handleCreateFile()}>create file</button>
                <button onClick={() => handleCreateDir()}>create dir</button>
                <button onClick={() => handleRemoveFile()}>remove file</button>
                <button onClick={() => handleRemoveDir()}>remove dir</button>
            </p>
        </div>
    );
};
