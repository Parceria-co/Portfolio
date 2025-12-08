import Navbar from "@/components/Navbar/Index";
import styles from "./Home.module.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronUp, WindIcon } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Home() {

    const [opening, setOpening] = useState(true);
    const [isIconVisible, setIsIconVisible] = useState(true);
    const [isActiveBackground, setIsActiveBackground] = useState(false);

    const aboutUsRef = useRef<HTMLDivElement | null>(null);

    const location = useLocation();

    // Muda o background da sec History
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;

            setIsActiveBackground(scrolled > 70);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setOpening(false), 3000);
        return () => clearTimeout(timer);
    }, [])

    useEffect(() => { 
        document.body.style.overflow = 'hidden',
        document.documentElement.style.overflow = 'hidden'

        const timer = setTimeout(() => {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        }, 3000);

        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
        const element = aboutUsRef.current;
        if (!element) return;
        
        const onScroll = () => {   
            const rect = element.getBoundingClientRect();
            const reachedTop = rect.top > 1;

            setIsIconVisible(reachedTop);
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll) 
    }, [])

    useEffect(() => {
        if (window.location.hash) {
            window.history.replaceState(
                {},
                "",
                window.location.pathname + window.location.search || "/home"
            );
        }
    }, [location]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return(
        <>
            <div className={`${opening ? styles.opening : styles.close_opening}`}>
                <div className={styles.logo}>
                    <img src="ParceriaCompany_black_logo.png" alt="Parceria Company logo" />
                    <p>Parceria Company</p>
                </div>
            </div>
            <main>
                <section className={styles.banner}>
                    <img draggable={false} src="/assets/florest.jpeg" alt="banner" />
                </section>
                <section 
                    id="aboutUs"
                    ref={aboutUsRef}
                    className={`
                        ${styles.history}
                        ${isActiveBackground ? styles.active_background : ""}
                    `}
                >
                    <h1>Quem Somos?</h1>
                    {isIconVisible && <div className={styles.icon}>
                        <span>
                            <a href="#aboutUs">
                                <ChevronUp />
                            </a>
                        </span>
                    </div>}
                    <div className={styles.text}>
                        <p>
                            A Parceria Company nasceu da união de duas mentes ambiciosas, 
                            focadas em criar soluções práticas para problemas reais. 
                            Nossa essência está em transformar boas ideias em resultados, 
                            conectando pessoas, empresas e oportunidades.
                        </p>
                        <p>
                            Trabalhamos com visão estratégica, mentalidade de crescimento 
                            e foco absoluto no sucesso dos nossos parceiros.
                        </p>
                    </div>
                </section>
            </main>

            <Navbar />
        </>
    )
}