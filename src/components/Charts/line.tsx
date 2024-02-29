/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Card } from '../Card'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Total Attendance Report',
    },
  },
}

export function LineChart({ className }: { className?: string }) {
  const labels = [
    new Date().toLocaleDateString(undefined, { month: 'short' }),
    new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
    }),
    new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
    }),
    new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
    }),
    new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
    }),
    new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
    }),
    new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
    }),
  ]

  const data: any = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.random() * 100),
        borderColor: '#4ADE80',
        backgroundColor: '#16A34A',
        cubicInterpolationMode: 'monotone',
      },
    ],
  }
  return (
    <div className={`${className}`}>
      <Card content={<Line className="w-full" options={options} data={data} />} />
    </div>
  )
}
