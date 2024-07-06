const passThePillow = (n: number, time: number): number => {
  if (n > time) return time + 1;

  const cyclesCompleted = Math.floor(time / (n - 1));
  const jumpsLeft = time % (n - 1);

  if (cyclesCompleted % 2 === 0) return 1 + jumpsLeft;
  else return n - jumpsLeft;
};