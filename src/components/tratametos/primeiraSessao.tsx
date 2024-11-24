"use client";

import { useState } from "react";
import Image from "next/image";

export default function PrimeiraSecaoTratamentos() {
    const [currentTreatmentIndex, setCurrentTreatmentIndex] = useState(0);
    
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

    return (
        <div className="flex flex-col items-center justify-center gap-12 py-16 max-w-[1600px] mx-auto">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Tratamentos para a Dengue</h1>
                <p className="text-lg max-w-xl mx-auto mt-4">
                    Não existe um tratamento específico para a dengue, mas cuidados essenciais podem ser tomados para aliviar os sintomas e auxiliar na recuperação. Aqui estão alguns dos tratamentos recomendados.
                </p>
            </div>

            
            <div className="relative w-full max-w-4xl">
                <div className="flex justify-center items-center gap-4">
                    
                    <button
                        className="bg-gray-700 text-white p-2 rounded-full"
                        onClick={prevTreatment}
                    >
                        &lt;
                    </button>

                    
                    <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-xl shadow-lg">
                        <Image
                            src={tratamentos[currentTreatmentIndex].image}
                            alt={tratamentos[currentTreatmentIndex].title}
                            width={400}
                            height={300}
                            className="object-cover rounded-lg"
                        />
                        <h2 className="text-2xl font-semibold mt-4">{tratamentos[currentTreatmentIndex].title}</h2>
                        <p className="mt-2 text-center text-gray-600">{tratamentos[currentTreatmentIndex].description}</p>
                    </div>

                    
                    <button
                        className="bg-gray-700 text-white p-2 rounded-full"
                        onClick={nextTreatment}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}
