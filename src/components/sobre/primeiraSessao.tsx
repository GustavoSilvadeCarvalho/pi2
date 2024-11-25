// SobreADengue.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

export default function SobreADengue() {
    // Dados fornecidos sobre o aumento dos casos de dengue
    const dadosDengue = [
        { year: 2023, casos: 1300000, mortes: 1179 },
        { year: 2024, casos: 6500000, mortes: 5536 },
    ];

    return (
        <div className="flex flex-col items-center justify-center py-16">
            {/* Seção Principal */}
            <h1 className="text-4xl font-bold mb-8">SOBRE A DENGUE</h1>

            <div className="flex justify-between gap-16 max-w-[1200px] mx-auto">
                {/* Texto Explicativo à Esquerda */}
                <div className="w-1/2 leading-relaxed">
                    <p className="text-lg">
                        A dengue é transmitida principalmente por mosquitos do gênero <strong>Aedes</strong>, em especial o <em>Aedes aegypti</em>, que se reproduz em água parada. A transmissão ocorre quando o mosquito fêmea pica uma pessoa infectada com o vírus da dengue, depois transmite o vírus ao picar uma pessoa saudável.
                    </p>
                    <p className="mt-4">
                        <strong>Contaminação do mosquito:</strong> A fêmea do mosquito adquire o vírus ao picar uma pessoa infectada. O vírus se multiplica no mosquito e ele se torna capaz de transmitir a doença após um período de incubação de cerca de 8 a 12 dias.
                    </p>
                    <p className="mt-4">
                        <strong>Transmissão para humanos:</strong> Quando o mosquito infectado pica uma pessoa saudável, o vírus é transmitido através da saliva do mosquito. O período de incubação no ser humano é geralmente de 4 a 10 dias.
                    </p>
                    <p className="mt-4">
                        A dengue é uma doença viral aguda que pode se manifestar de diferentes formas, desde uma febre mais leve até casos graves, com risco de morte, como a dengue hemorrágica.
                    </p>
                </div>

                {/* Card Interativo à Direita */}
                <div className="w-1/3 bg-blue-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Prevenção contra a Dengue</h2>
                    <ul className="list-disc ml-4 space-y-2">
                        <li>Evite água parada em vasos de plantas e recipientes.</li>
                        <li>Mantenha caixas d'água bem fechadas.</li>
                        <li>Use repelentes e roupas longas em áreas infestadas.</li>
                        <li>Colabore com ações de combate ao mosquito em sua comunidade.</li>
                    </ul>
                </div>
            </div>

            {/* Seção Gráfico Interativo */}
            <div className="w-full max-w-[1000px] mt-16">
                <h2 className="text-3xl font-bold mb-8">Casos de Dengue no Brasil</h2>
                {/* Aqui pode-se integrar o gráfico interativo */}
                {/* Substituir pelo código do gráfico conforme a biblioteca utilizada */}
            </div>
        </div>
    );
}
