import '../../App.css'
import aboutIcon from '../../images/icon.png';

// Styles
const ctrlStyle = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center'
}

const btnStyle = {
    height: '30px',
    width: '30px',
    overflow: 'hidden',
    padding:'0',
    backgroundColor: '#ccc',
    borderRadius: '0',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const flex = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
}


// Mock data
const data = {
    speed: '5s'
}

export default function Controls(){
    return (
        <section style={ctrlStyle}>
            <div style={flex}>
                <button style={btnStyle}>
                    <img src={aboutIcon} alt='Reduce Speed' className='iconImg'/>        
                </button>
                <p>Speed: <strong>{data.speed}</strong> per step</p>
                <button style={btnStyle}>
                    <img src={aboutIcon} alt='Increase Speed' className='iconImg'/>        
                </button>
            </div>
            <div style={flex}>
                <button style={btnStyle}>
                    <img src={aboutIcon} alt='Pause' className='iconImg'/>        
                </button>
                <button style={btnStyle}>
                <img src={aboutIcon} alt='Previous Step' className='iconImg'/>
                </button>
                <button style={btnStyle}>
                    <img src={aboutIcon} alt='Next Step' className='iconImg'/>
                </button>
            </div>
        </section>
    );
}