var numIslands = function (grid) {
  const width = grid[0].length;
  const height = grid.length;

  const visited = Array.from(Array(height), () => Array(width).fill(false));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let islandCount = 0;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === "1" && visited[i][j] === false) {
        const queue = [[i, j]];
        visited[i][j] = true;

        while (queue.length > 0) {
          const [x, y] = queue.shift();

          for (let k = 0; k < 4; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];

            if (
              nx >= 0 &&
              ny >= 0 &&
              nx < height &&
              ny < width &&
              visited[nx][ny] === false &&
              grid[nx][ny] === "1"
            ) {
              visited[nx][ny] = true;

              queue.push([nx, ny]);
            }
          }
        }

        islandCount++;
      }
    }
  }

  return islandCount;
};