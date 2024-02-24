import { DashboardCard } from '@/components/Card'
import Header from '../../components/Header'
import FilterSection from '@/components/dashboard/FilterSection'
import { useState } from 'react'
import { FaUserGraduate } from 'react-icons/fa'
import { PiSignIn, PiSmileySad, PiClockThin } from 'react-icons/pi'

const Dashboard = () => {
  const [formData, setFormData] = useState({
    class: 'all',
    date_range: 'last_7_days',
  })

  const props = {
    formData,
    setFormData,
  }

  return (
    <div className="relative">
      <div className="absolute top-0 w-full h-[500px] md:h-[400px] bg-slate-800 -z-10"></div>
      <Header />
      <div className="md:px-[10%] px-5">
        <FilterSection {...props} />
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <DashboardCard
            content={
              <div className="flex flex-col md:flex-row md:items-center gap-5">
                <FaUserGraduate size={40} className="text-green-500" />
                <div className="flex flex-col text-slate-600">
                  <span className="font-bold text-3xl">47</span>
                  <span className="uppercase">total student</span>
                </div>
              </div>
            }
          />
          <DashboardCard
            content={
              <div className="flex flex-col md:flex-row md:items-center gap-5">
                <PiSignIn size={40} className="" />
                <div className="flex flex-col">
                  <span className="font-bold text-3xl">42</span>
                  <span className="uppercase">present today</span>
                </div>
              </div>
            }
            filled
          />
          <DashboardCard
            content={
              <div className="flex flex-col md:flex-row md:items-center gap-5">
                <PiSmileySad size={40} className="text-green-500" />
                <div className="flex flex-col text-slate-600">
                  <span className="font-bold text-3xl">47</span>
                  <span className="uppercase">total student</span>
                </div>
              </div>
            }
          />
          <DashboardCard
            content={
              <div className="flex flex-col md:flex-row md:items-center gap-5">
                <PiClockThin size={40} className="text-green-500" />
                <div className="flex flex-col text-slate-600">
                  <span className="font-bold text-3xl">47</span>
                  <span className="uppercase">total student</span>
                </div>
              </div>
            }
          />
        </section>
      </div>
    </div>
  )
}

export default Dashboard
