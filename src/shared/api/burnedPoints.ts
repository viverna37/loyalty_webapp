import type {BurnedPoints} from "../../types/burnedPoints.ts";


export async function fetchBurnedPoints(
    initData: string
): Promise<BurnedPoints> {
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



    return await res.json() as BurnedPoints;
}
