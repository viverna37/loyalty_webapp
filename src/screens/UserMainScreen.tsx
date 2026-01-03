import {BalanceCard} from "../shared/ui/BalanceCard/BalanceCard.tsx";
import {BurnCard} from "../shared/ui/BurnCard/BurnCard.tsx";
import {ActionButton} from "../shared/ui/ActionButton/ActionButton.tsx";
import '../shared/styles/index.css'
import '../shared/ui/ActionButton/action_button.css'

function UserMainScreen() {
    return (
        <div className="screen">
            <BalanceCard value={1234567} />
            <BurnCard value={123456} date="24 февраля 2025" />

            <ActionButton
                primary
                text="Потратить баллы"
                onClick={() => console.log('Потратить')}
            />

            <ActionButton
                text="История операций"
                onClick={() => console.log('История')}
            />
        </div>
    )
}

export default UserMainScreen
