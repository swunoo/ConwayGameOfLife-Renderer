import { useContext, useState } from 'react';
import '../../App.css'
import { CellNumberContext } from '../AppContextProvider';

// Mock data
const data = {
    max: '50',
    min: '1'
}

export default function CellNumberSlider(){

    const [value, setValue] = useState(data.min);
    const { setCellNumber } = useContext(CellNumberContext);

    return(
        <div>

            {/* The Slider */}
            <div className='notIngamePanelTitle'>
                <h3>Cells on Each Side</h3>
                <p>{value}</p>
            </div>
            <input
                type="range"
                min={data.min}
                max={data.max}
                value={value}
                className="slider"
                onChange={
                (e) => 
                    {
                        let num = e.target.value;
                        setValue(num); setCellNumber(num*num)
                    }
                }
            />

        </div>
    );
}