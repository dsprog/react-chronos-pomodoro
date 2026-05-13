import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, MoonIcon } from 'lucide-react';
import styles from './style.module.css'
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark';
        return storageTheme;
    });

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    };

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        event.preventDefault();
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <nav className={styles.menu}>
            <a href="#"
                className={styles.menuLink}
                title="Ir para a home"
                aria-label="Ir para a home">
                <HouseIcon />
            </a>

            <a href="#"
                className={styles.menuLink}
                title="Ver histórico"
                aria-label="Ver histórico">
                <HistoryIcon />
            </a>

            <a href="#"
                className={styles.menuLink}
                title="Configurações"
                aria-label="Configurações">
                <SettingsIcon />
            </a>

            <a href="#"
                className={styles.menuLink}
                title="Mudar Tema"
                aria-label="Mudar Tema"

                onClick={handleThemeChange}
            >
                {nextThemeIcon[theme]}
            </a>
        </nav >
    )
}