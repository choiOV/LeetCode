var kClosest = function (points, k) {
    const euclid = [];

    for (const p of points) {
        const dist = p[0] ** 2 + p[1] ** 2;
        euclid.push([dist, p]);
    }

    euclid.sort((a, b) => a[0] - b[0]);

    const result = euclid.slice(0, k).map(([_, p]) => p);

    return result;
};