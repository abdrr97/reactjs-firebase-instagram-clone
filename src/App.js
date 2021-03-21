import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { UserProvider } from './context/user'
import NotFound from './pages/NotFound'
const Login = lazy(() => import('./pages/Login.jsx'))
const Signup = lazy(() => import('./pages/Signup.jsx'))
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'))

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path={ROUTES.LOGIN} component={Login} />
            <Route exact path={ROUTES.SIGN_UP} component={Signup} />
            <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserProvider>
  )
}

export default App
