import Image from "next/image";

type CardProps = {
    imageSrc: string; // Caminho da imagem (opcional)
    imageAlt: string; // Texto alternativo para a imagem (opcional)
  };

export default function CardSintomas({imageSrc, imageAlt}: CardProps) {
    return (
        <div>
            <Image 
                src={imageSrc}
                alt={imageAlt}
                width={50}
                height={50}
            />
        </div>
    )
}