var a = [33, 103, 3, 726, 200, 984, 198, 764, 9];
var b = [1, 6, 9, 5, 3, 4, 2, 12, 4567, 5, 34];

function bubbleSort(arr) {
  var length = arr.length;
  // have a for loop to loop through the stop the operation;
  for(let i = length-1; i >= 0; i--) {
    // have a for loop to do the iteration of sorting;
    for(let j = 0; j <= length; j++) {
      // if first element bigger than second element
      if(arr[j] > arr[j+1]) {
        // keep track of first element called temp
        var temp = arr[j];
        // switch first element to second element
        arr[j] = arr[j+1];
        // swtich second element to temp;
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(a));
console.log(bubbleSort(b));

// function bubbleSort(arr) {
//   var length = arr.length;
//   for(let i = length-1; i >= 0; i--) {
//     for(let j = 1; j <= length; j++) {
//       if(arr[j-1] > arr[j]) {
//         var temp = arr[j];
//         arr[j] = arr[j-1]
//         arr[j-1] = temp;
//       }
//     }
//   }
//   return arr;
// }
