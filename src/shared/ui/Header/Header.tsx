import './header.css'

export function Header() {
    return (
        <div className="header">
            <img src={'/logo.png'} alt="logo" className="logo"/>
            <div className="content">
                <div className="header-title">BOZDYREV.DEV</div>
                <div className="header-subtitle">студия разработки чат-ботов</div>
            </div>
        </div>
    )
}
