"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PrimeiraSecaoTratamentos() {
    const [currentTreatmentIndex, setCurrentTreatmentIndex] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const tratamentos = [
        {
            title: "Hidratação",
            description: "Manter-se hidratado é crucial para a recuperação. Água e líquidos ajudam a combater a desidratação causada pela febre.",
            image: "/hidratacao.png",
        },
        {
            title: "Analgésicos",
            description: "Uso de analgésicos como paracetamol pode aliviar a dor e reduzir a febre, mas deve ser feito sob orientação médica.",
            image: "/remedio (1).png",
        },
        {
            title: "Repouso",
            description: "Descanso adequado é essencial para a recuperação e para o corpo combater a infecção viral.",
            image: "/repouso.png",
        },
        {
            title: "Controle da Febre",
            description: "Uso de antitérmicos e métodos naturais, como compressas de água morna, ajudam no controle da febre.",
            image: "/controle-febre.png",
        }
    ];

    const nextTreatment = () => {
        setCurrentTreatmentIndex((prevIndex) => (prevIndex + 1) % tratamentos.length);
    };

    const prevTreatment = () => {
        setCurrentTreatmentIndex((prevIndex) => (prevIndex - 1 + tratamentos.length) % tratamentos.length);
    };

    if (!isClient) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="flex items-center justify-between gap-40 py-16 max-w-[1400px] mx-auto">

            <div className="flex flex-col w-1/2 max-w-[600px] leading-relaxed">
                <h1 className="text-4xl font-bold">Tratamentos para a Dengue</h1>
                <p className="text-lg mt-4">
                    Não existe um tratamento específico para a dengue, mas cuidados essenciais podem ser tomados para aliviar os sintomas e auxiliar na recuperação. Aqui estão alguns dos tratamentos recomendados.
                </p>
            </div>

            <div className="relative flex items-center justify-center w-1/2">
                <button
                    className="bg-gray-700 text-white p-2 rounded-full absolute left-[-40px]"
                    onClick={prevTreatment}
                >
                    &lt;
                </button>

                <div className="flex flex-col items-center justify-center w-[350px] h-[450px] p-6 border border-gray-200 rounded-xl shadow-lg">
                    <Image
                        src={tratamentos[currentTreatmentIndex].image}
                        alt={tratamentos[currentTreatmentIndex].title}
                        width={200}
                        height={150}
                        className="object-cover rounded-lg"
                    />
                    <h2 className="text-2xl font-semibold mt-4 text-center">{tratamentos[currentTreatmentIndex].title}</h2>
                    <p className="mt-2 text-center text-gray-600">{tratamentos[currentTreatmentIndex].description}</p>
                </div>

                <button
                    className="bg-gray-700 text-white p-2 rounded-full absolute right-[-40px]"
                    onClick={nextTreatment}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}
