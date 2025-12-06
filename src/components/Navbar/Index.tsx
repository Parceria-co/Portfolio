import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

export default function Navbar() {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [navbarHeight, setNavbarHeight] = useState(0);
    const [changeBackground, setChangeBackground] = useState(false);
    const [inactiveButton, setInactiveButton] = useState(false);
    
    const timerRef = useRef<number | null>(null);


    // inicia o loop de chamada
    const startLoop = () => {
        setInactiveButton(false);
    };

     const stopLoop = () => {
        resetTimer();
    };

    const resetTimer = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setInactiveButton(false);

        timerRef.current = setTimeout(() => {
            setInactiveButton(true);
        }, 5000);
    };

    const handleInteraction = () => {
        resetTimer();
        if (inactiveButton) return

        alert("botão ta zero");
    }

    // Faz a logo sumir após 5 segundos que abriu a tela
    useEffect(() => {
        resetTimer();
    }, [])

    // Muda o background do navbar ao scrollar
    useEffect(() => {
        if (!navbarHeight || navbarHeight == 0) return;

        const handleScroll = () => {
            const scrolled = window.scrollY;

            if (scrolled > navbarHeight * 4) {
                setChangeBackground(true);
            } else {
                setChangeBackground(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, [navbarHeight]);

    // Pega o height do navbar
    useEffect(() => {
        if (!containerRef.current) return;

        const height = containerRef.current.offsetHeight;
        setNavbarHeight(height);
    }, []);

    return (
        <nav
            ref={containerRef} 
            className={`${styles.container} ${changeBackground ? styles.background_changed : ""}`}
        >
            <ul className={styles.wrapper_ul}>
                {/* <li>
                    <a href=""></a>
                </li>
                <li>
                    <a href=""></a>
                </li> */}
                <li>
                    <button 
                        className={`${styles.logo} ${inactiveButton ? styles.logo_inactive : ""}`}
                        onMouseEnter={startLoop}
                        onMouseLeave={stopLoop}
                        onClick={handleInteraction}
                    >
                        <img src="/public/ParceriaCompany_black_logo.png" alt="Parceria Company logo" />
                    </button>
                </li>
                {/* <li>
                    <a href=""></a>
                </li>
                <li>
                    <a href=""></a>
                </li> */}
            </ul>
        </nav>
    )
}