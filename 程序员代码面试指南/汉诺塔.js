/* 汉诺塔 */

const  hanoi = (n, a, b, c) => {
  if (n == 1) {
    console.log(`Move ${n} from ${a} to ${c}`);
  } else {
    hanoi(n-1,a,c,b);
    console.log(`Move ${n} from ${a} to ${c}`);
    hanoi(n-1,b,a,c);
  }
}

hanoi(5, "A", "B", "C");
