import React from "react";
import { useTauriHttp } from "../helper/useTauriHttp.ts";
import { Body } from "@tauri-apps/api/http";


export const TauriHttpView = () => {
    const tauriHttp = useTauriHttp();
    if (!tauriHttp) {
        console.warn("Tauri http not available");
        return null;
    }

    return (
        <div>
            <h3>Tauri Http</h3>
            <p>
                <button onClick={() => tauriHttp.fetch("https://httpbin.org/get").then(console.log)}>
                    GET
                </button>
                <button
                    onClick={() =>
                        tauriHttp
                            .fetch("https://httpbin.org/post", {
                                method: "POST",
                                body: Body.json({
                                    foo: "baz",
                                    name: "tauri",
                                }),
                            })
                            .then(console.log)
                    }
                >
                    POST
                </button>
            </p>
        </div>
    );
};
