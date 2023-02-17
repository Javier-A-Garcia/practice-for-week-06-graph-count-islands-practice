function getNeighbors(row, col, matrix) {

  let neighbors = [];
  // Check top
  if (row > 0) {
    if (matrix[row - 1][col] === 1){
      neighbors.push([row - 1, col]);
    }
  }
  // Check top right
  if (row > 0 && col < matrix[0].length - 1) {
    if (matrix[row - 1][col + 1] === 1){
      neighbors.push([row - 1, col + 1]);
    }
  }
  // Check right
  if (col < matrix[0].length - 1) {
    if (matrix[row][col + 1] === 1) {
      neighbors.push([row, col + 1]);
    }
  }
  // Check bottom right
  if (col < matrix[0].length - 1 && row < matrix.length - 1) {
    if (matrix[row + 1][col + 1] === 1) {
      neighbors.push([row + 1, col + 1]);
    }
  }
  // Check bottom
  if (row < matrix.length - 1) {
    if (matrix[row + 1][col] === 1) {
      neighbors.push([row + 1, col]);
    }
  }
  // Check bottom left
  if (row < matrix.length - 1 && col > 0) {
    if (matrix[row + 1][col - 1] === 1) {
      neighbors.push([row + 1, col - 1]);
    }
  }
  // Check left
  if (col > 0) {
    if (matrix[row][col - 1] === 1) {
      neighbors.push([row, col - 1]);
    }
  }
  // Check top left
  if (col > 0 && row > 0) {
    if (matrix[row - 1][col - 1] === 1) {
      neighbors.push([row - 1, col - 1]);
    }
  }
  // Return neighbors
  return neighbors;
}

function countIslands(matrix) {
  // Create a visited set to store visited nodes
  let visited = new Set();

  // Initialize count to 0
  let count = 0;

  // Iterate through all indices in matrix
  for (let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      // If an index contains a 1 and has not been visited,
      // increment island count and start traversing neighbors
      if (matrix[i][j] === 1 && !visited.has([i, j].toString())) {
        // DO THE THING (increment island count by 1)
        count++;

        // Initialize a stack with current index
        let currentIndex = [i, j];
        let stack = [currentIndex];

        // Add stringified version of current index to the visited set
        visited.add(currentIndex.toString());

        // While stack contains elements
        while(stack.length > 0) {
          // Pop element from stack
          let currentNode = stack.pop();
          let [row, col] = currentNode;

          // Get valid neighbors of current element
          let neighbors = getNeighbors(row, col, matrix);

          // Iterate over neigbors
          neighbors.forEach(neighbor => {
            // If neighbor has not been visited
            if (!visited.has(neighbor.toString())) {
              // Add neighbor to stack
              stack.push(neighbor);

              // Mark neighbor as visited
              visited.add(neighbor.toString());
            }
          });
        }
      }
    }
  }
  // Return island count
  return count;
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
