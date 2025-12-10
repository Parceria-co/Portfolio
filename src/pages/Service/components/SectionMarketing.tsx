import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "../Service.module.css";
import type { SectionProps } from "./SectionProps";

export default function SectionMarketing({isOpen, setIsOpen}: SectionProps) {
    return (
        <section
            className={styles.full}
            id="marketing"
        >
            <div className={styles.wrapper_title}>
                <div className={styles.title_and_button}>
                    <h2>Marketing</h2>
                    <button onClick={() => console.log("FOI")}>Saiba Mais</button>
                </div>
                <p>
                    Trabalhamos com <span className={styles.highlight_text}>otimização 
                    visual de produtos</span>, fortalecendo a presença digital de 
                    empresas por meio de fotos profissionais ajustadas para redes sociais, 
                    cardápios, anúncios e campanhas. Tudo pensado para gerar mais 
                    <span className={styles.highlight_text}> impacto, clareza e força de 
                    marca</span>.
                </p>

            </div>
            <div className={styles.features}>
                <h3>O que entregamos no seu pacote visual:</h3>
                { !isOpen ?
                    <ChevronDown className={styles.icon} onClick={() => setIsOpen(!isOpen)} />
                    :
                    <div>
                        <ChevronUp className={styles.icon} onClick={() => setIsOpen(!isOpen)} />
                        <ul>
                            <li>Pacote completo de fotos otimizadas para redes sociais</li>
                            <li>Tratamento profissional com foco em realce do produto</li>
                            <li>Versões ajustadas para campanhas e anúncios</li>
                            <li>Imagens padronizadas para manter a identidade visual</li>
                            <li>Correção de iluminação, contraste e nitidez</li>
                            <li>Composição mais forte e atrativa para vendas</li>
                            <li>Entrega rápida e já pronta para postagem</li>
                        </ul>
                    </div>
                }
                <p>
                    Tudo é preparado para que sua marca comunique valor instantâneo, 
                    conquiste atenção e aumente resultados por meio de uma estética 
                    <span className={styles.highlight_text}> consistente, profissional 
                    e altamente atrativa</span>.
                </p>
            </div>
        </section>
    )
}