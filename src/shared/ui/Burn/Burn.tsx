import {ActionButton} from "../ActionButton/ActionButton.tsx";
import '../../styles/menu.css'
import './burn.css'
import {QRCode} from "../QRCode/QRCode.tsx";
import {useQRCode} from "../../hooks/useQRCode.ts";
import {useTelegramInit} from "../../hooks/useTelegramInit.ts";

type Props = {
    open: boolean
    onClose: () => void
}

export function BurnSheet({open, onClose}: Props) {
    const tg = useTelegramInit();
    const isReady = tg.status === "ready";

    const {data, loading_qr_code} = useQRCode(
        isReady && open ? tg.initData : null
    );


    return (
        <div className={`menu-overlay ${open ? 'open' : ''}`} onClick={onClose}>
            <div
                className={`menu-sheet ${open ? 'open' : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="menu-header">
                    <div className="menu-title">ПОТРАТИТЬ БАЛЛЫ</div>
                    <div className="menu-divider"/>
                </div>

                <div className="burn-menu-content">
                    {loading_qr_code && <span>Загрузка QR-кода…</span>}

                    {!loading_qr_code && data && (
                        <QRCode
                            value={`https://t.me/loyalty_bozdyrevdev_bot?start=spend_${data.token}`}
                        />
                    )}

                    {!loading_qr_code && !data && (
                        <span>QR-код недоступен</span>
                    )}
                     <span className="burn-menu-subtitile">
                        Предъявите QR-code администратору
                     </span>
                </div>


                <div className="menu-bottom">
                    <ActionButton text="Назад" primary={true} onClick={onClose}/>
                </div>
            </div>
        </div>
    )
}
