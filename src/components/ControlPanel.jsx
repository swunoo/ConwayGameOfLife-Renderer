import { useContext, useState } from 'react';
import aboutIcon from '../images/icon.png';
import AlgoDescription from './Panel_ingame/AlgoDescription';
import CellNumberSlider from './Panel_notingame/CellNumberSlider';
import Controls from './Panel_ingame/Controls';
import StatTable from './Panel_ingame/StatTable';
import Formula from './Panel_notingame/Formula';
import InitialCondition from './Panel_notingame/InitialCondition';
import { InGameContext } from "./AppContextProvider";


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


const confirmBtnStyle = {
    width: '100%',
    backgroundColor: '#ccc',
    borderRadius: '0',
    border: 'none',
    padding: '5px',
    cursor: 'pointer',
    color: '#000',
    fontWeight: '600',
}

export default function ControlPanel(){

    const { inGame, setInGame, setGameProps } = useContext(InGameContext);

    const startGame = () => {

        const gameProps = {
            alive2alive: {
                minimum: document.getElementById('a2amin').value,
                maximum: document.getElementById('a2amax').value
            },
            dead2alive: {
                minimum: document.getElementById('d2amin').value,
                maximum: document.getElementById('d2amax').value
            }
        };

        setInGame(true);
        setGameProps(gameProps);
    }

    return (
        <div>
            <header style={headerStyle}>
                <p style={headerPStyle}>Visualize CGOL</p>
                <img src={aboutIcon} alt='Go to About' className='iconImg'/>
            </header>

            <hr style={hrStyle} />

            <aside>

                {
                    // Shows stats and controls while inGame.
                    inGame && (
                    <>
                        <StatTable />
                        <hr style={hrStyle} />
                        <Controls />
                        <hr style={hrStyle} />
                        <AlgoDescription />
                        <hr style={hrStyle} />
                        <button
                            style={resetBtnStyle}
                            onClick={() => setInGame(false)}>
                            Reset All and Restart
                        </button>
                    </>
                    )
                }
                {
                    // Shows settings for new game while !inGame.
                    !inGame && (
                    <>
                        <CellNumberSlider/>
                        <Formula/>
                        <InitialCondition/>
                        <button
                            style={confirmBtnStyle}
                            onClick={startGame}>
                            Confirm
                        </button>
                    </>
                    )
                }

                

            </aside>
        </div>
        
    );
}