import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "../Service.module.css";
import type { SectionProps } from "./SectionProps";

export default function SectionInvestmentTrade({ isOpen, setIsOpen, message, sendMessage }: SectionProps) {
    return (
        <section className={styles.full} id="investimento">
            <div className={styles.wrapper_title}>
                <div className={styles.title_and_button}>
                    <h2>Consultoria de Investimento e Trade</h2>
                    <button onClick={() => sendMessage(message)}>Saiba Mais</button>
                </div>
                <p>
                    Orientação completa para quem quer evoluir no mercado financeiro, com 
                    estratégias claras e foco em <span className={styles.highlight_text}>reduzir 
                    erros e maximizar oportunidades</span>.
                </p>
            </div>

            <div className={styles.features}>
                <h3>O que oferecemos:</h3>

                {!isOpen ? (
                    <ChevronDown className={styles.icon} onClick={() => setIsOpen(!isOpen)} />
                ) : (
                    <div>
                        <ChevronUp className={styles.icon} onClick={() => setIsOpen(!isOpen)} />
                        <ul>
                            <li>Planejamento de investimentos personalizado</li>
                            <li>Análise de risco e gestão de portfólio</li>
                            <li>Estratégias para ativos digitais, ações e mercados alternativos</li>
                            <li>Suporte direto para decisões e otimização de performance</li>
                        </ul>
                    </div>
                )}

                <p>
                    Um acompanhamento profissional para quem deseja consistência e visão 
                    estratégica no mundo dos investimentos.
                </p>
            </div>
        </section>
    );
}
