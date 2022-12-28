import aboutIcon from '../images/icon.png';
import AlgoDescription from './Panel_Children/AlgoDescription';
import Controls from './Panel_Children/Controls';
import StatTable from './Panel_Children/StatTable';

// Styles
const headerStyle = {
    fontWeight: 500,
    fontSize: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
}

const headerPStyle = {
    // padding: 0,
    marginTop:'0.5rem',
    lineHeight: 0
}

const hrStyle = {
    border: '1px solid #aaaa',
    margin: '15px 0',
    width: '100%'
}

const resetBtnStyle = {
    width: '100%',
    backgroundColor: '#ccc',
    borderRadius: '0',
    border: 'none',
    padding: '5px',
    cursor: 'pointer',
    color: '#000',
    fontWeight: '600'
}

export default function ControlPanel(){
    return (
        <div>
            <header style={headerStyle}>
                <p style={headerPStyle}>Visualize CGOL</p>
                <img src={aboutIcon} alt='Go to About' className='iconImg'/>
            </header>

            <hr style={hrStyle} />

            <aside>
                <StatTable />
                
                <hr style={hrStyle} />
                
                <Controls />
                
                <hr style={hrStyle} />
                
                <AlgoDescription />
                
                <hr style={hrStyle} />

                <button style={resetBtnStyle}>
                    Reset All and Restart
                </button>
            </aside>
        </div>
        
    );
}