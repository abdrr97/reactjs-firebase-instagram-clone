import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import NotFound from './pages/NotFound'
const Login = lazy(() => import('./pages/Login.jsx'))
const Signup = lazy(() => import('./pages/Signup.jsx'))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path={ROUTES.LOGIN} component={Login} />
          <Route exact path={ROUTES.SIGN_UP} component={Signup} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
