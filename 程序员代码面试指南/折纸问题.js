/**
 *请把一段纸条竖着放在桌子上，然后从纸条的下边向上方对折1次，压出折痕后展开。
 *此时折痕是凹下去的，即折痕突起的方向指向纸条的背面。
 *如果从纸条的下边向上方连续对折2次，压出折痕后展开，此时有三条折痕，从下到上依次是下折痕、下折痕和上折痕。
 给定一个输出参数，代表纸条都从下边下边向上方连续对折N次，请从上到下打印所有折痕的方向。
 */

const printAllFolds = (n) => {
  printProcess(1, n, true);
};

const printProcess = (i, n, down) => {
  if (i > N) {
    return ;
  }
  
  printProcess(i + 1, n, true);
  console.log(down ? 'down' : 'up');
  printProcess(i + 1, n, false);
};