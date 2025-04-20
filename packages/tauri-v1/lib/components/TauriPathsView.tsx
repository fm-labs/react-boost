import React from "react";
import { useTauriPath } from "../helper/useTauriPath.ts";

export const TauriPathsView = () => {
    const tauriPath = useTauriPath();
    const [paths, setPaths] = React.useState({});
    if (!tauriPath) {
        console.warn("Tauri path not available");
        return null;
    }

    const fetchPaths = React.useCallback(async () => {
        return {
            appDir: await tauriPath.appDir(),
            appDataDir: await tauriPath.appDataDir(),
            appCacheDir: await tauriPath.appCacheDir(),
            appConfigDir: await tauriPath.appConfigDir(),
            appLogDir: await tauriPath.appLogDir(),
            audioDir: await tauriPath.audioDir(),
            cacheDir: await tauriPath.cacheDir(),
            configDir: await tauriPath.configDir(),
            dataDir: await tauriPath.dataDir(),
            desktopDir: await tauriPath.desktopDir(),
            documentDir: await tauriPath.documentDir(),
            downloadDir: await tauriPath.downloadDir(),
            //executableDir: await tauriPath.executableDir(),
            fontDir: await tauriPath.fontDir(),
            homeDir: await tauriPath.homeDir(),
            localDataDir: await tauriPath.localDataDir(),
            logDir: await tauriPath.logDir(),
            pictureDir: await tauriPath.pictureDir(),
            publicDir: await tauriPath.publicDir(),
            resourceDir: await tauriPath.resourceDir(),
            //runtimeDir: await tauriPath.runtimeDir(),
            //templateDir: await tauriPath.templateDir(),
            videoDir: await tauriPath.videoDir(),
        };
    }, []);

    React.useEffect(() => {
        fetchPaths().then(setPaths);
    });

    return (
        <div>
            <h3>Tauri Paths</h3>
            <p></p>
            <ul>
                {paths &&
                    Object.entries(paths).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key}</strong>: {value as string}
                        </li>
                    ))}
            </ul>
        </div>
    );
};
