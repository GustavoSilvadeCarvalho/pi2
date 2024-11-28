import CardSintomas from "../cardSintomas";

export default function QuartaSessao() {
    return (
        <div className="flex flex-col items-center mt-16">
            <h1 className="text-4xl font-bold max-w-3xl py-10">Sinais de Alerta para Dengue Grave</h1>
            <p className="mb-10">Em casos graves, a dengue pode causar sintomas mais sérios:</p>
            <div className="flex flex-wrap gap-10 max-w-[500px] justify-around">
                <div className="flex flex-col min-w-[100px] items-center gap-2">
                    <CardSintomas
                        imageSrc="/sangramento-nasal.png"
                        imageAlt="Sangramentos"
                    />
                    <h1 className="font-bold max-w-[200px] text-center">sangramentos (nariz, gengivas ou internos)</h1>
                </div>
                <div className="flex flex-col min-w-[100px] items-center gap-2">
                    <CardSintomas
                        imageSrc="/dor-de-estomago.png"
                        imageAlt="dor abdominal intensa e contínua"
                    />
                    <h1 className="font-bold max-w-[200px] text-center">dor abdominal intensa e contínua</h1>
                </div>
                <div className="flex flex-col min-w-[100px] items-center gap-2">
                    <CardSintomas
                        imageSrc="/vomitar.png"
                        imageAlt="vômitos persistentes"
                    />
                    <h1 className="font-bold max-w-[200px] text-center">vômitos persistentes</h1>
                </div>
                <div className="flex flex-col min-w-[100px] items-center gap-2">
                    <CardSintomas
                        imageSrc="/cansaco.png"
                        imageAlt="dificuldade para respirar e cansaço extremo"
                    />
                    <h1 className="font-bold max-w-[200px] text-center">dificuldade para respirar e cansaço extremo</h1>
                </div>
            </div>
        </div>
    )
}