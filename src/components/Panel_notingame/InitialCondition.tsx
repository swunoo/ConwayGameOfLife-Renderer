import '../../App.css'

// Styles
const italicStyle = {
    fontSize: '0.8rem'
}

export default function InitialCondition () {
    return (
        <>
            {/* Toggling Cells */}
            <div className='notIngamePanelTitle'>
                <h3>Initial Condition</h3>
                <em style={italicStyle}>(Click on cells to toggle)</em>
            </div>

            <hr />
            
            
        </>
    )
}