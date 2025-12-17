import styles from "./Differentials.module.css";

export default function Differentials() {
    return (
        <main className={styles.main}>

            {/* HERO */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Diferenciais que vão além da entrega</h1>
                    <p>
                        A Parceria Company não entrega apenas soluções digitais.
                        Construímos parcerias estratégicas focadas em crescimento,
                        resultado e relacionamento de longo prazo.
                    </p>
                </div>
            </section>

            {/* DIFERENCIAIS */}
            <section className={styles.differentials}>
                <div className={styles.container}>
                    <h2>Nossos Diferenciais</h2>

                    <ul className={styles.grid}>
                        <li className={styles.card}>
                            <h3>Propostas rápidas e objetivas</h3>
                            <p>
                                Comunicação clara desde o primeiro contato, sem excesso
                                de etapas ou promessas irreais.
                            </p>
                        </li>

                        <li className={styles.card}>
                            <h3>Visão estratégica de longo prazo</h3>
                            <p>
                                Soluções pensadas para crescer junto com o negócio,
                                não apenas para resolver o agora.
                            </p>
                        </li>

                        <li className={styles.card}>
                            <h3>Parceria verdadeira</h3>
                            <p>
                                Atuamos lado a lado com o cliente, com acompanhamento
                                real e foco em fidelização.
                            </p>
                        </li>

                        <li className={styles.card}>
                            <h3>Entrega acessível e sob medida</h3>
                            <p>
                                Cada projeto respeita a realidade do cliente,
                                equilibrando custo, qualidade e necessidade.
                            </p>
                        </li>

                        <li className={styles.card}>
                            <h3>Soluções práticas e orientadas a resultado</h3>
                            <p>
                                Nada de ideia bonita que não funciona. Aqui o foco
                                é conversão, eficiência e impacto real.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* PROCESSO */}
            <section className={styles.process}>
                <div className={styles.container}>
                    <h2>Processo de Trabalho</h2>
                    <p className={styles.processIntro}>
                        Um fluxo simples, direto e transparente — do primeiro
                        contato à evolução contínua do projeto.
                    </p>

                    <ol className={styles.steps}>
                        <li>
                            <strong>Contato</strong>
                            <span>Entendimento rápido do cenário e objetivos.</span>
                        </li>
                        <li>
                            <strong>Diagnóstico</strong>
                            <span>Análise dos problemas e oportunidades reais.</span>
                        </li>
                        <li>
                            <strong>Proposta sob medida</strong>
                            <span>Solução alinhada à realidade da empresa.</span>
                        </li>
                        <li>
                            <strong>Execução acompanhada</strong>
                            <span>Comunicação constante e ajustes rápidos.</span>
                        </li>
                        <li>
                            <strong>Suporte contínuo</strong>
                            <span>O projeto evolui junto com o negócio.</span>
                        </li>
                    </ol>
                </div>
            </section>

            {/* DEPOIMENTOS */}
            <section className={styles.testimonials}>
                <div className={styles.container}>
                    <h2>Depoimentos</h2>
                    <p className={styles.placeholder}>
                        Estamos construindo nossa base de clientes.
                        Em breve, esta seção contará com depoimentos reais
                        de parceiros da Parceria Company.
                    </p>
                </div>
            </section>

        </main>
    );
}
