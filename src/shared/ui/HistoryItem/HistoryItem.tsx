
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

        <div className="menu-content">

        </div>

        <div className="menu-bottom">
    </div>
    </div>
    </div>
)
}