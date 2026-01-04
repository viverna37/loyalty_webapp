import {BalanceCard} from "../shared/ui/BalanceCard/BalanceCard.tsx";
import {BurnCard} from "../shared/ui/BurnCard/BurnCard.tsx";
import {ActionButton} from "../shared/ui/ActionButton/ActionButton.tsx";
import {Header} from "../shared/ui/Header/Header.tsx";

import '../shared/styles/main.css'
import {BurgerButton} from "../shared/ui/Burger/BurgerButton.tsx";
import {useState} from "react";
import {BurgerMenu} from "../shared/ui/Burger/BurgerMenu.tsx";
import {HistorySheet} from "../shared/ui/History/History.tsx";
import {BurnSheet} from "../shared/ui/Burn/Burn.tsx";

type Overlay =
    | 'menu'
    | 'history'
    | 'burn'
    | null

function UserMainScreen() {
    const [overlay, setOverlay] = useState<Overlay>(null)
    return (

        <div className="screen">
            <BurgerButton onClick={() => setOverlay('menu')}/> <Header/>
            <div className="content">
                <BalanceCard value={1234567}/>
                <BurnCard value={123456} date="24 февраля 2025"/>
            </div>
            <div className="bottom">
                <ActionButton
                    primary
                    text="Потратить баллы"
                    onClick={() => setOverlay('burn')}/>

                <ActionButton
                    text="История операций"
                    onClick={() => setOverlay('history')}/>
            </div>
            <BurgerMenu
                open={overlay === 'menu'}
                onClose={() => setOverlay(null)}/>
            <HistorySheet
                open={overlay === 'history'}
                onClose={() => setOverlay(null)}
            />

            <BurnSheet
                open={overlay === 'burn'}
                onClose={() => setOverlay(null)}
            />
        </div>
    )
}

export default UserMainScreen
