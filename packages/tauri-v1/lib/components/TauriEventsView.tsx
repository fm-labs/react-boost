import React from "react";
import { useTauriEvent } from "../helper/useTauriEvent.ts";
import { TauriEvent } from "@tauri-apps/api/event";
import { UnlistenFn } from "@tauri-apps/api/helpers/event";

export const TauriEventsView = () => {
    const tauriEvent = useTauriEvent();
    if (!tauriEvent) {
        console.warn("Tauri event API not available");
        return null;
    }

    React.useEffect(() => {
        const unlisteners: UnlistenFn[] = [];

        async function init() {
            if (!tauriEvent) {
                return;
            }
            const listener1 = await tauriEvent.listen(TauriEvent.WINDOW_MOVED, (event) => {
                console.log(TauriEvent.WINDOW_MOVED, event);
            });
            const listener2 = await tauriEvent.listen(TauriEvent.WINDOW_RESIZED, (event) => {
                console.log(TauriEvent.WINDOW_RESIZED, event);
            });
            unlisteners.push(listener1);
            unlisteners.push(listener2);
        }

        init();

        return () => {
            console.log("unlistening", unlisteners.length);
            unlisteners.forEach((unlistener) => unlistener());
        };
    });

    return (
        <div>
            <h3>Tauri Events</h3>
            <p>
                WINDOW_MOVED and WINDOW_RESIZED event handlers are attached. Try to resize/move the window
                and check console for event logs.
            </p>
        </div>
    );
};
