/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const originalColor = image[sr][sc];

    if (originalColor === color) return image;

    const totalRows = image.length;
    const totalColumns = image[0].length;

    const dfs = (row, column) => {
        if (row < 0 || row >= totalRows || column < 0 || column >= totalColumns) return;
        if (image[row][column] !== originalColor) return;

        image[row][column] = color;

        dfs(row + 1, column);
        dfs(row - 1, column);
        dfs(row, column + 1);
        dfs(row, column - 1);
    }

    dfs(sr, sc);

    return image;
};