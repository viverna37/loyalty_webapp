import type {History} from "../../types/history.ts";


export async function fetchHistory(
    initData: string
): Promise<History> {
    const res = await fetch(
        "https://api.bozdyrevdev.ru/api/v1/user/loyalty/history",
        {
            method: "GET",
            headers: {
                "X-Telegram-Init-Data": initData,
            },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch history");
    }


    return await res.json() as History;
}
