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
    textAlign: 'center' as 'center'
}

export default function Formula () {
    return (
        <>
            <div className='notIngamePanelTitle'>
                <h3>Formula</h3>
                <button
                    style={resetBtnStyle}
                >
                    Reset
                </button>
            </div>
            
            <ul style={ulStyle}>
                <li>
                    ALIVE cells will still be alive
                    <div style={inputWrapperStyle}>
                        if <input style={inputStyle} type="number" min="0" max="8"/>
                        to <input style={inputStyle} type="number" min="0" max="8"/>
                        of their neighbours 
                    </div>
                    are ALIVE.
                </li>
                <li>
                    DEAD cells will become alive
                    <div style={inputWrapperStyle}>
                        if <input style={inputStyle} type="number" min="0" max="8"/>
                        to <input style={inputStyle} type="number" min="0" max="8"/>
                        of their neighbours 
                    </div>
                    are ALIVE.
                </li>
            </ul>
        </>        
    )
}