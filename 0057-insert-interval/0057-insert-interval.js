/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = [];
  let index = 0;
  const length = intervals.length;
  let [newStart, newEnd] = newInterval;

  while (index < length && intervals[index][1] < newStart) {
    result.push(intervals[index]);
    index++;
  }

  while (index < length && intervals[index][0] <= newEnd) {
    newStart = Math.min(newStart, intervals[index][0]);
    newEnd = Math.max(newEnd, intervals[index][1]);
    index++;
  }
  result.push([newStart, newEnd]);

  while (index < length) {
    result.push(intervals[index]);
    index++;
  }

  return result;
};