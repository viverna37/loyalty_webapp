import {ActionButton} from "../ActionButton/ActionButton.tsx";
import '../../styles/menu.css'
import './burn.css'
type Props = {
    open: boolean
    onClose: () => void
}

export function BurnSheet({ open, onClose }: Props) {
    return (
        <div className={`menu-overlay ${open ? 'open' : ''}`} onClick={onClose}>
            <div
                className={`menu-sheet ${open ? 'open' : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="menu-header">
                    <div className="menu-title">ПОТРАТИТЬ БАЛЛЫ</div>
                    <div className="menu-divider" />
                </div>

                <div className="burn-menu-content">
                    <img src="/qr.png" alt=""/>

                    <span className="burn-menu-subtitile">Предъявите QR-code администратору</span>
                </div>

                <div className="menu-bottom">
                    <ActionButton text="Назад" primary={true} onClick={onClose} />
                </div>
            </div>
        </div>
    )
}
