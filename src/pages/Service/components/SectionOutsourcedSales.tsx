import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "../Service.module.css";
import type { SectionProps } from "./SectionProps";

export default function SectionOutsourcedSales({ isOpen, setIsOpen }: SectionProps) {
    return (
        <section className={styles.full} id="vendas-tercerizadas">
            <div className={styles.wrapper_title}>
                <div className={styles.title_and_button}>
                    <h2>Vendas Terceirizadas</h2>
                    <button onClick={() => console.log("FOI")}>Saiba Mais</button>
                </div>
                <p>
                    Ajudamos marcas a vender mais através de processos estratégicos,
                    utilizando seleção de produtos, campanhas digitais e atendimento 
                    organizado para gerar <span className={styles.highlight_text}>tráfego, 
                    interesse e conversões reais</span>.
                </p>
            </div>

            <div className={styles.features}>
                <h3>Como funciona:</h3>

                {!isOpen ? (
                    <ChevronDown className={styles.icon} onClick={() => setIsOpen(!isOpen)} />
                ) : (
                    <div>
                        <ChevronUp className={styles.icon} onClick={() => setIsOpen(!isOpen)} />
                        <ul>
                            <li>Selecionamos produtos no Instagram ou Shopee com alto potencial</li>
                            <li>Desenvolvemos campanhas e postagens otimizadas</li>
                            <li>Recebemos pedidos ou direcionamos para sua loja oficial</li>
                            <li>Geramos tráfego, atenção e crescimento contínuo</li>
                        </ul>
                    </div>
                )}

                <p>
                    Um modelo dinâmico e eficiente para ampliar alcance e acelerar resultados.
                </p>
            </div>
        </section>
    );
}
