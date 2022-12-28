import { useContext } from 'react';
import '../../App.css'
import minusBtn from '../../images/minusBtn.svg';
import plusBtn from '../../images/plusBtn.svg';
import nextBtn from '../../images/nextBtn.svg';
import prevBtn from '../../images/prevBtn.svg';
import playBtn from '../../images/playBtn.svg';
import pauseBtn from '../../images/pauseBtn.svg';
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
    background: 'transparent',
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

    const { speed, setSpeed, playPause, setPlayPause } = useContext(InGameContext);

    return (
        <section style={ctrlStyle}>
            <div style={flex}>
                
                <p>Speed: <strong>{speed}</strong> ms per step</p>
                
            </div>
            <div style={flex}>
                <button style={btnStyle} onClick={
                    () => setSpeed(
                        n => {
                            if(n>500) return (n-500)
                            else if(n > 100) return (n-100)
                        }
                    )}>
                    <img src={minusBtn} alt='Reduce Speed' className='iconImg'/>        
                </button>
                <button style={btnStyle} onClick={() => setSpeed(
                        n => {
                            if(n>500) return (n+500)
                            else return (n+100)
                        }
                    )}>
                    <img src={plusBtn} alt='Increase Speed' className='iconImg'/>        
                </button>
                <button style={btnStyle} onClick={() => setPlayPause(n => !n)}>
                    <img src={playPause ? pauseBtn : playBtn} alt={playPause ? 'Pause' : 'Play'} className='iconImg'/>   
                </button>
                {/* <button style={btnStyle}>
                <img src={prevBtn} alt='Previous Step' className='iconImg'/>
                </button>
                <button style={btnStyle}>
                    <img src={nextBtn} alt='Next Step' className='iconImg'/>
                </button> */}
            </div>
        </section>
    );
}