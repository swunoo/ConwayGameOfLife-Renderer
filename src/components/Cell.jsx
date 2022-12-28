import { useEffect, useState, useContext } from "react";
import { CellNumberContext, InGameContext } from "./AppContextProvider";


export default function Cell({ cell_size, bg_color_dead, bg_color_alive, onClickHandler, keyProp, currentState }){
    const { inGame } = useContext(InGameContext);

    const [cellColor, setCellColor] = useState(bg_color_dead);
    const [state, setState] = useState(false);

    useEffect(() => {
        setState(currentState)
    }, [currentState])

    useEffect(() => {
        setCellColor(
            state ? bg_color_alive : bg_color_dead
        )
    }, [state])

    return (
        <div
            style={{
                width: cell_size,
                height: cell_size,
                backgroundColor: cellColor,
                border: '1px solid #777',
                boxSizing: 'border-box'
            }}
            onClick={(e) =>{
                if(inGame) return;
                setState(n => !n)
                onClickHandler(keyProp)
            }}
        >

        </div>
    )
}