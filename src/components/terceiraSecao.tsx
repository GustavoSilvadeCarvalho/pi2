import Botao from "./botao";
import CardTransmissao from "./cardTransmissao";

export default function TerceiraSecao() {
    return (
        <div className="flex flex-col items-center w-full max-w-[1600px] my-20">
            <h1 className="text-4xl font-bold max-w-xl text-center">Como a dengue é transmitida e prevenida</h1>
            <p className="max-w-3xl text-center mt-8">A dengue é transmitida principalmente pela picada do mosquito Aedes aegypti. Para prevenir a doença, é essencial eliminar locais de água parada onde os mosquitos possam se reproduzir.</p>
            <div className="flex justify-center gap-10 my-20">
                <CardTransmissao 
                    title="Entendendo a transmissão da dengue"
                    description="A transmissão ocorre quando o mosquito infectado pica uma pessoa."
                    imageSrc="/transmissao-do-virus.png"
                />
                <CardTransmissao 
                    title="Medidas de prevenção eficazes contra a dengue"
                    description="Usar repelente e telas de proteção é fundamental."
                    imageSrc="/prevencao.png"
                />
                <CardTransmissao 
                    title="Importância da conscientização na prevenção da dengue"
                    description="Educar a população é crucial para reduzir casos."
                    imageSrc="/conscientizacao.png"
                />
            </div>
            <Botao>Aprenda</Botao>
        </div>
    )
}