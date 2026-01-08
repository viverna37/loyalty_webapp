export async function fetchBalance(initData: string): Promise<number> {
    const res = await fetch(
        "https://api.bozdyrevdev.ru/api/v1/user/loyalty/balance",
        {
            method: "GET",
            headers: {
                "X-Telegram-Init-Data": initData,
            },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch balance");
    }

    const data = await res.json();
    return data.balance;
}
