// https://medium.com/cesars-tech-insights/quicksort-17c5d24e7e5f

// timeComplexity O(n log n)
// gives high efficiency for large-data application
// depending on the way you implement it, it can be up to 2x or even 3x faster than Merge Sort or Heap Sort.

function quickSort(list) {
  // base Case
  // if list is 1 return list;
  if(list.length < 2) {
    return list;
  }
  // make pivot to the first element
  let pivot = list[0];
  // make an left empty array
  let leftArray = [];
  // make an right empty array
  let rightArray = [];
  // loop through the list
  for(let i = 1; i < list.length; i++) {
    // check if pivot bigger than element
    if(pivot > list[i]) {
      // if element is less than pivot push that element in left array
      leftArray.push(list[i]);
    } else {
      // if element is bigger than pivot push that element in right array
      rightArray.push(list[i]);
    }
    //at the end concat left array/pivot/right array
  }
  return [].concat(quickSort(leftArray), pivot, quickSort(rightArray));
}



console.log(quickSort([4,1,7,2,5,2,3]))
