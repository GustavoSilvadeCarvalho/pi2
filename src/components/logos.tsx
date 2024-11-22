import Image from 'next/image';

export default function Logos() {
    return (
        <div className='flex gap-20 mb-10'>
            <Image 
            src="/imgs/fatec.png" // Caminho da imagem na pasta public
            alt="Descrição da imagem" 
            width={100} // Largura em pixels
            height={100} // Altura em pixels
            />
            <Image 
            src="/imgs/brasao.jpg" // Caminho da imagem na pasta public
            alt="Descrição da imagem" 
            width={100} // Largura em pixels
            height={100} // Altura em pixels
            />
        </div>
    )
}