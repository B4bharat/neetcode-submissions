class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';
        for (let s of strs) {
        result += `${s.length}#${s}`;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;
        while (i < str.length) {
        let j = i;
        while (str[j] !== '#') j++;
        const length = parseInt(str.slice(i, j));
        result.push(str.slice(j + 1, j + 1 + length));
        i = j + 1 + length;
        }
        return result;
    }
}
