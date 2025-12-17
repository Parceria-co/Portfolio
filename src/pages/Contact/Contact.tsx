import Navbar from "@/components/Navbar/Index";
import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <>
            <main className={styles.main}>

                {/* HERO */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1>Contatos</h1>
                        <p>
                            Onde houver parceiros, estamos presentes.
                            Atuamos de forma digital, flexível e sempre acessível.
                        </p>
                    </div>
                </section>

                <div className={styles.divisor}></div>

                {/* LOCALIZAÇÃO */}
                <section className={styles.location}>
                    <div className={styles.container}>
                        <h2>Localização</h2>

                        <p>
                            Ainda não possuímos sede física fixa, mas estamos em processo
                            de instalação próxima à <span className={styles.highlight_txt}>Suzano – SP</span>.
                        </p>

                        <p>
                            Enquanto isso, operamos de forma totalmente digital,
                            atendendo parceiros de qualquer região com agilidade
                            e proximidade.
                        </p>
                    </div>
                </section>

                {/* CONTATO */}
                <section className={styles.contact}>
                    <div className={styles.container}>
                        <h2>Fale com a Parceria Company</h2>

                        <ul className={styles.contactList}>
                            <li>
                                <span>WhatsApp</span>
                                <a
                                    href="https://wa.me/5511991251903"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    (11) 99125-1903
                                </a>
                            </li>

                            <li>
                                <span>Email</span>
                                <a href="mailto:parceriacompany@gmail.com">
                                    parceriacompany@gmail.com
                                </a>
                            </li>

                            <li>
                                <span>Instagram</span>
                                <a
                                    href="https://www.instagram.com/parceria.company"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    @parceria.company
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>

            </main>
            <Navbar />
        </>
    );
}
