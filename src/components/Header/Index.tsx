import styles from "./index.module.css";

export default function Header() {
    return (
        <header className={styles.container}>
            <nav className={styles.navigation}>
                <ul className={styles.wrapper_ul}>
                    <li>
                        <a href="#sobre-nos"></a>
                    </li>
                    <li>
                        <a href="#servicos"></a>
                    </li>
                    <li>
                        <div className={styles.div_logo}>
                            <img src="" alt="Parceria Company logo" />
                        </div>
                    </li>
                    <li>
                        <a href="#diferenciais"></a>
                    </li>
                    <li>
                        <a href="#contatos"></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}