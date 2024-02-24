import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Signin = lazy(() => import('./pages/Auth/Signin'))
const Signup = lazy(() => import('./pages/Auth/Signup'))
const Dashboard = lazy(() => import('./pages/Dashboard'))

export const AppRouter = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <Routes>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Router>
    </Suspense>
  )
}
