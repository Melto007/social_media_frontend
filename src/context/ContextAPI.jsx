import { createContext } from 'react'

const contextAPI = createContext({

})

export default function ContextProvider({ children }) {
    return (
        <contextAPI.Provider>
            {children}
        </contextAPI.Provider>
    )
}