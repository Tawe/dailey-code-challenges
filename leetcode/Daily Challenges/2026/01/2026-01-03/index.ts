function numOfWays(n: number): number {
    const MOD = 1000000007n;
  
    let aba: bigint = 6n;
    let abc: bigint = 6n;
  
    for (let i = 2; i <= n; i++) {
      const newAba: bigint = (3n * aba + 2n * abc) % MOD;
      const newAbc: bigint = (2n * aba + 2n * abc) % MOD;
  
      aba = newAba;
      abc = newAbc;
    }
  
    return Number((aba + abc) % MOD);
  };

const x = numOfWays(5000)
x;