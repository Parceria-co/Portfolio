import Navbar from "@/components/Navbar/Index";
import styles from "./Service.module.css"; 
import { useEffect, useRef, useState } from "react";
import SectionMarketing from "./components/SectionMarketing";
import SectionSales from "./components/SectionSales";
import SectionOutsourcedSales from "./components/SectionOutsourcedSales";
import SectionPartnerReferral from "./components/SectionPartnerReferral";
import SectionInvestmentTrade from "./components/SectionInvestmentTrade";
import SectionCases from "./components/SectionCases";
import SectionDifferentials from "./components/SectionDifferentials";
import { useLocation } from "react-router-dom";

export default function Service({}) {
    const list = [
        {href: "/servicos/#vendas-sites", label: "Vendas de Sites"},
        {href: "/servicos/#marketing", label: "Marketing"},
        {href: "/servicos/#vendas-tercerizadas", label: "Vendas Tercerizadas"},
        {href: "/servicos/#indicacoes", label: "Indicação de Parceiros"},
        {href: "/servicos/#investimento", label: "Consultoria de Investimento e Trade"},
        {href: "/servicos/#differentials", label: "Diferenciais"},
        {href: "/servicos/#cases", label: "Cases"},
    ]

    const defaultMessage = "Olá, tudo bem? Gostaria de saber mais sobre";

    const sliderRef = useRef<HTMLDivElement | null>(null);
    const location = useLocation();

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
    
    // Limpa a url
    useEffect(() => {
        if (window.location.hash) {
            window.history.replaceState(
                {},
                "",
                window.location.pathname + window.location.search
            );
        }
    }, [location]);
    

    return (
        <>
            <main className={styles.main}>
                <section className={styles.fst_section}>
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
                                    <a 
                                        href={it.href} title={it.label}>{it.label}</a>
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
                <span className={styles.span}>Role para o lado</span>
                <SectionDifferentials />
                <SectionCases />
                </main>
            <Navbar/>
        </>
    )

}