import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Signin = lazy(() => import('./pages/Auth/Signin'))
const Signup = lazy(() => import('./pages/Auth/Signup'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Classes = lazy(() => import('./pages/Dashboard/classes'))
const Courses = lazy(() => import('./pages/Dashboard/courses'))

export const AppRouter = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <Routes>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard">
            <Route index element={<Dashboard />} />
            <Route path="/dashboard/classes" element={<Classes />} />
            <Route path="/dashboard/courses" element={<Courses />} />
          </Route>

          <Route path="*" element={<Signin />} />
        </Routes>
      </Router>
    </Suspense>
  )
}
