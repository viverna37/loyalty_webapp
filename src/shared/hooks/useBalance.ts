import {useEffect, useState} from "react";
import {fetchBalance} from "../api/balance.ts";

export function useBalance(initData: string | null) {
    const [balance, setBalance] = useState<number | null>(null);
    const [loading_balance, setLoading] = useState(false);

    useEffect(() => {
        if (!initData) return;

        setLoading(true);

        fetchBalance(initData)
            .then(setBalance)
            .finally(() => setLoading(false));
    }, [initData]);

    return { balance, loading_balance };
}