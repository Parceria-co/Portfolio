import ImageModal from "@/components/ImageModal/Index";
import styles from "../Service.module.css";
import { useState } from "react";

export default function SectionCases() {
    const casesData = [
        {
            id: "restaurant-site",
            title: "Site profissional para restaurante",
            context: "Restaurante precisava de uma presença digital organizada para apresentar cardápio, informações e facilitar o contato com clientes.",
            deliveries: [
                "Layout moderno e responsivo",
                "Cardápio digital editável",
                "Página de contato integrada ao WhatsApp",
                "Estrutura pensada para conversão",
                "Organização clara das informações"
            ],
            media: {
                images: [],
                videos: [],
				gifs: [
					"/gif_record_desktop.gif",
					"/gif_record_mobile.gif"
				]
            },
            anonymous: true
        }
    ];

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState<string>("");

	const handleClickImage = (src: string) => {
		setSelectedImage(src);
		setIsModalOpen(true);
	}

	return (
		<section 
			id="cases"
			className={styles.cases}
		>
			<div>
				<h2>Cases</h2>

				{casesData.map((item) => (
					<article key={item.id} className={styles.case}>
						<div className={styles.caseContent}>
							<h3>{item.title}</h3>
							<p>{item.context}</p>

							<ul>
							{item.deliveries.map(delivery => (
								<li key={delivery}>{delivery}</li>
							))}
							</ul>

							{item.anonymous && (
							<span className={styles.anonymous}>
								Case apresentado de forma anônima
							</span>
							)}
						</div>

						<div className={styles.media}>
							{item.media.videos &&  item.media.videos.map(it => (
								<video
									src={it}
									controls
									muted
									playsInline
								/>
							))}

							{item.media.gifs && item.media.gifs.map(it => (
								<div className={styles.mediaItem}>
									<img 
										src={it} 
										alt="Demonstração do site - navegação" 
										loading="lazy"
										onClick={() => handleClickImage(it)}
									/>
									<span className={styles.badge}>GIF</span>
								</div>
							))}

							{item.media.images.map(img => (
							<img
								key={img}
								src={img}
								alt="Exemplo de layout desenvolvido"
								onClick={() => handleClickImage(img)}
							/>
							))}
						</div>
					</article>
				))}
			</div>
			{isModalOpen && (
				<ImageModal
					image={selectedImage}
					onClose={() => setIsModalOpen(false)}
				/>
			)}
		</section>

  	);
}
