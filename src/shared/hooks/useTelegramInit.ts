import { useEffect, useState } from "react";

type InitState =
    | { status: "loading" }
    | { status: "ready"; initData: string }
    | { status: "error"; reason: string };

export function useTelegramInit(): InitState {
    const [state, setState] = useState<InitState>({ status: "loading" });

    useEffect(() => {
        const tg = window.Telegram?.WebApp;

        if (!tg) {
            setState({ status: "error", reason: "NOT_IN_TELEGRAM" });
            return;
        }

        tg.ready();
        tg.expand();

        if (!tg.initData) {
            setState({ status: "error", reason: "NO_INIT_DATA" });
            return;
        }

        setState({ status: "ready", initData: tg.initData });
    }, []);

    return state;
}
