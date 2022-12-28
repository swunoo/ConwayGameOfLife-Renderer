import '../../App.css'

// Styles
const ulStyle = {
    paddingLeft: '1rem',
    lineHeight: '2rem'
}

// Mock data
const data = {
    alive2alive: {
        minimum: 2,
        maximum: 3
    },
    dead2alive: {
        minimum: 3,
        maximum: 3
    }
}

// MinimaxObj Type
type MinimaxObj = {
    minimum: number,
    maximum: number
}

export default function AlgoDescription(){

    const toAlive = (data: MinimaxObj) => {
        return data.minimum === data.maximum
        ? ( data.maximum )
        : ( data.minimum + ' to ' + data.maximum )
    } 
        

    return (
        <ul style={ulStyle}>
            <li>
                Cells remain <strong>alive</strong> if <strong>{ toAlive(data.alive2alive) }</strong> neighbours are alive.
            </li>
            <li>
                Cells remain <strong>dead</strong> if <strong>{ toAlive(data.dead2alive) }</strong> neighbours are alive.
            </li>
        </ul>
    )
}