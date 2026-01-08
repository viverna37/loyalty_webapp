import '../../styles/menu.css'
import './history.css'
import {ActionButton} from "../ActionButton/ActionButton.tsx";
import {HistoryItem} from "../HistoryItem/HistoryItem.tsx";
import type {HistoryItemUI} from "../../../types/history.ts";

type Props = {
    data: HistoryItemUI[] | null;
    loading: boolean;
    open: boolean
    onClose: () => void
}

export function HistorySheet({ data, loading, open, onClose }: Props) {
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
                <div
                    className={`history-menu-content ${
                        (!data || data.length < 0) ? 'empty' : ''
                    }`}
                >
                    {!loading && (!data || data.length < 0) && (
                        <div className="history-empty">
                            Операций пока нет
                            <span>Начисления и списания будут отображаться здесь</span>
                        </div>
                    )}
                    {!loading && (data && data.length > 0) && (
                        <>
                            {data?.map((item, i) => (
                                <HistoryItem
                                    key={i}
                                    amount={item.amount}
                                    date={item.date}
                                    type={item.type}
                                />
                            ))}
                        </>
                    )}



                </div>

                <div className="menu-bottom">
                    <ActionButton text="Назад" primary={true} onClick={onClose} />
                </div>
            </div>
        </div>
    )
}
