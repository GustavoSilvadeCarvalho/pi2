import Image from "next/image";

type CardProps = {
  title: string; // Título do card
  description: string; // Texto descritivo
  buttonText: string; // Texto do botão
  imageSrc: string; // Caminho da imagem (opcional)
  imageAlt?: string; // Texto alternativo para a imagem (opcional)
};

export default function CardRecurso({ title, description, buttonText, imageSrc, imageAlt }: CardProps) {
  return (
    <div className="max-w-sm p-4">
      {/* Imagem */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          layout="fill" // Faz a imagem preencher o espaço do contêiner
          objectFit="cover" // Garante que a imagem mantenha suas proporções
          priority={false} // Otimiza para carregamento sob demanda (lazy-load padrão)
        />
      </div>

      {/* Conteúdo */}
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-base text-gray-600 mt-2">{description}</p>

      {/* Botão */}
      <button className="mt-4 hover:underline">{buttonText} &rarr;</button>
    </div>
  );
}