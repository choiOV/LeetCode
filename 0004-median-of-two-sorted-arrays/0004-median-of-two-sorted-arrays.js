/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const totalNums = [...nums1, ...nums2].sort((a, b) => a - b);

  if (totalNums.length % 2 === 1) {
    const median = Math.floor(totalNums.length / 2);
    return totalNums[median];
  }

  const median1 = totalNums.length / 2 - 1;
  const median2 = totalNums.length / 2;

  return (totalNums[median1] + totalNums[median2]) / 2;
};