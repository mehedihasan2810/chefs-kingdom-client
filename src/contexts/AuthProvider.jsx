import { createContext, useContext } from "react"


const AuthContext = createContext();

const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider value='fooo'>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
    return useContext(AuthContext)
  }

export default AuthProvider