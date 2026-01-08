import {useEffect, useState} from "react";
import type {IntentToken} from "../../types/intentToken.ts";
import {fetchIntentToken} from "../api/intentToken.ts";

export function useQRCode(initData: string | null) {
    const [data, setData] = useState<IntentToken | null>(null);
    const [loading_qr_code, setLoading] = useState(false);

    useEffect(() => {
        if (!initData) return;

        setLoading(true);
        fetchIntentToken(initData)
            .then(setData)
            .finally(() => setLoading(false));
    }, [initData]);

    return {
        loading_qr_code,
        data,
    };
}