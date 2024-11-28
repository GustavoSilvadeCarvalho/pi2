'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Certeza } from './certeza';

export default function Cabecalho() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <div className="bg-white text-gray-800 p-6 w-full flex justify-between items-center">
            <Image
                src="/brasao.jpg"
                width={100}
                height={100}
                alt="brasao indaiatuba"
                className="hover:scale-110 transition-transform duration-500"
            />

            <nav className="hidden lg:flex items-center">
                <ul className="flex gap-10 items-center text-xl font-bold">
                    <Link href="/portal">
                        <li className="hover:scale-105 transition-transform duration-300 cursor-pointer hover:text-indigo-600">Home</li>
                    </Link>
                    <Link href="/portal/sobre">
                        <li className="hover:scale-105 transition-transform duration-300 cursor-pointer hover:text-indigo-600">Sobre Dengue</li>
                    </Link>
                    <Link href="/portal/sintomas">
                        <li className="hover:scale-105 transition-transform duration-300 cursor-pointer hover:text-indigo-600">Sintomas</li>
                    </Link>
                    <Link href="/portal/tratamentos">
                        <li className="hover:scale-105 transition-transform duration-300 cursor-pointer hover:text-indigo-600">Tratamento</li>
                    </Link>
                    <Link href="/portal/transmissao">
                        <li className="hover:scale-105 transition-transform duration-300 cursor-pointer hover:text-indigo-600">Transmissão</li>
                    </Link>
                </ul>
            </nav>

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

            {menuAberto && (
                <nav className="absolute top-16 right-0 bg-white shadow-lg rounded-lg p-4 lg:hidden animate-slide-down w-full">
                    <ul className="flex flex-col gap-4 text-xl text-gray-800">
                        <Link href="/portal">
                            <li onClick={() => setMenuAberto(false)} className="hover:scale-105 transition-transform duration-300 cursor-pointer hover:text-indigo-600">Home</li>
                        </Link>
                        <Link href="/portal/sobre">
                            <li onClick={() => setMenuAberto(false)} className="hover:scale-105 transition-transform duration-300 cursor-pointer hover:text-indigo-600">Sobre Dengue</li>
                        </Link>
                        <Link href="/portal/sintomas">
                            <li onClick={() => setMenuAberto(false)} className="hover:scale-105 transition-transform duration-300 cursor-pointer hover:text-indigo-600">Sintomas</li>
                        </Link>
                        <Link href="/portal/tratamentos">
                            <li onClick={() => setMenuAberto(false)} className="hover:scale-105 transition-transform duration-300 cursor-pointer hover:text-indigo-600">Tratamento</li>
                        </Link>
                        <Link href="/portal/transmissao">
                            <li onClick={() => setMenuAberto(false)} className="hover:scale-105 transition-transform duration-300 cursor-pointer hover:text-indigo-600">Transmissão</li>
                        </Link>
                        <Certeza />
                    </ul>
                </nav>
            )}

            <div className="hidden lg:block">
                <Certeza />
            </div>
        </div>
    );
}
