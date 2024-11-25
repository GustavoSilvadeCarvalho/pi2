import Image from 'next/image';

export default function Logos() {
    return (
        <div className='flex gap-20 mb-10'>
            <Image
                src="/fatec.png"
                alt="Descrição da imagem"
                width={100}
                height={100}
            />
            <Image
                src="/brasao.jpg"
                alt="Descrição da imagem"
                width={100}
                height={100}
            />
        </div>
    )
}