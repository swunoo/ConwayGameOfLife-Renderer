import '../../App.css'


// Mock data
const data = {
    current_live_num: 10,
    initial_live_num: 5,
    steps_passed: 10
}

export default function StatTable(){

    return (
        <table className='statTable'>
            <tr>
                <th>Current live cells:</th>
                <td>{data.current_live_num}</td>
            </tr>
            <tr>
                <th>Initial live cells:</th>
                <td>{data.initial_live_num}</td>
            </tr>
            <tr>
                <th>Steps passed:</th>
                <td>{data.steps_passed}</td>
            </tr>
        </table>
    )
}