import styles from './style.module.css'

export function Cicles() {
    return (
        <div className={styles.Cicles}>
            <span>Ciclos:</span>
            <div className={styles.cycleDots}>
                <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.longBreakTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
            </div>
        </div>
    )
}