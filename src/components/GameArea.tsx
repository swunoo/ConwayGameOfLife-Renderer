import Cell from "./Cell";

const gameAreaStyle = {
    display: 'flex',
    flexWrap: 'wrap' as 'wrap',
    gap: '10px',
}

let gameboard: any = [];

for(let i = 0; i<100; i++){
    gameboard.push(<Cell/>)
}

export default function GameArea(){

    return (
        <div style={gameAreaStyle}>
            { gameboard }
        </div>
    );
}