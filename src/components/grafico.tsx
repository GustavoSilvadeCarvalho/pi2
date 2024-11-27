'use client'
import React, { useState, useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Grafico() {
  const [graficoWidth, setGraficoWidth] = useState(600); // Largura inicial do gráfico

  // Atualiza a largura do gráfico com base no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      const width = Math.min(window.innerWidth - 32, 600); // 32px de margem lateral
      setGraficoWidth(width);
    };

    // Chama a função uma vez no carregamento
    handleResize();

    // Adiciona um listener para alterações no tamanho da tela
    window.addEventListener('resize', handleResize);

    // Remove o listener no cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Gráfico Responsivo */}
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['Setembro', 'Outubro', 'Novembro'] }]}
        series={[
          { data: [13894, 17369, 12683], color: '#2336f3' },
          { data: [2801, 3768, 4397], color: '#2196f3' },
        ]}
        width={graficoWidth} // Usa o valor calculado dinamicamente
        height={400} // Altura fixa
      />

      {/* Legendas */}
      <div className="flex gap-10 mt-4">
        <div className="flex gap-2 items-center">
          <p>2024</p>
          <div className="bg-[#2336f3] h-6 w-6 rounded"></div>
        </div>
        <div className="flex gap-2 items-center">
          <p>2023</p>
          <div className="bg-[#2196f3] h-6 w-6 rounded"></div>
        </div>
      </div>
    </div>
  );
}
