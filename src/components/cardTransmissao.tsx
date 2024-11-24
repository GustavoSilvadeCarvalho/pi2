import Image from "next/image";

type CardProps = {
    title: string; // Título do card
    description: string; // Texto descritivo
    imageSrc: string;
    imageAlt?: string;
  };

export default function CardTransmissao( { title, description, imageSrc, imageAlt }: CardProps) {
    return (
        <div className="flex flex-col items-center text-center gap-6">
            <Image
                src={imageSrc}
                alt={imageAlt || title}
                width={50}
                height={50}
            />
            <h1 className="font-bold text-2xl max-w-xs">{title}</h1>
            <p className="max-w-xs">{description}</p>
        </div>
    )
}