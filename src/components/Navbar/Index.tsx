import { Sparkles, Wrench, Phone, ArrowBigRight, icons } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { href } from "react-router-dom";

export default function Navbar() {

    const containerRef = useRef<HTMLDivElement | null>(null);

    const [navbarHeight, setNavbarHeight] = useState(0);
    const [changeBackground, setChangeBackground] = useState(false);
    const [inactiveButton, setInactiveButton] = useState(false);
    const [showCircleMenu, setShowCircleMenu] = useState(false);

    const timerRef = useRef<number | null>(null);


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
        if (inactiveButton) return

        alert("botão ta zero");
    }

    const links = [
        {href: "/servicos", label: "Serviços", icon: <Wrench />},
        {href: "/diferenciais", label: "Diferenciais", icon: <Sparkles/>},
        {href: "/contatos", label: "Contatos", icon: <Phone />},
        {href: "/proximos-passos", label: "NextUP", icon: <ArrowBigRight />},
    ];

    // Faz a logo sumir após 5 segundos que abriu a tela
    useEffect(() => {
        resetTimer();
    }, [])

    // Muda o background do navbar ao scrollar
    useEffect(() => {
        if (!navbarHeight || navbarHeight == 0) return;

        const handleScroll = () => {
            const scrolled = window.scrollY;

            if (scrolled > navbarHeight) {
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
            className={`
                ${styles.container} 
                ${!inactiveButton ? styles.background_changed : ""}
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
                        <img src="/public/ParceriaCompany_black_logo.png" alt="Parceria Company logo" />
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