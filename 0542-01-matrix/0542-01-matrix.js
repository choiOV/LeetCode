/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const n = mat.length;
  const m = mat[0].length;

  const dist = Array.from({ length: n }, () => Array(m).fill(-1));
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === 0) {
        dist[i][j] = 0;
        queue.push([i, j, 0]);
      }
    }
  }

  while (queue.length > 0) {
    let [x, y] = queue.shift();

    for (let j = 0; j < 4; j++) {
      const nx = x + dx[j];
      const ny = y + dy[j];

      if (nx >= 0 && ny >= 0 && nx < n && ny < m && dist[nx][ny] === -1) {
        dist[nx][ny] = dist[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return dist;
};