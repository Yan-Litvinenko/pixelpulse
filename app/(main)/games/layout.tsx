import styles from '@/styles/components/gamesLayout/GamesLayout.module.scss';

export default function GamesLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
    return (
        <section className={styles.games}>
            <h2 className={styles.games__title}>mini games</h2>
            {children}
        </section>
    );
}
