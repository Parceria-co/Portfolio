import { useEffect } from "react";
import { X } from "lucide-react";
import styles from "./Index.module.css";

interface ImageModalProps {
    image: string;
    onClose: () => void;
}

export default function ImageModal({
    image,
    onClose
}: ImageModalProps) {

    useEffect(() => {
        const bodyOverflow = document.body.style.overflow;
        const htmlOverflow = document.documentElement.style.overflow;

        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = bodyOverflow;
            document.documentElement.style.overflow = htmlOverflow;
        };
    }, []);


    return (
        <div className={styles.modal}>
        <div
            className={styles.background}
            onClick={onClose}
        />

        <X
            className={styles.close}
            onClick={onClose}
            size={28}
        />

            <div className={styles.wrapperImage}>
                <img
                    src={image}
                    alt="Imagem do case"
                    className={styles.image}
                    draggable={false}
                />
            </div>

        </div>
    );
}
