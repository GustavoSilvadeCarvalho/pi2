import CardSintomas from "../cardSintomas";

export default function SegundaSessao() {
    return (
        <div className="flex flex-col items-center mt-16">
            <h1 className="text-4xl font-bold max-w-3xl py-10">Sintomas Mais Comuns</h1>
            <p className="mb-10">Os sintomas mais comuns da dengue incluem:</p>
            <div className="flex flex-wrap gap-10 max-w-[400px] justify-around">
                <div className="flex flex-col min-w-[100px] items-center gap-2">
                    <CardSintomas
                        imageSrc="/febre.png"
                        imageAlt="febre"
                    />
                    <h1 className="font-bold max-w-[200px] text-center">Febre alta</h1>
                </div>
                <div className="flex flex-col min-w-[100px] items-center gap-2">
                    <CardSintomas
                        imageSrc="/dor-de-cabeca.png"
                        imageAlt="dor de cabeça"
                    />
                    <h1 className="font-bold max-w-[200px] text-center">Dor de cabeça</h1>
                </div>
                <div className="flex flex-col min-w-[100px] items-center gap-2">
                    <CardSintomas
                        imageSrc="/vermelhidao.png"
                        imageAlt="dor atras dos olhos"
                    />
                    <h1 className="font-bold max-w-[200px] text-center">Dor atras dos olhos</h1>
                </div>
                <div className="flex flex-col min-w-[100px] items-center gap-2">
                    <CardSintomas
                        imageSrc="/musculos.png"
                        imageAlt="dores musculares e nas aticulações"
                    />
                    <h1 className="font-bold max-w-[200px] text-center">Dores musculares e nas articulações.</h1>
                </div>
            </div>
        </div>
    )
}