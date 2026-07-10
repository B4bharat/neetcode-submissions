class Solution {
    /**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 *
 * Time Complexity: O(m + n) - single pass through both arrays
 * Space Complexity: O(1) - merged in-place, no extra arrays used
 *
 * Approach:
 * Merging from the front would require shifting elements in nums1
 * to make room, which is expensive. Instead, merge from the BACK:
 * the last (m + n) slots in nums1 are the largest values overall,
 * so we can place the largest remaining element (from either array)
 * at the end of nums1 without ever overwriting an unprocessed value.
 */
    merge(nums1, m, nums2, n) {
        let leftIndex = m - 1;
    let rightIndex = n - 1;
    let writeIndex = m + n - 1;

    while (leftIndex >= 0 && rightIndex >= 0) {
        if (nums1[leftIndex] > nums2[rightIndex]) {
            nums1[writeIndex] = nums1[leftIndex];
            leftIndex--;
        } else {
            nums1[writeIndex] = nums2[rightIndex];
            rightIndex--;
        }
        writeIndex--;
    }

    // Dump any leftover elements from nums2 (nums1's leftovers are already in place)
    while (rightIndex >= 0) {
        nums1[writeIndex] = nums2[rightIndex];
        rightIndex--;
        writeIndex--;
    }
    }
}
