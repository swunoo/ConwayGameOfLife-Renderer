import { useContext, useEffect, useState } from "react";
import { CellNumberContext, InGameContext } from "./AppContextProvider";
import Cell from "./Cell";


export default function GameArea(){

    const { inGame, gameProps, speed, cells, setCells } = useContext(InGameContext);

    const [cellStates, setCellStates] = useState({}); // true (ALIVE), false (DEAD)
    const [cellSize, setCellSize] = useState();

    const { cellNumber } = useContext(CellNumberContext);

    const modifyObj = (obj, key) => {
        return {
            ...obj,
            [key]: !obj[key]
        }
    }

    useEffect(() => {
        // Starts the game
        if(!inGame) return;
        let xPos, yPos;

        const cycle = setInterval(() => {
            // Computes
            setCellStates(obj => {
                let newObj = {}
                Object.keys(obj).forEach(key => {
                    xPos = (Number)(key.split('V')[0])
                    yPos = (Number)(key.split('V')[1])
                    let neighbours = [
                        (xPos+1) + 'V' + (yPos),        // E
                        (xPos+1) + 'V' + (yPos+1),      // SE
                        (xPos) + 'V' + (yPos+1),        // S
                        (xPos-1) + 'V' + (yPos+1),      // SW
                        (xPos-1) + 'V' + (yPos),        // W
                        (xPos-1) + 'V' + (yPos-1),      // NW
                        (xPos) + 'V' + (yPos-1),        // N
                        (xPos+1) + 'V' + (yPos-1),      // NE
                    ]
                    let aliveCount = 0;
                    neighbours.forEach(
                        i => {
                            if(obj[i]) aliveCount ++;
                        }
                    )

                    // if cell is currently ALIVE
                    if(obj[key]){
                        newObj[key] = (
                            aliveCount >= gameProps.alive2alive.minimum
                            && aliveCount <= gameProps.alive2alive.maximum
                        ) ? true : false;

                    // if cell is currently DEAD
                    } else {
                        newObj[key] = (
                            aliveCount >= gameProps.dead2alive.minimum
                            && aliveCount <= gameProps.dead2alive.maximum
                        ) ? true : false;
                    }
                    
                })
                return newObj;
            })



        }, speed)

        return () => clearInterval(cycle)

        
    }, [inGame, speed, gameProps])

    useEffect(() => {
        // renders
        let cellKey, newCells = [];
        for(let i = 0; i<cellNumber; i++){
            for(let j = 0; j<cellNumber; j++){
                cellKey = `${j}V${i}`;
                newCells.push(
                    <Cell 
                        key = {cellKey}
                        keyProp={cellKey}
                        cell_size = {cellSize}
                        bg_color_dead = {'#000'}
                        bg_color_alive = {'#fff'}
                        currentState = {cellStates[cellKey]}
                        onClickHandler = {
                            (cellKey) => {
                                setCellStates(n => modifyObj(n, cellKey))
                            }
                        }
                    />)
            }
        }
        setCells(newCells)

    }, [cellStates])

    useEffect(() => {

        // draws the board

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
                
                cellKey = `${j}V${i}`;

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
        setCellStates(newCellStates);
        setCellSize(cellSize);

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

