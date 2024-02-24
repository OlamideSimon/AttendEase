import { FilledButton } from '@/components/Button'
import { MdFilterList } from 'react-icons/md'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type FilterSectionProps = {
  formData: { class: string; date_range: string }
  setFormData: React.Dispatch<
    React.SetStateAction<{
      class: string
      date_range: string
    }>
  >
}

const FilterSection = ({ formData, setFormData }: FilterSectionProps) => {
  return (
    <section className="flex items-center gap-5 flex-col md:flex-row my-10 md:my-16">
      <div className="flex items-center gap-x-4 text-white">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="avatar"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="text-xl font-bold">Hello Chris!</p>
          <small>Hope you are having a great day</small>
        </div>
      </div>

      <div className="md:ml-auto items-center flex gap-5 flex-col w-full md:w-fit  md:flex-row child:w-full">
        <Select
          value={formData.class}
          onValueChange={(e) => setFormData({ ...formData, class: e })}
        >
          <SelectTrigger className="w-[180px] text-white">
            <SelectValue
              placeholder="Classes"
              className="text-white placeholder:!text-white"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Classes</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={formData.date_range}
          onValueChange={(e) => setFormData({ ...formData, date_range: e })}
        >
          <SelectTrigger className="w-[180px] text-white">
            <SelectValue
              placeholder="Date range"
              className="text-white placeholder:!text-white"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last_7_days">Last 7 days</SelectItem>
            <SelectItem value="last_30_days">Last 30 days</SelectItem>
          </SelectContent>
        </Select>

        <FilledButton className="flex items-center justify-center gap-3 text-sm">
          <MdFilterList size={20} />
          <span>Filter</span>
        </FilledButton>
      </div>
    </section>
  )
}

export default FilterSection
