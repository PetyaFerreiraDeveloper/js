document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const scoreDisplay = document.querySelector('span');
    const startBtn = document.querySelector('.start');

    const width = 10;
    let currentIndex = 0; // first div in the grid
    let appleIndex = 0; // first div in the grid
    let currentSnake = [2, 1, 0]; // all divs with value of 2 will be the head of the snake and all div with value of 0 will be the tail
    let direction = 1;
    let score = 0;
    let speed = 0.9;
    let intervalTime = 0;
    let interval = 0;

    //start the game
    function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove('snake'));
        squares[appleIndex].classList.remove('apple');
        clearInterval(interval);
        score = 0;
        // randomly generate a new apple
        randomApple();
        direction = 1;
        scoreDisplay.innerText = score;
        intervalTime = 1000;
        currentSnake = [2, 1, 0];
        currentIndex = 0;
        currentSnake.forEach(index => squares[index].classList.add('snake'));
        interval = setInterval(moveOutcomes, intervalTime);
    }

    // function that deals with all the outcomes of the snake movement. 
    function moveOutcomes() {
        // snake hitting border or hitting self
        if (
            (currentSnake[0] + width >= (width * width) && direction === width) || // if snake hits bottom
            (currentSnake[0] % width === width - 1 && direction === 1) || // snake hits right wall
            (currentSnake[0] % width === 0 && direction === -1) || // if snake hits left wall
            (currentSnake[0] - width < 0 && direction === - width) || // if snake hits top
            squares[currentSnake[0] + direction].classList.contains('snake') // snake hits itself
        ) {
            return clearInterval(interval);
        }

        const tail = currentSnake.pop(); // removes last index of the array and shows it
        squares[tail].classList.remove('snake'); // removes clas of snake from the tail
        currentSnake.unshift(currentSnake[0] + direction); // gives direction to the head

         // snake getting apple
         if(squares[currentSnake[0]].classList.contains('apple')) {
             squares[currentSnake[0]].classList.remove('apple');
             squares[tail].classList.add('snake');
             currentSnake.push(tail);
             randomApple();
             score++;
             scoreDisplay.textContent = score;
             clearInterval(interval);
             intervalTime = intervalTime * speed;
             interval = setInterval(moveOutcomes, intervalTime);
         };
         squares[currentSnake[0]].classList.add('snake');
    }
    
    // generate new apple once the old is eaten
    function randomApple() {
        do {
            appleIndex = Math.floor(Math.random() * squares.length)
        } while(squares[appleIndex].classList.contains('snake')); // make sure the apple doesnt appear in a div which already contains snake
        squares[appleIndex].classList.add('apple');
    }

   


    // make the snake move
    function control(e) {
        squares[currentIndex].classList.remove('snake');

        if(e.keyCode === 39) {
            direction = 1; // right arrow key
        } else if (e.keyCode === 38) {
            direction = -width // up arrow- snake will go back 10divs appearing to go up
        } else if (e.keyCode === 37) { // to go left 
            direction = -1;
        } else if (e.keyCode === 40) {
            direction = +width;
        }
    }

    document.addEventListener('keyup', control);
    startBtn.addEventListener('click', startGame());

})

// video from https://www.youtube.com/watch?v=lhNdUVh3qCc
