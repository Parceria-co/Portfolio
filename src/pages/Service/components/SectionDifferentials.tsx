import styles from "../Service.module.css";

export default function SectionDifferentials() {
    const differentials = [
        {
            title: "Propostas rápidas e objetivas",
            description:
            "Comunicação clara desde o primeiro contato, sem excesso de etapas ou promessas irreais."
        },
        {
            title: "Visão estratégica com foco no longo prazo",
            description:
            "Pensamos além da entrega imediata, estruturando soluções que acompanham o crescimento do negócio."
        },
        {
            title: "Parceria verdadeira e relacionamento contínuo",
            description:
            "Atuamos lado a lado com o cliente, buscando evolução constante e fidelização."
        },
        {
            title: "Entregas acessíveis e sob medida",
            description:
            "Cada projeto é adaptado à realidade do cliente, equilibrando custo, qualidade e necessidade."
        },
        {
            title: "Soluções práticas, inovadoras e orientadas a resultado",
            description:
            "Aplicamos ideias que funcionam na prática, com foco em conversão, eficiência e impacto real."
        }
    ];


    return (    
        <section
            id="differentials"
            className={styles.differentials}
        >
            <div>
                <h2>Diferencias</h2>
                <ul className={styles.grid}>
                    {differentials.map((item) => (
                    <li key={item.title} className={styles.card}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </li>
                    ))}
                </ul>

            </div>
                
        </section>
    )
}