import Image from "next/image";
import Link from "next/link";
import { Certeza } from "./certeza";

export default function Cabecalho() {
    return (
        <div className="flex justify-between mx-20 mt-5 items-center">
            <Image
                src='/brasao.jpg'
                width={100}
                height={100}
                alt="brasao indaiatuba"
            />
            <nav className="flex items-center">
                <ul className="flex gap-10 items-center text-lg">
                    <Link href='/portal'><li>Home</li></Link>
                    <Link href='/portal/sobre'><li>Sobre Dengue</li></Link>
                    <Link href='/portal/sintomas'><li>Sintomas</li></Link>
                    <Link href='/portal/tratamentos'><li>Tratamento</li></Link>
                    <Link href='/portal/transmissao'><li>Transmissão</li></Link>
                </ul>
            </nav>
            <Certeza />
        </div>
    )
}