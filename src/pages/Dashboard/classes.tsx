import { FilledButton } from '@/components/Button'
import Header from '@/components/Header'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { storageHandler } from '@/config/localStorage'
import { createClass } from '@/request/classes/classes.service'
import { getCoursesForTeacher } from '@/request/courses/courses.service'
import { FormEvent, useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'

const Classes = () => {
  const [courses, setCourses] = useState<[]>([])
  const [courseId, setCourseId] = useState('')
  const [loading, setLoading] = useState(false)
  const [codeHandler, setCodeHandler] = useState({
    code: '',
    isCode: false,
  })

  const { code, isCode } = codeHandler

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCoursesForTeacher({
        teacherId: storageHandler.getTeacherId()!,
      })

      setCourses(data || [])
    }

    fetchCourses()
  }, [])

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = await createClass({ courseId, setLoading })

    setCodeHandler({
      code: data.code || '272364',
      isCode: true,
    })
  }

  return (
    <div className="relative">
      <Toaster />
      <div className="absolute top-0 min-h-screen w-full bottom-0 bg-slate-100 -z-20"></div>
      <div className="absolute top-0 w-full h-[500px] md:h-[400px] bg-slate-800 -z-10"></div>
      <Header />

      <div className="md:px-[10%] px-5">
        <div className="flex items-center justify-between my-10 md:my-20 text-white">
          <div>
            <h1 className="text-5xl">Classes</h1>
            <small className="text-slate-300">Manage your classes here</small>
          </div>

          <Dialog>
            <DialogTrigger>
              <FilledButton>Start a Class</FilledButton>
            </DialogTrigger>
            <DialogContent>
              <form onSubmit={onSubmit}>
                <DialogHeader>
                  <DialogTitle>Generate a new code for the class</DialogTitle>
                </DialogHeader>
                <div className="gap child:w-full child:my-3">
                  <Select value={courseId} onValueChange={(value) => setCourseId(value)}>
                    <SelectTrigger className="p-5">
                      <SelectValue placeholder="Select course..." />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map(() => (
                        <SelectItem value="light">Light</SelectItem>
                      ))}
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {isCode ? (
                  <div className="mt-5 mb-2">
                    <p className="text-center text-2xl">{code}</p>
                    <p className="text-center text-slate-400">
                      Copy the code and share it with the students
                    </p>
                  </div>
                ) : (
                  <DialogFooter>
                    <FilledButton
                      loading={loading}
                      disabled={loading}
                      className=""
                      type="submit"
                    >
                      Generate
                    </FilledButton>
                  </DialogFooter>
                )}
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div>
          <Table className="bg-white shadow rounded-2xl">
            <TableHeader>
              <TableRow className="child:py-5 child:text-center child:text-xl">
                <TableHead>Class Code</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Class Date</TableHead>
                <TableHead>Attendees</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {new Array(20).fill('').map((_, index) => (
                <TableRow key={index} className="child:py-3 child:text-center">
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Testing</TableCell>
                  <TableCell>
                    {new Date().toLocaleDateString(undefined, {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: 'numeric',
                    })}
                  </TableCell>
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

export default Classes
