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
import {useBalance} from "../shared/hooks/useBalance.ts";
import {useTelegramInit} from "../shared/hooks/useTelegramInit.ts";
import {useBurnedPoints} from "../shared/hooks/useBurnedPoints.ts";
import {useHistory} from "../shared/hooks/useHistory.ts";

type Overlay =
    | 'menu'
    | 'history'
    | 'burn'
    | null

function UserMainScreen() {
    const [overlay, setOverlay] = useState<Overlay>(null)
    const tg = useTelegramInit();
    const isReady = tg.status === "ready";

    const {balance, loading_balance} = useBalance(
        isReady ? tg.initData : null
    );
    const {points, date, loading_burned_points} = useBurnedPoints(isReady ? tg.initData : null);
    const {data, loading_history} = useHistory(isReady ? tg.initData : null);

    return (

        <div className="screen">
            <BurgerButton onClick={() => setOverlay('menu')}/>
            <Header/>
            <div className="content">
                <BalanceCard value={balance} loading={loading_balance}/>

                <BurnCard value={points} date={date} loading={loading_burned_points}/>
            </div>
            <div className="bottom">
                <ActionButton
                    primary
                    text="Потратить баллы"
                    onClick={() => setOverlay('burn')}/>

                <ActionButton
                    text="История операций"
                    onClick={() => setOverlay('history')}/>
                <BurgerMenu
                    open={overlay === 'menu'}
                    onClose={() => setOverlay(null)}/>
                <HistorySheet data={data} loading={loading_history}
                              open={overlay === 'history'}
                              onClose={() => setOverlay(null)}
                />

                <BurnSheet
                    open={overlay === 'burn'}
                    onClose={() => setOverlay(null)}
                />
            </div>
        </div>
    )
}

export default UserMainScreen
