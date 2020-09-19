'use strict';


/*
 [Array] slice function .. f(?start, ?end)

 Time Complexity O(n)
 Space Complexity O(n)

 */

function arraySlice(arr, beginIndex, endIndex) {
    if (!beginIndex && !endIndex) return arr;                    // no arguments (!?start, !?end) return array.
    if (beginIndex + arr.length < 0) beginIndex = 0;             // beginIndex == -8 && Array.length == 7.  (-8) + 7 = -1 == true ? beginIndex = 0.
    if (beginIndex < 0) beginIndex = arr.length + beginIndex;    // beginIndex = -2 ? beginIndex = 7 + (-2) == 5.
    if (endIndex < 0) endIndex = (arr.length-1) + beginIndex;    // endIndex = -2 ? endIndex = (7 - 1) + beginIndex.
    let sliceArray = [];
  
    if (!endIndex) {                                             // (?start, !end) ? end = Array.length loop till end of the array,
      for (let i = beginIndex; i < arr.length; i++) {
        sliceArray.push(arr[i]);
      }
    }
  
    for (let i = beginIndex; i < endIndex; i++) {
      if (endIndex > arr.length) endIndex = arr.length -1;      // (Array.length == 7, start == 0, end == 11) ? end = Array.length -1.
      sliceArray.push(arr[i]);
    }
  
    return sliceArray;
  }
 // T = 1 + 1 + 1 + 1 + 1 + 1 + (n) + 1 + (n) + 1 = O(n)
  /************************************************************************************** */

  /*
  Analyzing Sets of Data: Range, Mean, Median, and Mode.
  
  */
 //Time Complexity O(n)
 //Space Complexity O(1)
  function range(arr) {
      let [bigNum, smallNum] = [Math.max(...arr), Math.floor(arr)];
      let rangeNum = bigNum - smallNum;
      return rangeNum;
  }


  //Time Complexity O(n)
  function mean(arr) {
      let totalNum = arr.reduce((a, b) => a + b), arrLen = arr.length, meanNum = totalNum / arrLen;  //(sum) / (number of items in set)
      return meanNum;
  }

  //Time Complexity O(n)
  function median(arr) {
      let [arrLeng, medianOdd, leftArray, rightArray, medianEven] = [arr.length, true, true, true, true];

      if (arrLeng % 2 == 1) {
          medianOdd = Math.floor(arrLeng / 2);
          return medianOdd
      }

      if (arrLeng % 2 == 0) {
          leftArray = arrLeng / 2 - 1;
          rightArray = arrLeng / 2;
      }

      if (leftArray == rightArray) return leftArray || rightArray;

      medianEven = leftArray + rightArray / 2;

      return medianEven;
  }

  /******************************************************************************* */
 /*  
 Creating Matrix Array (Jagged Array)
 O(n)
 */

 function matrix(rows, columns) {
   const matrixArray = new Array(rows);

   for (let i = 0; i < columns; i++) {
     matrixArray[i] = new Array(rows);
   }

   return matrixArray;
 }

 /********************************************************************************** */
 /* 
 Converting decimal(base 10) to Binary Number.
 Time Complexity: O(log2(n))
 */

 function base10ToString(n) {
   let binaryString = '';

   function base10Helper(n) {
     if (n < 2) {
      binaryString += n;
      return;
     } else {
       base10Helper( Math.floor(n / 2) );
       base10Helper(n % 2);
     }

   }
   base10Helper(n);
   return binaryString;
 }

 /************************************************************************************** */
/*
Permutations of an array ( this is a clasical recursion problem )
swaping elements of an array in every possible position.
Time Complexity: O(n!)
Space Comlexity: O(n!)
*/
const arr = ['A', 'C', 'D'];

function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function permutation(array, begin, end) {
  if (begin == end) return array;
  for (let i = begin; i < end + 1; i++) {
    swap(array, begin, i);
    permutation(array, begin + 1, end);
    swap(array, begin, i);
  }
}

function permuteArray(array) {
  permutation(array, 0, array.length -1);
}

permuteArray(arr);  //output .. // ['A', 'C', 'D']
                               //  ['A', 'D', 'C']
                              //   ['C', 'A', 'D']
                             //    ['C', 'D', 'A']
                            //     ['D', 'C', 'A']
                           //      ['D', 'A', 'C']
                
/************************************************************************ */
/*
Flatten an object
Time Comlexity: O(n)
Space Comlexity O(n)
*/

const dictionary = {
  'key1': '1',
  'key2': {
    'a': '2',
    'b': '3',
    'c': {
      'd': '3',
      'e': '1'
    }
  }
}

function flattendictionary(dictionary) {
  let flattened = {};

  function flattenDicHelper(dictionary, propName) {
    if (typeof dictionary != 'object') {
      flattened[propName] = dictionary;
      return;
    }

    for (let prop in dictionary) {
      if (propName == '') {
        flattenDicHelper(dictionary[prop], propName+prop);
      } else {
        flattenDicHelper(dictionary[prop], propName+'.'+prop);
      }
    }

  }

  flattenDicHelper(dictionary, '');
  return flattened;

}

/************************************************************************/
/*
Bubble sort
Time Comlexity: O(n2)
Space Complexity: O(1)
*/

const numbers = [6, 1, 2, 4, 10, 5];

function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (array[i] < array[j]) {
        swap(array, i, j);
      }
    }
  }
  return array;
}

bubbleSort(numbers); // output [1, 2, 4, 5, 6, 10]