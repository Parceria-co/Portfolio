import Navbar from "@/components/Navbar/Index";
import styles from "./Service.module.css"; 
import { useEffect, useRef, useState } from "react";
import SectionMarketing from "./components/SectionMarketing";
import SectionSales from "./components/SectionSales";
import SectionOutsourcedSales from "./components/SectionOutsourcedSales";
import SectionPartnerReferral from "./components/SectionPartnerReferral";
import SectionInvestmentTrade from "./components/SectionInvestmentTrade";
import { useLocation } from "react-router-dom";

export default function Service({}) {
    const list = [
        {href: "#vendas-sites", label: "Vendas de Sites"},
        {href: "#marketing", label: "Marketing"},
        {href: "#vendas-tercerizadas", label: "Vendas Tercerizadas"},
        {href: "#indicacoes", label: "Indicação de Parceiros"},
        {href: "#investimento", label: "Consultoria de Investimento e Trade"},
    ]

    const sliderRef = useRef<HTMLDivElement | null>(null);

    const location = useLocation();
    console.log(location);
    

    const [isOpenFeature, setIsOpenFeature] = useState({
        sales: false,
        marketing: false,
        outsourceSales: false,
        partnerReferral: false,
        investmentTrade: false
    });

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        // Evitar interferência antes do slider aparecer
        let active = false;

        const observer = new IntersectionObserver(
            ([entry]) => {
                active = entry.isIntersecting;
            },
            { threshold: 0.7 }
        );

        observer.observe(slider);


        // --- DESKTOP: scroll vertical => horizontal ---
        const handleWheel = (e: WheelEvent) => {
            if (!active) return;

            const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
            
            const isScrollingInside = 
                !(slider.scrollLeft <= 0 && e.deltaY < 0) &&
                !(slider.scrollLeft >= maxScrollLeft && e.deltaY > 0);

            if (isScrollingInside) {                
                e.preventDefault();
                slider.scrollLeft += e.deltaY;
            }
            
        };

        slider.addEventListener("wheel", handleWheel as EventListener, { passive: false });

        return () => {
            observer.disconnect();
            slider.removeEventListener("wheel", handleWheel as EventListener);
        };
    }, []);

    return (
        <>
            <main className={styles.main}>
                <section>
                    <div className={styles.presentation}>
                        <h1>Serviços</h1>
                        <p>
                            Conectamos estratégia, criatividade e oportunidades 
                            para transformar ideias em resultados concretos e 
                            financeiros.
                        </p>
                    </div>

                    <div className={styles.divisor}></div>
                
                    <div className={styles.summary}>
                        <h2>Resumo</h2>
                        <ul>
                            {list.map(it => (
                                <li>
                                    <a href={"/servicos" + it.href} title={it.label}>{it.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section 
                    className={styles.slider}
                    ref={sliderRef}
                >
                    <SectionSales
                        isOpen={isOpenFeature["sales"]}
                        setIsOpen={(value) => 
                            setIsOpenFeature(prev => ({ ...prev, sales: value}))
                        } 
                    />
                    <SectionMarketing
                        isOpen={isOpenFeature["marketing"]}
                        setIsOpen={(value) => 
                            setIsOpenFeature(prev => ({ ...prev, marketing: value}))
                        }
                    />
                    <SectionOutsourcedSales
                        isOpen={isOpenFeature["outsourceSales"]}
                        setIsOpen={(value) => 
                            setIsOpenFeature(prev => ({ ...prev, outsourceSales: value}))
                        }
                    />
                    <SectionPartnerReferral
                        isOpen={isOpenFeature["partnerReferral"]}
                        setIsOpen={(value) => 
                            setIsOpenFeature(prev => ({ ...prev, partnerReferral: value}))
                        }
                    />
                    <SectionInvestmentTrade
                        isOpen={isOpenFeature["investmentTrade"]}
                        setIsOpen={(value) => 
                            setIsOpenFeature(prev => ({ ...prev, investmentTrade: value}))
                        }
                    />
                </section>
            </main>
            <Navbar/>
        </>
    )

}