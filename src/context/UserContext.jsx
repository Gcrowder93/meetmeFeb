import { useState, useEffect, useContext, createContext } from 'react'
import fetchUser from '../services/user'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([])

  const contextValue = { user }
  return <UserContext.Provider value={contextValue}>{user}</UserContext.Provider>
}

const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }

  return context
}

export { UserProvider, useUser }
