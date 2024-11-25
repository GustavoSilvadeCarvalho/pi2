import Grafico from "../grafico";

export default function SegundaSecao() {
    return (
        <div className="flex flex-col items-center py-20">
            <h1 className="font-semibold text-xl">Casos prováveis de dengue nos ultimos três
                meses de 2024 e 2023(Setembro, Outubro e Novembro)
            </h1>
            <Grafico />
        </div>
    )
}