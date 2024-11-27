'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Certeza } from './certeza';

export default function Cabecalho() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <div className="flex justify-between mx-20 mt-5 items-center">
            <Image
                src="/brasao.jpg"
                width={100}
                height={100}
                alt="brasao indaiatuba"
            />

            {/* Menu para telas grandes */}
            <nav className="hidden lg:flex items-center">
                <ul className="flex gap-10 items-center text-lg">
                    <Link href="/portal">
                        <li>Home</li>
                    </Link>
                    <Link href="/portal/sobre">
                        <li>Sobre Dengue</li>
                    </Link>
                    <Link href="/portal/sintomas">
                        <li>Sintomas</li>
                    </Link>
                    <Link href="/portal/tratamentos">
                        <li>Tratamento</li>
                    </Link>
                    <Link href="/portal/transmissao">
                        <li>Transmissão</li>
                    </Link>
                </ul>
            </nav>

            {/* Botão do menu hamburguer */}
            <div className="lg:hidden">
                <button
                    className="p-2 focus:outline-none"
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Dropdown do menu hamburguer */}
            {menuAberto && (
                <nav className="absolute top-16 right-0 bg-white shadow-lg rounded-lg p-4 lg:hidden">
                    <ul className="flex flex-col gap-4 text-lg">
                        <Link href="/portal">
                            <li onClick={() => setMenuAberto(false)}>Home</li>
                        </Link>
                        <Link href="/portal/sobre">
                            <li onClick={() => setMenuAberto(false)}>Sobre Dengue</li>
                        </Link>
                        <Link href="/portal/sintomas">
                            <li onClick={() => setMenuAberto(false)}>Sintomas</li>
                        </Link>
                        <Link href="/portal/tratamentos">
                            <li onClick={() => setMenuAberto(false)}>Tratamento</li>
                        </Link>
                        <Link href="/portal/transmissao">
                            <li onClick={() => setMenuAberto(false)}>Transmissão</li>
                        </Link>
                        <Certeza />
                    </ul>
                </nav>
            )}

            {/* Componente adicional para telas grandes */}
            <div className="hidden lg:block">
                <Certeza />
            </div>
        </div>
    );
}
