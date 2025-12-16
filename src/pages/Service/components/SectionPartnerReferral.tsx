import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "../Service.module.css";
import type { SectionProps } from "./SectionProps";

export default function SectionPartnerReferral({ isOpen, setIsOpen, message, sendMessage }: SectionProps) {
    
    return (
        <section className={styles.full} id="indicacoes">
            <div className={styles.wrapper_title}>
                <div className={styles.title_and_button}>
                    <h2>Indicação de Parceiros</h2>
                    <button onClick={() => sendMessage(message)}>Saiba Mais</button>
                </div>
                <p>
                    Conectamos empresas a profissionais qualificados para executar serviços 
                    específicos, garantindo <span className={styles.highlight_text}>agilidade, 
                    competência e segurança</span> em cada demanda.
                </p>
            </div>

            <div className={styles.features}>
                <h3>Tipos de parceiros disponíveis:</h3>

                {!isOpen ? (
                    <ChevronDown className={styles.icon} onClick={() => setIsOpen(!isOpen)} />
                ) : (
                    <div>
                        <ChevronUp className={styles.icon} onClick={() => setIsOpen(!isOpen)} />
                        <ul>
                            <li>Criativos</li>
                            <li>Técnicos</li>
                            <li>Operacionais</li>
                            <li>Comerciais</li>
                        </ul>
                    </div>
                )}

                <p>
                    Facilitamos conexões que resolvem problemas e entregam resultados.
                </p>
            </div>
        </section>
    );
}
