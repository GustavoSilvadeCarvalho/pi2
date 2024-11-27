import Image from "next/image";
import Botao from "../botao";
import Link from "next/link";

export default function PrimeiraSecao() {
    return (
        <div className="flex flex-wrap xl:flex-nowrap items-center justify-around gap-20 max-w-[1600px]">
            <div className="flex flex-col md:w-[80%] xl:w-1/2 gap-16">
                <h1 className="text-6xl font-bold max-w-4xl">Informações essenciais sobre a dengue</h1>
                <p className="text-lg max-w-xl">Bem-vindo ao nosso site dedicado à dengue, onde você encontrará informações
                    cruciais sobre a doença. Nosso objetivo é educar e conscientizar
                    a população sobre prevenção, sintomas e tratamentos disponíveis.</p>
                <Botao><Link href='/portal/sobre'>Saiba Mais</Link></Botao>
            </div>

            <div className="flex md:w-[60%] xl:w-1/2 justify-center">
                <Image
                    src='/dengue.jpg'
                    width={600}
                    height={600}
                    alt="oi"
                />
            </div>
        </div>
    )
}