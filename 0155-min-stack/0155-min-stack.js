var MinStack = function () {
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  const stack = [...this.minStack, val];
  this.minStack = stack;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.minStack.splice(this.minStack.length - 1, 1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return Math.min(...this.minStack)
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */