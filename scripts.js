


const maze = document.querySelector('.maze');
const cells = [];
let playerPosition;
let finishPosition;

// Create the maze
for (let i = 0; i < 15; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  cells[i] = [];

  for (let j = 0; j < 15; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    row.appendChild(cell);
    cells[i][j] = cell;

    // Set the player position
    if (i === 0 && j === 0) {
      cell.classList.add('player');
      playerPosition = { x: j, y: i };
    }

    // Set the finish position
    if (i === 14 && j === 14) {
      cell.classList.add('finish');
      finishPosition = { x: j, y: i };
    }

    // Set up the walls
    if (Math.random() < 0.3) {
      cell.classList.add('wall');
    }
  }

  maze.appendChild(row);
}

// Move the player
document.addEventListener('keydown', (event) => {
  const key = event.key;
  let x = playerPosition.x;
  let y = playerPosition.y;

  switch (key) {
    case 'ArrowUp':
      y--;
      break;
    case 'ArrowDown':
      y++;
      break;
    case 'ArrowLeft':
      x--;
      break;
    case 'ArrowRight':
      x++;
      break;
  }

  if (x >= 0 && x < 15 && y >= 0 && y < 15 && !cells[y][x].classList.contains('wall')) {
    cells[playerPosition.y][playerPosition.x].classList.remove('player');
    playerPosition.x = x;
    playerPosition.y = y;
    cells[playerPosition.y][playerPosition.x].classList.add('player');

    if (playerPosition.x === finishPosition.x && playerPosition.y === finishPosition.y) {
      alert('You win!');
    }
  }
});