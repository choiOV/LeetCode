
var MyQueue = function () {
    this.inStack = [];
    this.outStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    const element = this.inStack.splice(0, 1)
    this.outStack.push(element[0]);

    return this.outStack.shift();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.inStack[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !this.inStack.length
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */