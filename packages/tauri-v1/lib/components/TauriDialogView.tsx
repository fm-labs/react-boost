import React from "react";

import { useTauriDialog } from "../helper/useTauriDialog.ts";

export const TauriDialogView = () => {
    const tauriDialog = useTauriDialog();
    if (!tauriDialog) {
        console.warn("Tauri dialog not available");
        return null;
    }

    const handleAskClick = async () => {
        console.log("dialog ask");
        const dialog = tauriDialog.ask("Mind if I ask?");
        console.log("ask", dialog);
    };

    const handleConfirmClick = async () => {
        console.log("dialog confirm");
        const dialog = tauriDialog.confirm("Confirmative?");
        console.log("confirm", dialog);
    };

    const handleOpenClick = async () => {
        console.log("dialog open");
        const dialog = tauriDialog.open({ directory: true });
        console.log("open", dialog);
    };

    const handleSaveClick = async () => {
        console.log("dialog save");
        const dialog = tauriDialog.save({ defaultPath: "test.txt" });
        console.log("save", dialog);
    };

    return (
        <div>
            <h3>Tauri Dialog</h3>
            <p>
                <button onClick={() => handleAskClick()}>Ask</button>
                <button onClick={() => handleConfirmClick()}>Confirm</button>
                <button onClick={() => handleOpenClick()}>Open</button>
                <button onClick={() => handleSaveClick()}>Save</button>
            </p>
        </div>
    );
};


