/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    const resultObj = {};

    for (const el of this) {
        if (!resultObj[fn(el)]) {
            resultObj[fn(el)] = [];
        }

        resultObj[fn(el)].push(el);
    }

    return resultObj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */