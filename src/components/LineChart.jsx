
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Wppool',
        data: [65, 59, 80, 81, 15, 55, 40],
        fill: false,
        backgroundColor: '#FC714D',
        borderColor: '#FC714D',
        pointStyle: 'rect',
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: '#FC714D',
        pointBorderColor: '#FC714D',
        pointHoverBackgroundColor: '#FC714D',
        pointHoverBorderColor: '#FC714D',
      },
      {
        label: 'Google',
        data: [6, 3, 18, 21, 15, 55, 40],
        fill: false,
        backgroundColor: '#615DE3',
        borderColor: '#615DE3',
        pointStyle: 'rect',
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: '#615DE3',
        pointBorderColor: '#615DE3',
        pointHoverBackgroundColor: '#615DE3',
        pointHoverBorderColor: '#615DE3',
      },
      {
        label: 'Microsoft',
        data: [4, 9, 34, 20, 15, 40, 70],
        fill: false,
        backgroundColor: '#AFCD80',
        borderColor: '#AFCD80',
        pointStyle: 'rect',
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: '#AFCD80',
        pointBorderColor: '#AFCD80',
        pointHoverBackgroundColor: '#AFCD80',
        pointHoverBorderColor: '#AFCD80',
      },
      {
        label: 'Twitter',
        data: [28, 48, 40, 19, 15, 27, 90],
        fill: false,
        backgroundColor: '#6F34A1',
        borderColor: '#6F34A1',
        pointStyle: 'rect',
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: '#6F34A1',
        pointBorderColor: '#6F34A1',
        pointHoverBackgroundColor: '#6F34A1',
        pointHoverBorderColor: '#6F34A1',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          font: {
            size: 10,
          },
        },
      },
      tooltip: {
        titleFont: {
          size: 10,
        },
        bodyFont: {
          size: 10,
        },
        footerFont: {
          size: 10,
        },
      },
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            xMin: 'February',
            xMax: 'February',
            borderColor: 'rgba(255, 99, 132, 0.25)',
            borderWidth: 2,
          },
          line2: {
            type: 'line',
            xMin: 'May',
            xMax: 'May',
            borderColor: 'rgba(54, 162, 235, 0.25)',
            borderWidth: 2,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 10,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          font: {
            size: 10,
          },
          stepSize: 10,
          min: -10,
          max: 100,
        },
        grid: {
          display: true,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
