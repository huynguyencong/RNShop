import React, { useState } from "react"

const useValue = () => {
    const [token, setToken] = useState('')
    return { token, setToken }
}

const AuthContext = React.createContext({} as ReturnType<typeof useValue>)

const AuthProvider = ({ children } : { children: any }) => {
    return <AuthContext.Provider value={useValue()}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }