import React from 'react'

import Loginform from '../components/Loginform'

const AuthenticatedRoute = ({children}) => {
    let verifyToken = sessionStorage.getItem('token')
  return verifyToken ? children : <Loginform></Loginform>
}

export default AuthenticatedRoute

