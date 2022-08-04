import React, { createContext } from 'react'

export const Team = createContext()

const TeamProvider = ({children}) => {
  


  return (
    <Team.Provider value={{
      
      
    }}>
      {children}
    </Team.Provider>
  )
}

export default TeamProvider