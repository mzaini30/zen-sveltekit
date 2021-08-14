import {Router, useRoutes} from 'solid-app-router'
import routes from './routes'
import './App.css'

export default function(){
  const Routes = useRoutes(routes)
  return <Router>
    <Routes></Routes>
  </Router>
}