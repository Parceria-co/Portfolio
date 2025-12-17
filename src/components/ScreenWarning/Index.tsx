import styles from "./ScreenWarning.module.css";

interface Props {
    onAccept: () => void;
}

export default function ScreenWarning({ onAccept }: Props) {
    return (
        <div className={styles.overlay}>
            <div className={styles.box}>
                <h2>Aviso de Responsividade</h2>
                <p>
                    Este site ainda não teve sua responsividade totalmente
                    desenvolvida para telas maiores.
                </p>
                <p>
                    Você pode continuar navegando normalmente.
                </p>
                <button onClick={onAccept}>Continuar</button>
            </div>
        </div>
    );
}
