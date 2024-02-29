import { FilledButton } from '@/components/Button'
import Header from '@/components/Header'
import { Input } from '@/components/Input'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { createCourse } from '@/request/courses/courses.service'
import { ChangeEvent, FormEvent, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Toaster } from 'react-hot-toast'

const Courses = () => {
  const [formData, setFormData] = useState({
    name: '',
    duration: 1,
    courseCode: '',
  })
  const [loading, setLoading] = useState(false)
  const { courseCode, duration, name } = formData

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await createCourse({
      courseData: formData,
      setLoading,
    })
  }

  return (
    <div className="relative">
      <Toaster />
      <div className="absolute top-0 min-h-screen w-full bottom-0 bg-slate-100 -z-20"></div>
      <div className="absolute top-0 w-full h-[500px] md:h-[400px] bg-slate-800 -z-10"></div>
      <Header />

      <div className="md:px-[10%] px-5 pb-10">
        <div className="flex items-center justify-between my-10 md:my-20 text-white">
          <div>
            <h1 className="text-5xl">Courses</h1>
            <small className="text-slate-300">Manage your courses here</small>
          </div>

          <Dialog>
            <DialogTrigger>
              <FilledButton className="flex items-center justify-center gap-3 text-sm">
                <FaPlus size={20} />
                <span>New Course</span>
              </FilledButton>
            </DialogTrigger>
            <DialogContent>
              <form action="" onSubmit={onSubmit}>
                <DialogHeader>
                  <DialogTitle>Create a new Course</DialogTitle>
                </DialogHeader>
                <div className="gap gap-y-5 child:w-full child:my-5">
                  <Input
                    required
                    name="name"
                    value={name}
                    onChange={onChange}
                    label="Course Name"
                  />
                  <Input
                    name="courseCode"
                    value={courseCode}
                    onChange={onChange}
                    label="Course Code"
                    required
                  />
                  <Input
                    name="duration"
                    value={duration}
                    onChange={onChange}
                    label="Course Duration"
                    type="number"
                    required
                  />
                </div>

                <DialogFooter>
                  <FilledButton
                    loading={loading}
                    disabled={loading}
                    className=""
                    type="submit"
                  >
                    Save
                  </FilledButton>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div>
          <Table className="bg-white shadow rounded-2xl">
            <TableHeader>
              <TableRow className="child:py-5 child:text-center child:text-xl">
                <TableHead>Course Code</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Classes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {new Array(20).fill('').map((_, index) => (
                <TableRow key={index} className="child:py-3 child:text-center">
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Testing</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>{}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Courses
