import { Card } from '../Card'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

type BarChartProps = {
  className: string
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarChart = ({ className }: BarChartProps) => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.round(Math.random() * 100)),
        backgroundColor: '#16A34A',
      },
    ],
  }
  return (
    <div className={`${className}`}>
      <Card content={<Bar className="w-full h-full" options={options} data={data} />} />
    </div>
  )
}

export default BarChart
