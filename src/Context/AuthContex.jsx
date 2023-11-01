import React, { useState } from 'react'

export const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState(false);
    const [adminLogin, setAdminLogin] = useState(false);
    const [cart, setCart] = useState([])


    const handleAdminLogin = () => {

        setAdminLogin(true)
    }
    const handleAdminLogout = () => {

        setAdminLogin(false)
    }

    const handleLogin = () => {
        setLogin(true)
    }

    const handleLogout = () => {
        setLogin(false)


    }

    return (
        <AuthContext.Provider
            value={{ login, handleLogin, handleLogout, adminLogin, handleAdminLogin, handleAdminLogout, alert, cart, setCart }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider