// 981. Time Based Key-Value Store

// TC - O(log n)
// SC - O(n)
var TimeMap = function () {
  // Map<string, Array<[timestamp, value]>>
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map.get(key)) {
    this.map.set(key, []);
  }

  this.map.get(key).push([timestamp, value]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map.get(key)) return "";

  let result = "";
  const arr = this.map.get(key);

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    let midTime = arr[mid][0];

    if (midTime <= timestamp) {
      result = arr[mid][1];
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
