import Image from "next/image";
import Link from "next/link";

export default function Cabecalho() {
    return (
        <div className="flex justify-between mx-20 mt-5">
            <Image
                src='/brasao.jpg'
                width={100}
                height={100}
                alt="brasao indaiatuba"
            />
            <nav className="flex items-center">
                <ul className="flex gap-10 items-center">
                    <Link href='/portal'><li>Home</li></Link>
                    <Link href='/portal'><li>Sobre Dengue</li></Link>
                    <Link href='/portal/sintomas'><li>Sintomas</li></Link>
                    <Link href='/portal/tratamentos'><li>Tratamento</li></Link>
                    <Link href='/portal/transmissao'><li>Transmissão</li></Link>
                </ul>
            </nav>
            <Image 
                src='/fatec.png'
                width={100}
                height={100}
                alt="brasao indaiatuba"
            />
        </div>
    )
}