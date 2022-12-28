import { createContext, ReactNode, useState } from "react"

export const CellNumberContext = createContext(1);
export const InGameContext = createContext(null);

export default function AppContextProvider({ children }){

    const [cellNumber, setCellNumber] = useState(CellNumberContext);
    const [inGame, setInGame] = useState(InGameContext);
    const [gameProps, setGameProps] = useState(InGameContext);

    return (
        <CellNumberContext.Provider 
            value={{cellNumber, setCellNumber}}>
            <InGameContext.Provider
                value={{ inGame, setInGame, gameProps, setGameProps }}>
                { children }
            </InGameContext.Provider>
        </CellNumberContext.Provider>
    )
}