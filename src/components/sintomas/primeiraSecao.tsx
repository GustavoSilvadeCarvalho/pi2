import Image from "next/image";

export default function PrimeiraSecao() {
    return (
        <div className="flex items-center justify-around gap-20 max-w-[1600px]">
            <div className="flex flex-col w-1/2 gap-16">
                <h1 className="text-6xl font-bold max-w-4xl">Conheça os Sintomas da Dengue</h1>
                <p className="text-base max-w-xl">A dengue apresenta sintomas variados que podem evoluir para formas graves se não identificados a tempo. Nesta página, você encontrará informações detalhadas sobre os sinais mais comuns e graves da doença, ajudando a reconhecer precocemente qualquer alteração em sua saúde.</p>
            </div>
            
            <div className="flex w-1/2 justify-center">
                <Image 
                    src='/sintomas-dengue.webp'
                    width={600}
                    height={600}
                    alt="oi"
                />
            </div>
        </div>
    )
}