import CardSintomas from "../cardSintomas";

export default function TerceiraSessao() {
    return (
        <div className="flex flex-col items-center mt-16">
            <h1 className="text-4xl font-bold max-w-3xl py-10">Sintomas Menos Comuns</h1>
            <p className="mb-10">Os sintomas menos comuns da dengue incluem:</p>
            <div className="flex flex-wrap gap-10 max-w-[400px] justify-around">
                <div className="flex flex-col min-w-[100px] items-center gap-2">
                    <CardSintomas
                        imageSrc="/nausea.png"
                        imageAlt="nausea"
                    />
                    <h1 className="font-bold max-w-[200px] text-center">Náusea</h1>
                </div>
                <div className="flex flex-col min-w-[100px] items-center gap-2">
                    <CardSintomas
                        imageSrc="/vomitar.png"
                        imageAlt="vomitar"
                    />
                    <h1 className="font-bold max-w-[200px] text-center">Vômito</h1>
                </div>
                <div className="flex flex-col min-w-[100px] items-center gap-2">
                    <CardSintomas
                        imageSrc="/dor-abdominal.png"
                        imageAlt="dor abdominal"
                    />
                    <h1 className="font-bold max-w-[200px] text-center">Dor abdominal leve</h1>
                </div>
                <div className="flex flex-col min-w-[100px] items-center gap-2">
                    <CardSintomas
                        imageSrc="/vermelhidao-pele.png"
                        imageAlt="vermilhidão na pele"
                    />
                    <h1 className="font-bold max-w-[200px] text-center">Manchas vermelhas na pele</h1>
                </div>
            </div>
        </div>
    )
}