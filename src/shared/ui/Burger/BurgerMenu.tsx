import '../../styles/menu.css'
import {ActionButton} from "../ActionButton/ActionButton.tsx";

type Props = {
    open: boolean
    onClose: () => void
}

export function BurgerMenu({open, onClose}: Props) {
    return (
        <div
            className={`menu-overlay ${open ? 'open' : ''}`}
            onClick={onClose}
        >
            <div
                className={`menu-sheet ${open ? 'open' : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="menu-content">
                    <div className="menu-header">
                        <div className="menu-title">МЕНЮ</div>
                        <div className="menu-divider"/>
                    </div>

                    <div className="menu-content-buttons">
                        <ActionButton onClick={onClose} text={"Поддержка"}/>
                        <ActionButton onClick={onClose} text={"Контакты"}/>
                        <ActionButton onClick={onClose} text={"F.A.Q."}/>
                    </div>
                </div>

                <div className="menu-bottom">
                    <ActionButton onClick={onClose} text={"Назад"} primary={true} />
                </div>

            </div>
        </div>
    )
}
