// 1
// 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
/**
 * After 3 calls to mergeSort, it would have split the list down to [21, 1]
 * After 16 recursive calls, the list will have been completely sorted.
 * The first 2 lists to be merged are technically [21], [1]
 * The 7th merge would be with [1, 21, 26, 45] and [2, 9, 28, 29]
 */

// 2
// Questions:
/**
1) Suppose you are debugging a quicksort implementation 
   that is supposed to sort an array in ascending order. 
   After the first partition step has been completed, the 
   contents of the array is in the following order: 
   3 9 1 14 17 24 22 20. 
   Which of the following statements is correct about the 
   partition step? Explain your answer.
  
  The pivot could have been 17, but could not have been 14
  The pivot could have been either 14 or 17
  Neither 14 nor 17 could have been the pivot
  The pivot could have been 14, but could not have been 17

2) Given the following list of numbers 
   14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the 
   resulting list after the second partitioning 
   according to the quicksort algorithm.

  When using the last item on the list as a pivot
  When using the first item on the list as a pivot
 */
//Answers:
/**
 * 1)  The pivot vould have been either 14 or 17 because for one,
 *     you can choose any number to be the pivot you'd like and two,
 *     in both cases everything to the left of them are smaller and
 *     everything to the right are greater.
 * 
 * 2) After the second partition with 12 being the pivot: [10, 3, 9, 12, 19, 14, 17, 16, 13, 15]
 *    After the second partition with 14 being the pivot: [13, 10, 3, 9, 12, 14, 17, 15, 19, 16]
 */

//3
function qSort(array, start = 0, end = array.length) {
  if(start >= end) {
    return array;
  }

  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array=  qSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for(let i = start; i < end - 1; i++) {
    if(array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}


function main() {
  let dataSet = [
    89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 
    53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 
    14, 33, 45, 72, 56, 44, 21, 88, 27, 68,
    15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 
    65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 
    9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 
    13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 
    69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 
    46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 
    54, 84, 34, 53, 78, 40, 14, 5
  ];
  console.log(qSort(dataSet));
}

main();