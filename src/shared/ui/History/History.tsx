import '../../styles/menu.css'
import './history.css'
import {ActionButton} from "../ActionButton/ActionButton.tsx";
import {HistoryItem} from "../HistoryItem/HistoryItem.tsx";

type Props = {
    open: boolean
    onClose: () => void
}

export function HistorySheet({ open, onClose }: Props) {
    return (
        <div className={`menu-overlay ${open ? 'open' : ''}`} onClick={onClose}>
            <div
                className={`menu-sheet ${open ? 'open' : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="menu-header">
                    <div className="menu-title">ИСТОРИЯ</div>
                    <div className="menu-divider" />
                </div>

                <div className="history-menu-content">
                    <HistoryItem amount={100} date={"02 янв. 2026 г., 03:01"} type={"credit"}/>
                    <HistoryItem amount={100} date={"02 янв. 2026 г., 03:01"} type={"debit"}/>
                    <HistoryItem amount={100} date={"02 янв. 2026 г., 03:01"} type={"credit"}/>
                    <HistoryItem amount={100} date={"02 янв. 2026 г., 03:01"} type={"debit"}/>
                    <HistoryItem amount={100} date={"02 янв. 2026 г., 03:01"} type={"debit"}/>
                    <HistoryItem amount={100} date={"02 янв. 2026 г., 03:01"} type={"debit"}/>
                    <HistoryItem amount={100} date={"02 янв. 2026 г., 03:01"} type={"debit"}/>
                    <HistoryItem amount={100} date={"02 янв. 2026 г., 03:01"} type={"debit"}/>
                </div>

                <div className="menu-bottom">
                    <ActionButton text="Назад" primary={true} onClick={onClose} />
                </div>
            </div>
        </div>
    )
}
