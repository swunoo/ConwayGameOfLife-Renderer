import { useContext } from 'react'
import '../../App.css'
import { InGameContext } from '../AppContextProvider'

// Styles
const ulStyle = {
    paddingLeft: '1rem',
    lineHeight: '2rem',
    fontSize: '0.9rem'
}

export default function AlgoDescription(){

    const { gameProps } = useContext(InGameContext);

    const toAlive = (data) => {
        return data.minimum === data.maximum
        ? ( data.maximum )
        : ( data.minimum + ' to ' + data.maximum )
    } 
        

    return (
        <ul style={ulStyle}>
            <li>
                Cells remain <strong>alive</strong> if <strong>{ toAlive(gameProps.alive2alive) }</strong> neighbours are alive.
            </li>
            <li>
                Cells remain <strong>dead</strong> unless <strong>{ toAlive(gameProps.dead2alive) }</strong> neighbours are alive.
            </li>
        </ul>
    )
}