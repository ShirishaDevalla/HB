import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Loginform from '../components/Loginform'
// import NewDashborad from '../components/NewDashboard'
// import Dashboard from '../components/Dashboard'
// import Users from '../components/Users'
// import Hospital from '../components/Hospital'
// import Doctor from '../components/Doctor'
// import Speciality from '../components/Speciality'
// import Logout from '../components/Logout'
import AuthenticatedRoute from './AuthenticatedRoute'
const Loginform = lazy(() => import("../components/Loginform"))
const NewDashboard = lazy(() => import("../components/NewDashboard"))
const Dashboard = lazy(() => import('../components/Dashboard'));
const Users = lazy(() => import('../components/Users'));
const Hospital = lazy(() => import('../components/Hospital'));
const Doctor = lazy(() => import('../components/Doctor'));
const Speciality = lazy(() => import('../components/Speciality'));
const Logout = lazy(() => import('../components/Logout'));




const RoutingConFig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Suspense fallback={<div>Loading....</div>}><Loginform /></Suspense>}></Route>
        
       
          <Route path='/hospital/*' element={<AuthenticatedRoute><NewDashboard/></AuthenticatedRoute>}>
            <Route path='dashboard' element={<AuthenticatedRoute><Dashboard /></AuthenticatedRoute>}></Route>
            <Route path='users' element={<AuthenticatedRoute><Users /></AuthenticatedRoute>}></Route>
            <Route path='hospital' element={<AuthenticatedRoute><Hospital /></AuthenticatedRoute>}></Route>
            <Route path='doctor' element={<AuthenticatedRoute><Doctor /></AuthenticatedRoute>}></Route>
            <Route path='speciality' element={<AuthenticatedRoute><Speciality /></AuthenticatedRoute>}></Route>
            <Route path='logout' element={<Logout />}></Route>
          </Route>
       



      </Routes>
    </BrowserRouter>
  )
}

export default RoutingConFig