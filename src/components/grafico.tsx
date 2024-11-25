import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Grafico() {
  return (
    <div className='flex flex-col items-center'>
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['Setembro', 'Outubro', 'Novembro'] }]}
        series={[
          { data: [13894, 17369, 12683], color: '#2336f3' },
          { data: [2801, 3768, 4397], color: '#2196f3' },
        ]}
        width={600}
        height={500}
      />
      <div className='flex gap-10'>
        <div className='flex gap-2 items-center'>
          <p>2024</p>
          <div className='bg-[#2336f3] h-6 w-6 rounded'></div>
        </div>
        <div className='flex gap-2 items-center'>
          <p>2023</p>
          <div className='bg-[#2196f3] h-6 w-6 rounded'></div>
        </div>
      </div>
    </div>
  );
}
