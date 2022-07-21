const container = document.querySelector('.container');
const btn = document.querySelector('button');

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

const grid = document.createElement('div');

//Creates the grid with the specified amount of squares per side
function createGrid(amount) {
    let i = 0;
    amount *= amount;
    do {
        container.appendChild(grid.cloneNode(true)); //creates clones of the square so when it is appended, it is a grid instead of just one square.
        ++i;
    } while (i < amount);
}




grid.classList.add('grid');
grid.classList.add('hover'); //cannot figure out to put this in a event listener. But it works anyway like this. Change later.




createGrid(16);

/*

grid.addEventListener('mouseover', () => {
    
    //was grid.classList.add('stencil');
});

*/