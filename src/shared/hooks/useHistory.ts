import {useEffect, useState} from "react";
import type {HistoryItem, HistoryItemUI} from "../../types/history.ts";
import {fetchHistory} from "../api/history.ts";

function formatDate(iso: string) {
    return new Date(iso).toLocaleString('ru-RU', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })
}

export function useHistory(initData: string | null) {
    const [data, setData] = useState<HistoryItemUI[] | null>(null);
    const [loading_history, setLoading] = useState(false);

    useEffect(() => {
        if (!initData) return;

        setLoading(true);
        fetchHistory(initData).then(response => {
            const items: HistoryItemUI[] = response.history.map((item: HistoryItem) => ({
                amount: item.amount,
                type: item.type,
                date: formatDate(item.created_at)
            }))

            setData(items)
        })
            .finally(() => setLoading(false));
    }, [initData]);

    return {
        loading_history,
        data,
    };
}
