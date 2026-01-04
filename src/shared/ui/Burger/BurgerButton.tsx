import './burger.css'

type Props = {
    onClick: () => void
}

export function BurgerButton({ onClick }: Props) {
    return (
        <button className="burger" onClick={onClick}>
            ☰
        </button>
    )
}
