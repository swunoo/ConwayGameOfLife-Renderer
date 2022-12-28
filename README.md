# Visualization of "Conway Game of Life"

<ul>
    <h1>About</h1>
    <li> This is for visualizing Conway's Game of Life (aka, zero-person-game). </li>
    <h3>The Game</h3>
    <li> Basically, there is a grid with cells, each of which can be either ALIVE/ON or DEAD/OFF at any moment.</li>
    <li> The game then plays itself in such a way that each cell is determined to be ALIVE or DEAD next turn by calculating the number of its ALIVE neighbours. </li>
    <li>For more information, here is <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">a link to its wikipedia article</a></li>
    </ul>
    <ul>
    <h3>The App</h3>
    <li>With this app, we can specify the size of the grid, customize the initial condition of cells, and also tweak the original formula.</li>
    <li>While the game is in progress, we can increase/decrease speed and play/pause the game.</li>
    <li>There is no mechanism for recording the patterns yet.</li>
    <h3>The Project</h3>
    <li>I wrote this while learning TypeScript and React.</li>
    <li>It was written in a day, on 2022 Dec 28, and the total development time is around 10 hours.</li>
    <li>Please feel free to <a href="github.com/swunoo/ConwayGameOfLife-Renderer">view the code</a>. Thank you.</li>
    <div
    style={{
        width:'100%',
        display: 'flex',
        justifyContent: 'center'
    }}
    >
    <button
        onClick={onCloseBtn}
        style={{
            margin: '20px',
            border: 'none',
            padding: '0.5rem 3rem',
            fontWeight: '700',
            backgroundColor: '#ccc',
            color: '#000',
            cursor: 'pointer'
        }}
    > OK </button>
    </div>

    </ul>