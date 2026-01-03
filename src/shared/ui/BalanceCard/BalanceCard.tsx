import './balance_card.css'
import '../../styles/card.css'


type BalanceCardProps = {
    value: number
}


export function BalanceCard({ value }: BalanceCardProps) {
    return (
        <div className="card balance-card">
            <span className="card-label">Баланс</span>

            <div className="balance-value">
                {value.toLocaleString('ru-RU')} <span className="star">⭐</span>
            </div>
        </div>
    )
}
