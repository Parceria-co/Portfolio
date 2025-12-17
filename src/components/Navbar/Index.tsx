import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { Link, useNavigate } from "react-router-dom";
import { links } from "@/utils/data"

interface NavbarProps {
    fixedOn?: boolean
}

export default function Navbar({ fixedOn }: NavbarProps) {

    const containerRef = useRef<HTMLDivElement | null>(null);

    const [inactiveButton, setInactiveButton] = useState(false);
    const [showCircleMenu, setShowCircleMenu] = useState(false);

    const timerRef = useRef<number | null>(null);
    const navigate = useNavigate();


    // inicia o loop de chamada
    const startLoop = () => {
        if (fixedOn) return;

        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        
        setInactiveButton(false);
        setShowCircleMenu(true);
    };

     const stopLoop = () => {
        if (fixedOn) return;
        resetTimer();
    };

    const resetTimer = () => {
        if (fixedOn) return;

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

    useEffect(() => {
        if (fixedOn) {
            // força navbar ativa
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }

            setInactiveButton(false);
            setShowCircleMenu(true);
        } else {
            resetTimer()
        }
    }, [fixedOn]);



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
                    links && links.slice(0, 2).map((it, idx) => (
                        <li 
                            className={`
                                ${styles.item} 
                                ${styles["pos"+idx]}
                                ${!showCircleMenu ? styles.hidden : ""}
                            `}
                            onMouseEnter={startLoop}
                            onMouseLeave={stopLoop}
                        >
                            <Link to={it.href} title={it.label}>{it.icon}</Link>
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
                    links && links.slice(2, 4).map((it, idx) => (
                        <li 
                            className={`
                                ${styles.item} 
                                ${styles["pos"+idx]}
                                ${!showCircleMenu ? styles.hidden : ""}
                            `}
                            onMouseEnter={startLoop}
                            onMouseLeave={stopLoop}
                        >
                            <Link to={it.href} title={it.label}>{it.icon}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}