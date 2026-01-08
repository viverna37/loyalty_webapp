import "./error_screen.css";

type ErrorScreenProps = {
    title: string;
    description?: string;
};

export function ErrorScreen({ title, description }: ErrorScreenProps) {
    return (
        <div className="error-screen">
            <div className="error-card">
                <h2 className="error-title">{title}</h2>
                {description && (
                    <p className="error-description">{description}</p>
                )}
            </div>
        </div>
    );
}
