const data = {
    cell_size: '20px',
    bg_color: '#EDF058'
}



export default function Cell(){


    const cellSize = data.cell_size;
    const bgColor = data.bg_color;

    return (
        <div style={{
            width: cellSize,
            height: cellSize,
            backgroundColor: bgColor
        }}>

        </div>
    )
}