type CellPropsType = {
    cell_size: string,
    bg_color_dead: string,
    bg_color_alive: string
}

export default function Cell({ cell_size, bg_color_dead, bg_color_alive }: CellPropsType){
    return (
        <div style={{
            width: cell_size,
            height: cell_size,
            backgroundColor: bg_color_alive,
            border: '10px solid #aabbcc'
        }}>

        </div>
    )
}