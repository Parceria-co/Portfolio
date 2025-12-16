import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "../Service.module.css";
import type { SectionProps } from "./SectionProps";

export default function SectionSales({isOpen, setIsOpen, message, sendMessage }:SectionProps) {    
    return (
        <section
            className={styles.full}
            id="vendas-sites"
        >
            <div className={styles.wrapper_title}>
                <div className={styles.title_and_button}>
                    <h2>Vendas de Sites</h2>
                    <button onClick={() => sendMessage(message)}>Saiba Mais</button>
                </div>
                <p>
                    Criamos sites completos e profissionais, 
                    <span className={styles.highlight_text}> exclusivamente 
                    para restaurantes</span>, com funcionalidades 
                    desenvolvidas para melhorar a experiência do cliente e 
                    <span className={styles.highlight_text}> impulsionar seus 
                    resultados</span>.
                </p>
            </div>
            <div className={styles.features}>
                <h3>Recursos pensados para o seu restaurante:</h3>
                { !isOpen ?
                    <ChevronDown className={styles.icon} onClick={() => setIsOpen(!isOpen)} />
                    :
                    <div>
                        <ChevronUp className={styles.icon} onClick={() => setIsOpen(!isOpen)} />
                        <ul>
                            <li>Página para reservas de eventos e festas grandes</li>
                            <li>Sistema de reservas de mesa integrado</li>
                            <li>Cardápio digital totalmente editável, destacando seus pratos</li>
                            <li>Informações detalhadas sobre cada unidade</li>
                            <li>História e identidade do restaurante</li>
                            <li>Página de contato completa e integrada</li>
                            <li>Layout moderno, rápido e responsivo, otimizado para o público gastronômico</li>
                        </ul>
                    </div>
                }
                <p>
                    Entregamos sites rápidos, funcionais e totalmente voltados para 
                    restaurantes, <span className={styles.highlight_text}>projetado 
                    para aumentar autoridade, presença digital e conversão</span>, 
                    oferecendo uma experiência única para seus clientes.
                </p>
            </div>
        </section>
    )
}