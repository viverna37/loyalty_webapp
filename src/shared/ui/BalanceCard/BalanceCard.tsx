type BalanceCardProps = {
    value: number | null;
    loading: boolean;
};

export function BalanceCard({ value, loading }: BalanceCardProps) {
    return (
        <div className="card balance-card">
            <span className="card-label">Баланс</span>

            <div className="card-value">
                {loading ? "…" : value?.toLocaleString("ru-RU")}{" "}
                <span className="star">⭐</span>
            </div>
        </div>
    );
}
