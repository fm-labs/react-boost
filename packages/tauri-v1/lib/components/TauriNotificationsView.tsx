import React from "react";

import { useTauriNotification } from "../helper/useTauriNotification.ts";

export const TauriNotificationsView = () => {
    const tauriNotifications = useTauriNotification();
    if (!tauriNotifications) {
        console.warn("Tauri notifications not available");
        return null;
    }

    const handleIsPermissionGrantedClick = async () => {
        if (!tauriNotifications) {
            console.warn("Tauri notifications not available");
            return;
        }

        const isPermissionGranted = await tauriNotifications.isPermissionGranted();
        console.log("isPermissionGranted", isPermissionGranted);
    };

    const handleRequestPermissionClick = async () => {
        if (!tauriNotifications) {
            console.warn("Tauri notifications not available");
            return;
        }

        const permission = await tauriNotifications.requestPermission();
        console.log("permission", permission);
    };

    const handleSendNotificationClick = async () => {
        if (!tauriNotifications) {
            console.warn("Tauri notifications not available");
            return;
        }

        tauriNotifications.sendNotification({
            title: "Hello from Tauri",
            body: "This is a test notification",
        });
    };

    return (
        <div>
            <h3>Tauri Notifications</h3>
            <p>
                <button onClick={() => handleIsPermissionGrantedClick()}>isPermissionGranted</button>
                <button onClick={() => handleRequestPermissionClick()}>requestPermission</button>
                <button onClick={() => handleSendNotificationClick()}>Test notification</button>
            </p>
        </div>
    );
};
