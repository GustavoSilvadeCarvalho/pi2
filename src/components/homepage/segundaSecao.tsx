import CardRecurso from "../cardRecurso";

export default function SegundaSecao() {
    return (
        <div className="flex flex-col w-full items-center text-center max-w-[1600px]">
            <h1 className="text-4xl font-bold max-w-3xl py-20">Entenda tudo sobre a dengue: sintomas, tratamento e prevenção.</h1>
            <div className="flex justify-center gap-20">
                <CardRecurso
                    title="Dengue: uma doença viral que afeta milhões anualmente."
                    description="A dengue é transmitida por mosquitos e pode causar sintomas graves."
                    buttonText="Saiba"
                    imageSrc="/transmissao.png"
                    buttonHref="/portal/transmissao"
                />
                <CardRecurso
                    title="Reconheça os sintomas da dengue para buscar tratamento imediato."
                    description="Os sintomas incluem febre alta, dores no corpo e erupções cutâneas."
                    buttonText="Verifique"
                    imageSrc="/sintomas.webp"
                    buttonHref="/portal/sintomas"
                />
                <CardRecurso
                    title="Tratamentos eficazes para a dengue: o que você precisa saber."
                    description="O tratamento é essencial para aliviar os sintomas e prevenir complicações."
                    buttonText="Aprenda"
                    imageSrc="/tratamento.webp"
                    buttonHref="/portal/tratamentos"
                />
            </div>
        </div>
    )
}