import React from "react";

import { useTauriClipboard } from "../helper/useTauriClipboard.ts";

export const TauriClipboardView = () => {
    const tauriClipboard = useTauriClipboard();
    if (!tauriClipboard) {
        console.warn("Tauri clipboard not available");
        return null;
    }

    const [clipboardText, setClipboardText] = React.useState("");

    const handleReadClipboard = async () => {
        console.log("reading from clipboard");
        const text = await tauriClipboard.readText();
        console.log("clipboard text:", text);
        setClipboardText(text);
    };

    const handleWriteClipboard = async () => {
        console.log("writing to clipboard");
        const newText = "Wohooo, awesome clipboard text!";
        await tauriClipboard.writeText(newText);
        setClipboardText(await tauriClipboard.readText());
    };

    if (!tauriClipboard) {
        return (
            <div>
                <h3>Tauri Clipboard</h3>
                <p>Not available</p>
            </div>
        );
    }

    return (
        <div>
            <h3>Tauri Clipboard</h3>
            <p>
                <button onClick={() => handleReadClipboard()}>read from clipboard</button>
                <button onClick={() => handleWriteClipboard()}>write to clipboard</button>
            </p>
            <pre>{clipboardText}</pre>
        </div>
    );
};
