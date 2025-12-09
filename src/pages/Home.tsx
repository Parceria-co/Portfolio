import Navbar from "@/components/Navbar/Index";
import styles from "./Home.module.css";
import { useEffect, useRef, useState } from "react";
import { ArrowBigRight, ChevronUp, Phone, Sparkles, Wrench } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Home() {

    const [opening, setOpening] = useState(true);
    const [isIconVisible, setIsIconVisible] = useState(true);
    const [isActiveBackground, setIsActiveBackground] = useState(false);

    const aboutUsRef = useRef<HTMLDivElement | null>(null);

    const location = useLocation();

    const links = [
        {href: "/servicos", label: "Serviços", icon: <Wrench />},
        {href: "/diferenciais", label: "Diferenciais", icon: <Sparkles/>},
        {href: "/contatos", label: "Contatos", icon: <Phone />},
        {href: "/proximos-passos", label: "NextUP", icon: <ArrowBigRight />},
    ];

    // Muda o background da sec History
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;

            setIsActiveBackground(scrolled > 70);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Define o tempo da abertura em 3 segundos
    useEffect(() => {
        const timer = setTimeout(() => setOpening(false), 3000);
        return () => clearTimeout(timer);
    }, [])

    // Remove o scroll após 0.5 segundo, retorna com o scroll após 3 segundos
    useEffect(() => { 
        let timer = setTimeout(() => { 
            document.body.style.overflow = 'hidden',
            document.documentElement.style.overflow = 'hidden'
        }, 500);

        timer = setTimeout(() => {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        }, 3000);

        return () => clearTimeout(timer);
    }, [])


    // Remove a seta do AboutUs quando desce o scroll
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

    // Remove qualquer texto depois do /home
    useEffect(() => {
        if (window.location.hash) {
            window.history.replaceState(
                {},
                "",
                window.location.pathname + window.location.search || "/home"
            );
        }
    }, [location]);

    // Scrolla até o topo
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                    <div className={styles.logo}>
                        <img src="ParceriaCompany_black_logo.png" alt="Parceria Company logo" />
                        <h1>Parceria Company</h1>
                    </div>
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
                            A <span className={styles.highlight_text}>Parceria Company </span> 
                            nasceu da união de duas mentes ambiciosas, focadas em criar 
                            soluções práticas para problemas reais. Nossa essência está 
                            em transformar boas ideias em resultados, conectando pessoas, 
                            empresas e oportunidades.
                        </p>
                        <p>
                            Trabalhamos com visão estratégica, mentalidade de crescimento 
                            e foco absoluto no sucesso dos nossos parceiros.
                        </p>
                    </div>
                </section>
                    
                <div className={styles.divisor}></div>
                    
                <section className={styles.highlight}>
                    <div className={styles.mission}>
                        <h2>Missão</h2>
                        <p>
                            Criar soluções inteligentes que resolvam problemas reais, 
                            entregando resultados expressivos e <span className={styles.highlight_text}>
                                retorno acelerado para
                                nossos clientes.
                            </span> Acreditamos em inovação, estratégia e ação.
                        </p>
                    </div>
                    <div className={styles.vision}>
                        <h2>Visão</h2>
                        <p>
                            Ser referência em <span className={styles.highlight_text}>soluções práticas</span> e parcerias estratégicas, 
                            unindo forças para <span className={styles.highlight_text}>fortalecer empresas</span> e torná-las mais 
                            independentes e competitivas.
                        </p>
                    </div>
                    <div className={styles.value}>
                        <h2>Valores</h2>
                        <p>
                            <span className={styles.highlight_text}>Inovação</span> - Atitude - <span className={styles.highlight_text}>Estratégia</span> - Criatividade - Aprendizado - <span className={styles.highlight_text}>Fé</span>
                        </p>
                    </div>
                </section>
            </main>
            <footer>
                <section>
                    <ul>
                        {links.map(it => (
                            <li>
                                <span className={styles.icon}>{it.icon}</span>
                                <Link to={it.href}>{it.label}</Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </footer>

            <Navbar
                links={links}
            />
        </>
    )
}