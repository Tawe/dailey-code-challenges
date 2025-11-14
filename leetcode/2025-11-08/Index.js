var minimumOneBitOperations = function(n) {
  let result = 0;
  while (n > 0) {
    result ^= n;   // XOR result with n
    n >>= 1;       // shift n right by 1 (drop the last bit)
  }
  return result;
};