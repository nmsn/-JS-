const isPallindrome = (n) => {
  n = Math.abs(n);
  
  let help = 1;
  
  while (n / help >= 10) {
    help *= 10;
  }
  
  while (n !== 0) {
    if (parseInt(n / help) !== n % 10) {
      return false;
    }
    
    n = parseInt((n % help) / 10);
    help = parseInt(help / 100);
  }
  return true;
};