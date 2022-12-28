import { createContext, ReactNode, useState } from "react"

export const CellNumberContext = createContext(1);
export const InGameContext = createContext(null);

export default function AppContextProvider({ children }){

    const [cellNumber, setCellNumber] = useState(1);
    const [inGame, setInGame] = useState(false);
    const [gameProps, setGameProps] = useState({});
    const [speed, setSpeed] = useState(1000);
    const [cells, setCells] = useState([]);

    return (
        <CellNumberContext.Provider 
            value={{cellNumber, setCellNumber}}>
            <InGameContext.Provider
                value={{
                    inGame, setInGame,
                    gameProps, setGameProps,
                    speed, setSpeed,
                    cells, setCells
                }}>
                { children }
            </InGameContext.Provider>
        </CellNumberContext.Provider>
    )
}