import './burn_card.css'
import '../../styles/card.css'

type BurnCardProps = {
    value: number | null;
    date: string | null;
    loading: boolean;
}

export function BurnCard({ value, date, loading }: BurnCardProps) {
    const isEmpty = !loading && (value === null || date === null);

    return (
        <div className="card burn-card">
            <div className="burn-header">
                <span className="card-label">
                    Сгорают <span className="fire">🔥</span>
                </span>

                <span className="card-label">
                    {loading ? "…" : date ?? ""}
                </span>
            </div>

            <div className="card-value">
                {loading && "…"}

                {!loading && isEmpty && (
                    <span className="burn-empty">
                        Нет сгорающих баллов
                    </span>
                )}

                {!loading && !isEmpty && (
                    <>
                        {value!.toLocaleString("ru-RU")}{" "}
                        <span className="star">⭐</span>
                    </>
                )}
            </div>
        </div>
    )
}
