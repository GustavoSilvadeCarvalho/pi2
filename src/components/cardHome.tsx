import Link from "next/link";
import Logos from "./logos";

export default function CardHome() {
    return (
        <div className="flex flex-col items-center border rounded-lg p-10 shadow-lg shadow-black-500/50">
            <Logos />
            <h1 className="text-2xl"><strong>Bem-vindo</strong></h1>
            <p className="w-80 text-center py-16">Aqui você encontrará informações e ferramentas importantes sobre a prevenção e o combate à dengue.</p>
            <p className="text-gray-600">Faça login ou crie sua conta</p>
            <nav className="flex mt-6 gap-28">
                <button><Link className="bg-neutral-800 text-white py-3 px-6 rounded-lg" href="/portal/login">Login</Link></button>
                <button><Link className="text-black" href="/portal/cadastro">Cadastrar-se</Link></button>
            </nav>
        </div>
    )
}