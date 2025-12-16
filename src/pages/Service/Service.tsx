import Navbar from "@/components/Navbar/Index";
import styles from "./Service.module.css"; 
import { useEffect, useRef, useState } from "react";
import SectionMarketing from "./components/SectionMarketing";
import SectionSales from "./components/SectionSales";
import SectionOutsourcedSales from "./components/SectionOutsourcedSales";
import SectionPartnerReferral from "./components/SectionPartnerReferral";
import SectionInvestmentTrade from "./components/SectionInvestmentTrade";

export default function Service({}) {
    const list = [
        {href: "#vendas-sites", label: "Vendas de Sites"},
        {href: "#marketing", label: "Marketing"},
        {href: "#vendas-tercerizadas", label: "Vendas Tercerizadas"},
        {href: "#indicacoes", label: "Indicação de Parceiros"},
        {href: "#investimento", label: "Consultoria de Investimento e Trade"},
        {href: "#differentials", label: "Diferenciais"}
    ]

    const [sliderPhase, setSliderPhase] = useState<"start" | "middle" | "end">("start");

    const differentials = [
        {
            title: "Propostas rápidas e objetivas",
            description:
            "Comunicação clara desde o primeiro contato, sem excesso de etapas ou promessas irreais."
        },
        {
            title: "Visão estratégica com foco no longo prazo",
            description:
            "Pensamos além da entrega imediata, estruturando soluções que acompanham o crescimento do negócio."
        },
        {
            title: "Parceria verdadeira e relacionamento contínuo",
            description:
            "Atuamos lado a lado com o cliente, buscando evolução constante e fidelização."
        },
        {
            title: "Entregas acessíveis e sob medida",
            description:
            "Cada projeto é adaptado à realidade do cliente, equilibrando custo, qualidade e necessidade."
        },
        {
            title: "Soluções práticas, inovadoras e orientadas a resultado",
            description:
            "Aplicamos ideias que funcionam na prática, com foco em conversão, eficiência e impacto real."
        }
    ];


    const defaultMessage = "Olá, tudo bem? Gostaria de saber mais sobre";

    const sliderRef = useRef<HTMLDivElement | null>(null);

    const [isOpenFeature, setIsOpenFeature] = useState({
        sales: false,
        marketing: false,
        outsourceSales: false,
        partnerReferral: false,
        investmentTrade: false
    });

    const handleSendMessageWhatsApp = (message: string) => {
        console.log("foi aqui");
        
        const whatsappLink = "https://wa.me/5511991251903";

        window.open(`${whatsappLink}?text=${encodeURIComponent(message)}`, "_blank");
    }

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;
        
        let active = false;
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                active = entry.isIntersecting;
            },
            { threshold: 0.9 }
        );
        
        observer.observe(slider);

        const onScroll = () => {
            const index = Math.round(slider.scrollLeft / slider.clientWidth);
            const lastIndex = slider.children.length - 1;

            // fst_section
            if (index === 0) {
                setSliderPhase("start"); // fst visível
            } else {
                setSliderPhase("middle"); // fst escondida
            }

            // section de baixo
            if (index === lastIndex) {
                setSliderPhase("end"); // bottom visível
            }
        };

        const onWheel = (e: WheelEvent) => {
            if (!active) return;

            const slider = sliderRef.current;
            if (!slider) return;

            const index = Math.round(slider.scrollLeft / slider.clientWidth);
            const lastIndex = slider.children.length - 1;

            const goingDown = e.deltaY > 0;
            const goingUp = e.deltaY < 0;

            // libera Y somente:
            if (index === 0 && goingUp) return;
            if (index === lastIndex && goingDown) return;

            e.preventDefault();
            slider.scrollLeft += e.deltaY * 9;
        };
        
        slider.addEventListener("scroll", onScroll);
        slider.addEventListener("wheel", onWheel, { passive: false });

        return () => {
            observer.disconnect();
            slider.removeEventListener("wheel", onWheel);
            slider.removeEventListener("scroll", onScroll);
        };

    }, []);

    return (
        <>
            <main className={styles.main}>
                <section className={`
                    ${styles.fst_section}
                    ${sliderPhase !== "start" ? styles.hidden : ""}
                `}>
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
                    ref={sliderRef}
                    className={styles.slider}
                >
                    <SectionSales
                        isOpen={isOpenFeature["sales"]}
                        setIsOpen={(value) => 
                            setIsOpenFeature(prev => ({ ...prev, sales: value}))
                        } 
                        message={defaultMessage + " Vendas de Sites."}
                        sendMessage={handleSendMessageWhatsApp}
                    />
                    <SectionMarketing
                        isOpen={isOpenFeature["marketing"]}
                        setIsOpen={(value) => 
                            setIsOpenFeature(prev => ({ ...prev, marketing: value}))
                        }
                        message={defaultMessage + " Marketing."}
                        sendMessage={handleSendMessageWhatsApp}
                    />
                    <SectionOutsourcedSales
                        isOpen={isOpenFeature["outsourceSales"]}
                        setIsOpen={(value) => 
                            setIsOpenFeature(prev => ({ ...prev, outsourceSales: value}))
                        }
                        message={defaultMessage + " Vendas Tercerizadas."}
                        sendMessage={handleSendMessageWhatsApp}
                    />
                    <SectionPartnerReferral
                        isOpen={isOpenFeature["partnerReferral"]}
                        setIsOpen={(value) => 
                            setIsOpenFeature(prev => ({ ...prev, partnerReferral: value}))
                        }
                        message={defaultMessage + " Indicação de Parceiros"}
                        sendMessage={handleSendMessageWhatsApp}
                    />
                    <SectionInvestmentTrade
                        isOpen={isOpenFeature["investmentTrade"]}
                        setIsOpen={(value) => 
                            setIsOpenFeature(prev => ({ ...prev, investmentTrade: value}))
                        }
                        message={defaultMessage + " Investimento e Trade"}
                        sendMessage={handleSendMessageWhatsApp}
                    />
                </section>
                <div className={styles.divisor}></div>
                <section
                    id="differentials"
                    className={`
                        ${styles.differentials}
                        ${sliderPhase === "end" ? styles.visible : styles.super_hidden}
                    `}
                >
                    <div>
                        <h2>Diferencias</h2>
                        <ul className={styles.grid}>
                            {differentials.map((item) => (
                            <li key={item.title} className={styles.card}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </li>
                            ))}
                        </ul>

                    </div>
                        
                </section>
                <section className={styles.cases}>
                    <div>
                        <h2>Cases</h2>
                    </div>
                </section>
            </main>
            <Navbar/>
        </>
    )

}