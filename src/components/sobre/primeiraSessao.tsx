"use client";

import { useState } from "react";
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const dengueData = {
  labels: ['2023', '2024', '2025 (estimado)'],
  datasets: [
    {
      label: 'Casos de Dengue',
      data: [1300000, 6500000, 7000000],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    }
  ]
};

const QuizDengue = () => {
    const questions = [
      {
        question: "Qual é o principal mosquito transmissor da dengue?",
        options: ["Culex", "Anopheles", "Aedes aegypti", "Aedes albopictus"],
        answer: "Aedes aegypti",
      },
      {
        question: "Qual das seguintes medidas ajuda a prevenir a dengue?",
        options: [
          "Deixar água parada",
          "Usar roupas longas e repelente",
          "Não limpar o quintal",
          "Evitar o uso de repelentes",
        ],
        answer: "Usar roupas longas e repelente",
      },
      {
        question: "Qual é o principal sintoma da dengue?",
        options: ["Febre alta", "Tosse", "Dor de garganta", "Coceira"],
        answer: "Febre alta",
      },
    ];
  
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [feedback, setFeedback] = useState<string[]>([]);
    const [answeredQuestions, setAnsweredQuestions] = useState<string[]>([]);
  
    const handleAnswerOptionClick = (selectedOption: string) => {
      const correctAnswer = questions[currentQuestion].answer;
      const newFeedback = selectedOption === correctAnswer
        ? `Você acertou a questão ${currentQuestion + 1}.`
        : `Você errou a questão ${currentQuestion + 1}. Resposta correta: ${correctAnswer}.`;
  
      setFeedback([...feedback, newFeedback]);
      setAnsweredQuestions([...answeredQuestions, selectedOption]);
  
      if (selectedOption === correctAnswer) {
        setScore(score + 1);
      }
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    };
  
    const resetQuiz = () => {
      setCurrentQuestion(0);
      setScore(0);
      setShowScore(false);
      setFeedback([]);
      setAnsweredQuestions([]);
    };
  
    return (
      <div className="quiz-container mt-8">
        {showScore ? (
          <div className="score-section text-2xl">
            <p>Você acertou {score} de {questions.length} questões.</p>
            <ul className="mt-4 space-y-2">
              {feedback.map((f, index) => (
                <li key={index} className="text-lg">{f}</li>
              ))}
            </ul>
            <button
              className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              onClick={resetQuiz}
            >
              Refazer o Quiz
            </button>
          </div>
        ) : (
          <div className="question-section">
            <div className="question-text text-xl font-bold">
              {questions[currentQuestion].question}
            </div>
            <div className="answer-section mt-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="option-button bg-blue-500 text-white py-2 px-4 rounded m-2 hover:bg-blue-700"
                  onClick={() => handleAnswerOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

export default function PaginaDengue() {
  return (
    <div className="bg-white text-gray-800">
      <header className="relative h-[400px] bg-gradient-to-r from-blue-500 to-green-500 text-white">
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold animate-bounce">Tudo sobre a Dengue</h1>
          <p className="mt-4 text-xl">
            Saiba como se prevenir e os últimos dados sobre a doença
          </p>
        </div>
      </header>

      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-semibold mb-4">
              Como ocorre a transmissão
            </h2>
            <p className="text-lg leading-relaxed">
              A dengue é transmitida principalmente por mosquitos do gênero{" "}
              <strong>Aedes</strong>, especialmente o{" "}
              <em>Aedes aegypti</em>. Veja abaixo as etapas da transmissão:
            </p>
            <ul className="mt-4 space-y-2">
              <li>🦟 Contaminação do mosquito ao picar uma pessoa infectada.</li>
              <li>🩸 O vírus é transmitido para um humano através da picada.</li>
              <li>🌡️ Período de incubação no ser humano: 4 a 10 dias.</li>
            </ul>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Prevenção</h3>
            <p>Formas de prevenir a transmissão:</p>
            <ul className="mt-4 space-y-2">
              <li>🚫 Evite água parada</li>
              <li>🛑 Use repelente e roupas longas</li>
              <li>🏠 Mantenha sua casa protegida</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Casos de Dengue no Brasil</h2>
          <Chart
            type="bar"
            data={dengueData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
              },
            }}
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6">
            Teste seus conhecimentos sobre a Dengue
          </h2>
          <p className="text-lg">
            Você sabe tudo sobre a doença e como se proteger? Faça o quiz abaixo!
          </p>
          <QuizDengue />
        </div>
      </section>
    </div>
  );
}
