import Navbar from "@/components/Navbar/Index";
import styles from "./NextSteps.module.css";
import { useEffect, useState } from "react";

export default function NextSteps() {

    const [fixNav, setFixNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            const reachedBottom =
                scrollTop + windowHeight >= documentHeight - 2;

            if (reachedBottom) {
                setFixNav(true);
            } else {
                setFixNav(false)
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <main className={styles.main}>

                {/* HERO */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1>Próximos Passos</h1>
                        <p>
                            Expansão, visão estratégica e construção de algo maior.
                            A Parceria Company está apenas no começo.
                        </p>
                    </div>
                </section>

                {/* VISÃO */}
                <section className={styles.vision}>
                    <div className={styles.container}>
                        <h2>Visão de Expansão</h2>
                        <p>
                            A <span className={styles.highlight_txt}>Parceria Company</span> já está estruturando novas ramificações
                            para ampliar sua atuação e consolidar sua presença em
                            diferentes frentes de mercado.
                        </p>
                        <p>
                            Cada movimento é pensado com estratégia, identidade e
                            foco em crescimento sustentável.
                        </p>
                    </div>
                </section>

                {/* RAMIFICAÇÕES */}
                <section className={styles.branches}>
                    <div className={styles.container}>
                        <h2>Frentes em Desenvolvimento</h2>

                        <ul className={styles.grid}>
                            <li className={styles.card}>Produção Musical</li>
                            <li className={styles.card}>Conteúdo para Redes Sociais</li>
                            <li className={styles.card}>
                                Sites para nichos de estética e beleza
                            </li>
                            <li className={styles.card}>
                                Espaços físicos de beleza masculina e feminina
                            </li>
                            <li className={styles.card}>Linha própria de vestuário</li>
                        </ul>
                    </div>
                </section>

                {/* PARCEIROS */}
                <section className={styles.partners}>
                    <div className={styles.container}>
                        <h2>Chamado para Novos Parceiros</h2>

                        <p>
                            Estamos abrindo espaço para pessoas que desejam apresentar
                            ideias, projetos e habilidades. Buscamos indivíduos com
                            visão, ambição e inconformismo com a mediocridade.
                        </p>

                        <p>
                            Homens e mulheres fora da curva, que pensam diferente,
                            executam melhor e querem construir algo que vá além
                            do comum.
                        </p>

                        <p className={styles.callout}>
                            Se você se identifica com esse perfil, sabe que esta
                            mensagem é para você.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.cta}>
                    <div className={styles.container}>
                        <h2>Prepare-se para a Parceria Company</h2>
                        <p>
                            Ideias, execução e visão de longo prazo.
                            O próximo passo começa agora.
                        </p>
                    </div>
                </section>

            </main>
            <Navbar
                fixedOn={fixNav}
            />
        </>
    );
}
