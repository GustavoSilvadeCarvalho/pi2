import CardRecurso from "../cardRecurso";

export default function SegundaSecao() {
    return (
        <div className="w-full max-w-[1600px]">
            <h1 className="text-4xl font-bold max-w-3xl py-10">Entenda tudo sobre a dengue: sintomas, tratamento e prevenção.</h1>
            <div className="flex justify-center gap-20">
                <CardRecurso 
                    title="Dengue: uma doença viral que afeta milhões anualmente."
                    description="A dengue é transmitida por mosquitos e pode causar sintomas graves."
                    buttonText="Saiba" 
                    imageSrc="/transmissao.png"
                />
                <CardRecurso 
                    title="Reconheça os sintomas da dengue para buscar tratamento imediato."
                    description="Os sintomas incluem febre alta, dores no corpo e erupções cutâneas."
                    buttonText="Verifique" 
                    imageSrc="/sintomas.webp"
                />
                <CardRecurso 
                    title="Tratamentos eficazes para a dengue: o que você precisa saber."
                    description="O tratamento é essencial para aliviar os sintomas e prevenir complicações."
                    buttonText="Aprenda" 
                    imageSrc="/tratamento.webp"
                />
            </div>
        </div>
    )
}