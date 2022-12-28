import { useContext } from 'react'
import '../../App.css'
import { InGameContext } from '../AppContextProvider'

// Styles
const italicStyle = {
    fontSize: '0.8rem'
}

const resetBtnStyle = {
    padding:'5px 10px',
    background: 'transparent',
    textDecoration: 'underline',
    color: '#ccc',
    fontWeight: '600',
    borderRadius: '0',
    border: 'none',
    cursor: 'pointer'
}


export default function InitialCondition () {

    const { cells } = useContext(InGameContext);

    const randomize = () => {
        cells.forEach(cell => {
            if(Math.random() < 0.05) cell.props.onClickHandler(cell.props.keyProp);
        })
    }

    return (
        <>
            {/* Toggling Cells */}
            <div className='notIngamePanelTitle'>
                <h3>Initial Condition</h3>
                {/* <em style={italicStyle}>(Click on cells to toggle)</em> */}
                <button
                    style={resetBtnStyle}
                    onClick={randomize}
                >
                    Add Random Cells
                </button>
            </div>

            <hr />
            
            
        </>
    )
}