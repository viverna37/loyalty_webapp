import './burn_card.css'
import '../../styles/card.css'


type BurnCardProps = {
    value: number
    date: string
}

export function BurnCard({ value, date }: BurnCardProps) {
    return (
        <div className="card burn-card">
            <div className="burn-header">
        <span className="card-label">
          Сгорают <span className="fire">🔥</span>
        </span>
                <span className="burn-date">{date}</span>
            </div>

            <div className="burn-value">
                {value.toLocaleString('ru-RU')} <span className="star">⭐</span>
            </div>
        </div>
    )
}
