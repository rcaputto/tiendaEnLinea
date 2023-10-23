import React, {useState} from 'react'

export  const AuthContext = React.createContext()

const AuthProvider = ({children}) =>{
    const [login, setLogin] = useState(false);

    const handleLogin = () => {
        setLogin (true)
    }

    const handleLogout =  () => {
        setLogin(false)
    }

    return (
        <AuthContext.Provider
            value = {{login, handleLogin, handleLogout}}    
            >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider