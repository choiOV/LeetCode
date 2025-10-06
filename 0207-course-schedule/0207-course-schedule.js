/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const courseGraph = Array.from({ length: numCourses }, () => []);
  const inDegree = new Array(numCourses).fill(0);

  for (const [course, preCourse] of prerequisites) {
    courseGraph[preCourse].push(course);
    inDegree[course]++;
  }

  const readyQueue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) readyQueue.push(i);
  }

  let finishedCount = 0;
  while (readyQueue.length) {
    const currentCourse = readyQueue.shift();
    finishedCount++;

    for (const nextCourse of courseGraph[currentCourse]) {
      if (--inDegree[nextCourse] === 0) readyQueue.push(nextCourse);
    }
  }

  return finishedCount === numCourses;
};
