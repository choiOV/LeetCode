/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {};

    return function (...args) {
        if (cache[JSON.stringify(args)] === undefined) {
            cache[JSON.stringify(args)] = fn(...args);
        }

        return cache[JSON.stringify(args)];
    };
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */