import { createContext, ReactNode, useState } from "react"

export const CellNumberContext = createContext(1);

export default function AppContextProvider({ children }){


    const [cellNumber, setCellNumber] = useState(CellNumberContext);


    return (
        <CellNumberContext.Provider value={{cellNumber, setCellNumber}}>
            { children }
        </CellNumberContext.Provider>
    )
}