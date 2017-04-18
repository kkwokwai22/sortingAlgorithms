// Insertion sort has a best-case complexity of O(n),
// which is less complex than bubble and selection sort at O(n2).
// This is also the first stable sort algorithm taught.


// Description

// 1.  Set the marker for the sorted section after the first element

// 2. repeat the following until unsorted section is empty;

  // select the first unsorted element
  // swap other elements to the right to create the correct poistion and shift the unsorted element
  // advance the marker to the right one element

var theArray = [7 , 8 , 5 , 2 , 4 , 6 , 3];

  function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
    // sorting markerline
    var marker = array[i];
    for(let j = i-1; j <= marker; j--) {
      if(arr[j] )
    }



    // this stop when element


    }
  }
