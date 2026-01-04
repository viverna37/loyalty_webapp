import './history_item.css'

type Props = {
    amount: number
    date: string
    type: 'credit' | 'debit'
}

export function HistoryItem({ amount, date, type }: Props) {
    const isCredit = type === 'credit'

    return (
        <div className="history-item">
            <div className="history-left">
                <div className={`history-amount ${isCredit ? 'plus' : 'minus'}`}>
                    {isCredit ? '+' : '-'}
                    {Math.abs(amount)} ⭐
                </div>
                <div className="history-date">{date}</div>
            </div>

            <div className={`history-type ${isCredit ? 'credit' : 'debit'}`}>
                {isCredit ? 'Начисление' : 'Списание'}
            </div>
        </div>
    )
}
