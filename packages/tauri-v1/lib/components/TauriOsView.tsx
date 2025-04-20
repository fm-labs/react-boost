import React from "react";
import { useTauriOs } from "../helper/useTauriOs.ts";

export const TauriOsView = () => {
    const tauriOs = useTauriOs();
    const [data, setData] = React.useState({});
    if (!tauriOs) {
        console.warn("Tauri os not available");
        return null;
    }

    const fetchData = React.useCallback(async () => {
        return {
            arch: await tauriOs.arch(),
            platform: await tauriOs.platform(),
            version: await tauriOs.version(),
            locale: await tauriOs.locale(),
            type: await tauriOs.type(),
            tempdir: await tauriOs.tempdir(),
        };
    }, []);

    React.useEffect(() => {
        fetchData().then(setData);
    });

    return (
        <div>
            <h3>Tauri OS</h3>
            <p></p>
            <ul>
                {data &&
                    Object.entries(data).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key}</strong>: {value as string}
                        </li>
                    ))}
            </ul>
        </div>
    );
};
