/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let otherInit = init;

    const counter = {
        increment: () => {
            return ++otherInit;
        },
        reset: () => {
            return otherInit = init;
        },
        decrement: () => {
            return --otherInit;
        }
    }

    return counter;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */