import type {IntentToken} from "../../types/intentToken.ts";


export async function fetchIntentToken(
    initData: string
): Promise<IntentToken> {
    const res = await fetch(
        "https://api.bozdyrevdev.ru/api/v1/user/loyalty/spend-intent",
        {
            method: "POST",
            headers: {
                "X-Telegram-Init-Data": initData,
            },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch spend intent");
    }


    return await res.json() as IntentToken;
}
