export const RowChecker = (matrix) => {
  if (!matrix[0].includes(null) && matrix[0][0] === matrix[0][1] && matrix[0][0] === matrix[0][2]) {
    return true;
  }
  if (!matrix[1].includes(null) && matrix[1][0] === matrix[1][1] && matrix[1][0] === matrix[1][2]) {
    return true;
  }
  if (!matrix[2].includes(null) && matrix[2][0] === matrix[2][1] && matrix[2][0] === matrix[2][2]) {
    return true;
  } return false;
};

export const ColumnChecker = (matrix) => {
  if (
    matrix[0][0]
    && matrix[1][0]
    && matrix[2][0]
    && matrix[0][0] === matrix[1][0] && matrix[0][0] === matrix[2][0]) {
    return true;
  }
  if (
    matrix[0][1]
    && matrix[1][1]
    && matrix[2][1]
    && matrix[0][1] === matrix[1][1] && matrix[0][1] === matrix[2][1]) {
    return true;
  }
  if (
    matrix[0][2]
    && matrix[1][2]
    && matrix[2][2]
    && matrix[0][2] === matrix[1][2] && matrix[0][2] === matrix[2][2]) {
    return true;
  } return false;
};

export const DiagonalChecker = (matrix) => {
  if (
    matrix[0][0]
    && matrix[1][1]
    && matrix[2][2]
    && matrix[0][0] === matrix[1][1] && matrix[0][0] === matrix[2][2]) {
    return true;
  }
  if (
    matrix[0][2]
    && matrix[1][1]
    && matrix[2][0]
    && matrix[0][2] === matrix[1][1] && matrix[0][2] === matrix[2][0]) {
    return true;
  } return false;
};

export const EndGame = (matrix) => {
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      if (matrix[i][j] === null) {
        return false;
      }
    }
  }
  return true;
};
