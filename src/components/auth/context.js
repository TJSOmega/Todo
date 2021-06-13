import React, {useState, useEffect} from 'react'

import jwt from 'jsonwebtoken'
import cookie from 'react-cookies'
import axios from 'axios'

export const LoginContext = React.createContext()

function LoginProvider(props) {
return (
  <LoginContext.Provider>
    {props.children}
  </LoginContext.Provider>
)
}

export default LoginProvider