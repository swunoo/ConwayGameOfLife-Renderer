import { useContext, useEffect, useState } from "react";
import { CellNumberContext, InGameContext } from "./AppContextProvider";
import Cell from "./Cell";


export default function GameArea(){

    const { inGame } = useContext(InGameContext);

    const [cells, setCells] = useState([]);
    const [cellStates, setCellStates] = useState({}); // true (ALIVE), false (DEAD)

    console.log(cellStates)

    const { cellNumber } = useContext(CellNumberContext);

    const modifyObj = (obj, key) => {
        return {
            ...obj,
            [key]: !obj[key]
        }
    }

    useEffect(() => {
        
    }, [inGame])

    useEffect(() => {

        const areaElement = document.getElementById('gameArea');
        // const bodyElement = document.getElementsByTagName('body')[0];

        const availableLength = Math.min(
            areaElement.offsetWidth, areaElement.offsetHeight,
            // bodyElement.offsetWidth, bodyElement.offsetHeight
        );

        const cellSize = availableLength/cellNumber;

        let cellKey, newCells = [], newCellStates = {};
        
        for(let i = 0; i<cellNumber; i++){
            for(let j = 0; j<cellNumber; j++){
                
                cellKey = `x${i}y${j}`;

                newCellStates[cellKey] = false;
                
                newCells.push(
                    <Cell 
                        key = {cellKey}
                        keyProp = {cellKey}
                        cell_size = {cellSize}
                        bg_color_dead = {'#000'}
                        bg_color_alive = {'#fff'}
                        currentState = {false}
                        onClickHandler = {
                            (cellKey) => {
                                setCellStates(n => modifyObj(n, cellKey))
                            }
                        }
                    />)
            }
        }

        setCells(newCells);
        setCellStates(newCellStates)

    }, [cellNumber])

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${cellNumber}, auto )`,
                justifyContent: 'center',
                alignItems: 'center',
                maxHeight: '82vh',
                height: '82vh' 
            
            }}
            id='gameArea'
        >
            { cells }
        </div>
    );
}

