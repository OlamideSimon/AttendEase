import BarChart from '@/components/Charts/bar'
import { LineChart } from '@/components/Charts/line'
// import { RadarChart } from '@/components/Charts/radar'

const ChartContainer = () => {
  return (
    <div className="grid gap-3 grid-cols-12 py-12 child:col-span-12">
      <LineChart className="md:col-span-6" />
      <BarChart className="md:col-span-6" />
      {/* <RadarChart className="md:col-span-4" /> */}
    </div>
  )
}

export default ChartContainer
