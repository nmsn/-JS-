// ES6
class Permutation {
  constructor(arr) {
    this.arr = Array.from(arr);
    this.result = [];
    this.len = 0;
    this.run(0);
  }

  run(index) {
    if (index == this.arr.length - 1) {
      this.result.push(Array.from(this.arr));
      this.len++;
      return;
    }
    for (let i = index; i < this.arr.length; i++) {
      // 交换arr中i与index元素位置
      [this.arr[index], this.arr[i]] = [this.arr[i], this.arr[index]];
      this.run(index + 1);
      // 恢复数组中i与index元素位置
      [this.arr[index], this.arr[i]] = [this.arr[i], this.arr[index]];
    }
  }
}

let p = new Permutation(["A", "B", "C"]);
console.log(p.result);
console.log(p.len);
// [ [ 'A', 'B', 'C' ],
//   [ 'A', 'C', 'B' ],
//   [ 'B', 'A', 'C' ],
//   [ 'B', 'C', 'A' ],
//   [ 'C', 'B', 'A' ],
//   [ 'C', 'A', 'B' ] ]
// 6
