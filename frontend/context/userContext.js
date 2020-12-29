import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({userinfo: null}) 
    const handleUserInfo = userInfo => {
        setUserInfo(userInfo)
    }
    const contextProps = {
        userInfo,
        handleUserInfo
    }
    return (<UserContext.Provider value={contextProps}>{children}</UserContext.Provider>)
}