/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const queue = [];
  let fresh = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        fresh++;
      }
    }
  }

  if (fresh === 0) return 0;

  let minutes = 0;

  while (queue.length > 0) {
    const size = queue.length;
    let infectedMinute = 0;

    for (let s = 0; s < size; s++) {
      const [x, y] = queue.shift();

      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];

        if (nx >= 0 && ny >= 0 && nx < n && ny < m && grid[nx][ny] === 1) {
          grid[nx][ny] = 2;
          fresh--;
          infectedMinute++;
          queue.push([nx, ny]);
        }
      }
    }

    if (infectedMinute > 0) minutes++;
  }

  return fresh === 0 ? minutes : -1;
};