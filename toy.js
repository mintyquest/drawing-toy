const container = document.querySelector('.container');
const btn = document.querySelector('button');
const grid = document.createElement('div');

//The prompt for the player that lets them specify the amount of squares per side that they want
btn.addEventListener('click', () => {
    let answer = prompt('How many squares do you want per side?');
    if (answer < 101) {
    
    container.replaceChildren();
    createGrid(answer);
    }
    else {
        alert('The limit you can enter is 100');
    }
});

//Creates the grid with the specified amount of squares per side
function createGrid(amount) {
    let i = 0;
    amount *= amount;
    do {
        container.appendChild(grid.cloneNode(true)); //creates clones of the square so when it is appended, it is a grid instead of just one square.
        ++i;
    } while (i < amount);
}

//Sets a size and a black border around the divs, turning them into boxes
grid.classList.add('grid');

//Creates the initial 16x16 grid
createGrid(16);

//Makes it so moving your mouse over the container will make the grid divs below it change in color
container.addEventListener('mouseover', (e) => {
    
    //grid.classList.add('stencil');
    e.target.classList.add('stencil');
});
