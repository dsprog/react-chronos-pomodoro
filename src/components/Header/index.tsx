import styles from "./style.module.css";

export function Header() {
    return (
        <>
            <div className={styles.header}>
                <h1>Chronos Pomodoro</h1>
            </div>
        </>
    );
}