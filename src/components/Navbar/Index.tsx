import { useEffect, useRef, useState, type JSX } from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

type Link = {
    href: string;
    label: string;
    icon: JSX.Element;
};

type NavbarProps = {
    links: Link[];
}

export default function Navbar({
    links
} : NavbarProps) {

    const containerRef = useRef<HTMLDivElement | null>(null);

    const [inactiveButton, setInactiveButton] = useState(false);
    const [showCircleMenu, setShowCircleMenu] = useState(false);

    const timerRef = useRef<number | null>(null);
    const navigate = useNavigate();


    // inicia o loop de chamada
    const startLoop = () => {
        setInactiveButton(false);
        setShowCircleMenu(true);
    };

     const stopLoop = () => {
        resetTimer();
    };

    const resetTimer = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setInactiveButton(false);
        setShowCircleMenu(true);

        timerRef.current = setTimeout(() => {
            setInactiveButton(true);
            setShowCircleMenu(false);
        }, 5000);
    };

    const handleInteraction = () => {
        
        resetTimer();
        if(inactiveButton) return;

        navigate("/")
        
    }

    // Faz a logo sumir após 5 segundos que abriu a tela
    useEffect(() => {
        resetTimer();
    }, [])


    return (
        <nav
            ref={containerRef} 
            className={`
                ${styles.container} 
                ${!inactiveButton ? styles.background_changed : ""}
                ${inactiveButton ? styles.nav_inactive : ""}
            `}
        >
            <ul     
                className={`
                    ${styles.wrapper_ul}
                    ${!showCircleMenu ? styles.center_ul : ""}
                `}
            >
                {
                    showCircleMenu && links && links.slice(0, 2).map((it, idx) => (
                        <li className={`${styles.item} ${styles["pos"+idx]}`}>
                            <a href={it.href} title={it.label}>{it.icon}</a>
                        </li>
                    ))
                }
                <li className={styles.li_button}>
                    <button 
                        className={`${styles.logo} ${inactiveButton ? styles.logo_inactive : ""}`}
                        onMouseEnter={startLoop}
                        onMouseLeave={stopLoop}
                        onClick={handleInteraction}
                    >
                        <img src="/ParceriaCompany_black_logo.png" alt="Parceria Company logo" />
                    </button>
                </li>
                {
                    showCircleMenu && links && links.slice(2, 4).map((it, idx) => (
                        <li className={`${styles.item} ${styles["pos"+idx]}`}>
                            <a href={it.href} title={it.label}>{it.icon}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}