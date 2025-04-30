var ArrayWrapper = function (nums) {
    this.obj = nums;
};

ArrayWrapper.prototype.valueOf = function () {
    if (this.obj.length === 0) return 0;

    return this.obj.reduce((acc, c) => (acc += c));
};

ArrayWrapper.prototype.toString = function () {
    return "[" + String(this.obj) + "]";
};