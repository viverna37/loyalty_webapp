import './action_button.css'

type ActionButtonProps = {
    text: string
    primary?: boolean
    onClick?: () => void
}

export function ActionButton({
                                 text,
                                 primary = false,
                                 onClick,
                             }: ActionButtonProps) {
    return (
        <button
            className={`action-button ${primary ? 'primary' : 'secondary'}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}
