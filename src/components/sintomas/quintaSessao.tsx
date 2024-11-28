import React from 'react';

const faqItems = [
    {
        question: "Como diferenciar dengue de outras doenças?",
        answer:
            "A dengue apresenta sintomas como febre alta repentina, dores musculares intensas, dores atrás dos olhos e manchas vermelhas na pele, que podem ser confundidos com outras doenças. Consulte um médico para confirmação com exames específicos.",
    },
    {
        question: "Quanto tempo os sintomas levam para aparecer?",
        answer:
            "Os sintomas da dengue geralmente aparecem entre 3 e 7 dias após a picada de um mosquito infectado, mas podem variar de pessoa para pessoa.",
    },
    {
        question: "O que fazer ao notar os primeiros sinais?",
        answer:
            "Ao identificar sintomas como febre alta, dores no corpo ou manchas na pele, procure atendimento médico imediatamente para diagnóstico e orientação adequada.",
    },
    {
        question: "Dengue pode ser transmitida de pessoa para pessoa?",
        answer:
            "Não, a dengue não é transmitida de pessoa para pessoa. Ela é transmitida exclusivamente pela picada do mosquito Aedes aegypti infectado.",
    },
];

export const QuintaSessao: React.FC = () => {
    return (
        <section className="py-12 bg-white mt-6" id="faq">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Perguntas Frequentes sobre Sintomas da Dengue
                </h2>
                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <details
                            key={index}
                            className="p-4 bg-white rounded shadow-sm overflow-hidden w-full max-w-4xl mx-auto"
                        >
                            <summary className="cursor-pointer text-lg font-semibold text-gray-800 flex justify-between items-center">
                                {item.question}
                                <span className="ml-2 text-gray-500">+</span>
                            </summary>
                            <div className="mt-2 text-gray-600">
                                <p>{item.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuintaSessao;
