import {useTelegramInit} from "../shared/hooks/useTelegramInit.ts";
import {ErrorScreen} from "../screens/ErrorScreen/ErrorScreen.tsx";
import UserMainScreen from "../screens/UserMainScreen.tsx";

function App() {
    const tg = useTelegramInit();

    if (tg.status === "loading") {
        return null;
    }

    if (tg.status === "error") {
        if (tg.reason === "NOT_IN_TELEGRAM") {
            return (
                <ErrorScreen
                    title="Откройте приложение через Telegram"
                    description="Это приложение работает только внутри Telegram"
                />
            );
        }

        return (
            <ErrorScreen
                title="Ошибка инициализации"
                description="Не удалось получить данные Telegram"
            />
        );
    }

    // tg.status === "ready"
    return <UserMainScreen />;
}

export default App;
