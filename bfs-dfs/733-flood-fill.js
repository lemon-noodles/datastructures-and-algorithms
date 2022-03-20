/*

    An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

    You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

    To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.

    Return the modified image after performing the flood fill.

    Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
    Output: [[2,2,2],[2,2,0],[2,0,1]]

    Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2
    Output: [[2,2,2],[2,2,2]]

*/

var floodFill = function (image, sr, sc, newColor) {
  R = image.length;
  C = image[0].length;
  color = image[sr][sc];
  if (color === newColor) return image;
  var dfs = (r, c) => {
    if (image[r][c] === color) {
      image[r][c] = newColor;
      if (r >= 1) {
        dfs(r - 1, c);
      }

      if (r + 1 < R) {
        dfs(r + 1, c);
      }

      if (c >= 1) {
        dfs(r, c - 1);
      }

      if (c + 1 < C) {
        dfs(r, c + 1);
      }
    }
  };

  dfs(sr, sc);
  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    2
  )
);
