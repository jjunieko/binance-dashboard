import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const CryptoChart = ({ data }: any) => {
    console.log("Dados do gráfico:", data);
    const chartData = {
      labels: data.map((d: any) => new Date(d.time)),
      datasets: [
        {
          label: 'Price',
          data: data.map((d: any) => ({ x: new Date(d.time), y: d.price })),
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        }
      ],
    };

    const options: any = {
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day',
            parser: 'MM/dd/yyyy HH:mm:ss',
            tooltipFormat: 'll HH:mm'
          },
          title: {
            display: true,
            text: 'Date'
          }
        },
        y: {
          beginAtZero: true
        }
      }
    };

    return <Line data={chartData} options={options} />;
};

export default CryptoChart;