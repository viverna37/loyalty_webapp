import {useEffect, useState} from "react";
import {fetchBurnedPoints} from "../api/burnedPoints.ts";
import type {BurnedPoints} from "../../types/burnedPoints.ts";


export function useBurnedPoints(initData: string | null) {
    const [data, setData] = useState<BurnedPoints | null>(null);
    const [loading_burned_points, setLoading] = useState(false);

    useEffect(() => {
        if (!initData) return;

        setLoading(true);
        fetchBurnedPoints(initData)
            .then(setData)
            .finally(() => setLoading(false));
    }, [initData]);

    const hasPoints = !!data?.points;

    return {
        loading_burned_points,
        hasPoints,
        points: data?.points ?? null,
        date: data?.burn_date ?? null,
    };
}
