/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        if (pairs.length === 0) return pairs;

        let result = [];
        
        // Add initial state
        result.push(pairs.map(p => new Pair(p.key, p.value)));

        for (let i = 1; i < pairs.length; i++) {
            let current = pairs[i];
            let j = i - 1;

            // Compare using the key property of Pair objects
            while(j >= 0 && pairs[j].key > current.key) {
                pairs[j + 1] = pairs[j]; // shift element right
                j--;
            }

            pairs[j + 1] = current;
            
            // Push a deep copy of current state
            result.push(pairs.map(p => new Pair(p.key, p.value)));
        }

        return result;
    }
}
