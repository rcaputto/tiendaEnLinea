import React, {useState} from 'react'

export  const AuthContext = React.createContext()

const AuthProvider = ({children}) =>{
    const [login, setLogin] = useState(false);
    const [adminLogin, setAdminLogin] = useState (false);
    

    const handleAdminLogin = () =>{

        setAdminLogin (true)
    }
    const handleAdminLogout = () =>{

        setAdminLogin (false)
    }

    const handleLogin = () => {
        setLogin (true)
    }

    const handleLogout =  () => {
        setLogin(false)
        
        
    }

    return (
        <AuthContext.Provider
            value = {{login, handleLogin, handleLogout, adminLogin, handleAdminLogin, handleAdminLogout, alert}}    
            >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider