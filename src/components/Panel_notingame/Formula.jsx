import { useEffect } from 'react'
import '../../App.css'

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

const ulStyle = {
    margin: '0',
    paddingLeft: '1rem',
    lineHeight: '2rem'
}

const inputWrapperStyle = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
}

const inputStyle = {
    height: '1rem',
    width: '3rem',
    backgroundColor: '#ccc',
    border: 'none',
    fontWeight: '800',
    fontSize: '1.1rem',
    textAlign: 'center'
}

export default function Formula () {

    const resetFormula = () => {
        document.getElementById('a2amin').value = '2';
        document.getElementById('a2amax').value = '3';
        document.getElementById('d2amin').value = '3';
        document.getElementById('d2amax').value = '3';
    }

    useEffect(() => {
        resetFormula();
    }, [])


    return (
        <>
            <div className='notIngamePanelTitle'>
                <h3>Formula</h3>
                <button
                    style={resetBtnStyle}
                    onClick={resetFormula}
                >
                    Use Original Formula
                </button>
            </div>
            
            <ul style={ulStyle}>
                <li>
                    ALIVE cells will still be alive
                    <div style={inputWrapperStyle}>
                        if <input
                            id='a2amin' style={inputStyle}
                            type="number" min="0" max="8"/>
                        to <input
                            id='a2amax' style={inputStyle}
                            type="number" min="0" max="8"/>
                        of their neighbours 
                    </div>
                    are ALIVE.
                </li>
                <li>
                    DEAD cells will become alive
                    <div style={inputWrapperStyle}>
                        if <input
                            id='d2amin' style={inputStyle}
                            type="number" min="0" max="8"/>
                        to <input
                            id='d2amax' style={inputStyle}
                            type="number" min="0" max="8"/>
                        of their neighbours 
                    </div>
                    are ALIVE.
                </li>
            </ul>
        </>        
    )
}