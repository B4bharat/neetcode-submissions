/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    left;
    right;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex].key <= right[rightIndex].key) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    // Add any remaining elements from the left array
    while (leftIndex < left.length) {
      result.push(left[leftIndex]);
      leftIndex++;
    }

    // Add any remaining elements from the right array
    while (rightIndex < right.length) {
      result.push(right[rightIndex]);
      rightIndex++;
    }

    result;

    return result;
  }

    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs) {
    if (pairs.length <= 1) {
      return pairs;
    }

    const middle = Math.floor(pairs.length / 2);

    const left = pairs.slice(0, middle);
    const right = pairs.slice(middle);

    left;
    right;

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }
}
