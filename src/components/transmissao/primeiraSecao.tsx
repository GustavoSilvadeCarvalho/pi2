"use client";

interface PreventionCard {
  title: string;
  description: string;
  colorClass: string;
}

export default function PrimeiraSecaoTransmissao() {
  const preventionCards: PreventionCard[] = [
    {
      title: "Evitar Água Parada",
      description:
        "Elimine locais que acumulam água, como pneus, caixas d'água abertas, e vasos de plantas.",
      colorClass: "bg-red-500",
    },
    {
      title: "Uso de Repelentes",
      description:
        "Aplique repelentes na pele e roupas para proteger contra a picada do mosquito.",
      colorClass: "bg-yellow-500",
    },
    {
      title: "Proteção Física",
      description:
        "Use mosquiteiros e telas em janelas para impedir a entrada do mosquito nas residências.",
      colorClass: "bg-green-500",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto py-16">
      {/* Seção de Texto Explicativo */}
      <div className="flex justify-between gap-16">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold">Transmissão da Dengue</h1>
          <p className="text-lg mt-4">
            A dengue é transmitida principalmente por mosquitos do gênero Aedes, em especial o Aedes aegypti, que se
            reproduz em água parada. A transmissão ocorre quando o mosquito fêmea pica uma pessoa infectada com o vírus da
            dengue, depois transmite o vírus ao picar uma pessoa saudável. O ciclo de transmissão se dá da seguinte forma:
          </p>
          <p className="mt-4">
            <strong>Contaminação do mosquito:</strong> A fêmea do mosquito adquire o vírus ao picar uma pessoa infectada.
            O vírus se multiplica no mosquito e ele se torna capaz de transmitir a doença após um período de incubação de
            cerca de 8 a 12 dias.
          </p>
          <p className="mt-4">
            <strong>Transmissão para humanos:</strong> Quando o mosquito infectado pica uma pessoa saudável, o vírus é
            transmitido através da saliva do mosquito. O período de incubação no ser humano é geralmente de 4 a 10 dias.
          </p>
          <p className="mt-4">
            A dengue é uma doença viral aguda que pode se manifestar de diferentes formas, desde uma febre mais leve até
            casos graves, com risco de morte, como a dengue hemorrágica. Os sintomas iniciais incluem febre alta, dores no
            corpo, dor de cabeça intensa, dor retro-orbital (atrás dos olhos) e manchas vermelhas na pele.
          </p>
          <p className="mt-4">
            A transmissão da dengue ocorre de maneira mais intensa nos períodos quentes e chuvosos, quando a população de
            mosquitos aumenta, especialmente entre os meses de maior precipitação.
          </p>
        </div>

        {/* Seção de Cards de Prevenção */}
        <div className="w-1/3 space-y-6">
          {preventionCards.map((card, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-lg text-white ${card.colorClass}`}
            >
              <h2 className="text-2xl font-semibold">{card.title}</h2>
              <p className="mt-2">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}