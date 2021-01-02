import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [userInfo, handleUserInfo] = useState(null) 

    const setUserInfo = (prop) => {
        handleUserInfo(prop)
    } 
    const contextProps = {
        userInfo,
        setUserInfo
    }
    return (<UserContext.Provider value={contextProps}>{children}</UserContext.Provider>)
}