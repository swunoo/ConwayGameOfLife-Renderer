import { useContext } from 'react';
import '../../App.css'
import aboutIcon from '../../images/icon.png';
import { InGameContext } from '../AppContextProvider';

// Styles
const ctrlStyle = {
    display: 'flex',
    flexDirection: 'column',
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


export default function Controls(){

    const { speed, setSpeed } = useContext(InGameContext);

    return (
        <section style={ctrlStyle}>
            <div style={flex}>
                <button style={btnStyle} onClick={
                    () => setSpeed(
                        n => {
                            if(n>500) return (n-500)
                            else if(n > 100) return (n-100)
                        }
                    )}>
                    <img src={aboutIcon} alt='Reduce Speed' className='iconImg'/>        
                </button>
                <p>Speed: <strong>{speed}</strong> ms per step</p>
                <button style={btnStyle} onClick={() => setSpeed(n => n+500)}>
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