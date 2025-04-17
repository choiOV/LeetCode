var TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  if (!this.cache.get(key)) {
    this.cache.set(key, { value: value, duration: duration + Date.now() });

    return false;
  }
  if (this.cache.get(key).duration < Date.now()) return false;

  this.cache.set(key, { value: value, duration: duration + Date.now() });
  return true;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (!this.cache.get(key)) return -1;
  if (this.cache.get(key).duration < Date.now()) return -1;
  return this.cache.get(key).value;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  let validKey = 0;

  this.cache.forEach((value, key) => {
    if (this.cache.get(key).duration < Date.now()) return;

    validKey++;
  });

  return validKey;
};

// const timeLimitedCache = new TimeLimitedCache();
// console.log(timeLimitedCache);
// timeLimitedCache.set(1, 42, 1000); // false
// timeLimitedCache.get(1); // 42
// timeLimitedCache.count(); // 1
