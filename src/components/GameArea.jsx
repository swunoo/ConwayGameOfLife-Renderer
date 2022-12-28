import { useContext, useEffect, useState } from "react";
import { CellNumberContext } from "./AppContextProvider";
import Cell from "./Cell";


export default function GameArea(){

    const [cells, setCells] = useState([]);
    const [wrapDir, setWrapDir] = useState('row');

    const [debugNum, setDebugNum] = useState(0);
    const [debugNum2, setDebugNum2] = useState(0);
    const [debugNum3, setDebugNum3] = useState(0);

    const { cellNumber } = useContext(CellNumberContext);

    useEffect(() => {

        const areaElement = document.getElementById('gameArea');
        const bodyElement = document.getElementsByTagName('body')[0];

        const availableLength = Math.min(
            areaElement.offsetWidth, areaElement.offsetHeight,
            bodyElement.offsetWidth, bodyElement.offsetHeight
        );

        setDebugNum(availableLength);
        setDebugNum3(areaElement.getBoundingClientRect().width);
        setDebugNum2(areaElement.getBoundingClientRect().height);

        const cellSize = availableLength/Math.sqrt(cellNumber);

        let newCells = [];
        
        for(let i = 0; i<cellNumber; i++){
            newCells.push(
                <Cell 
                    key = {i}
                    cell_size = {cellSize}
                    bg_color_dead = {'#000'}
                    bg_color_alive = {'#fff'}
                    />)
        }

        setCells(newCells);
        setWrapDir(
            areaElement.offsetWidth < areaElement.offsetHeight ? 'row' : 'column'
        )

    }, [cellNumber])


    

    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                wrapDirection:{wrapDir}
            }}
            id='gameArea'
        >
            {/* {debugNum}
            <br />
            {debugNum2},
            {debugNum3}
            <br />
            {wrapDir}
            <br /> */}
            { cells }
        </div>
    );
}