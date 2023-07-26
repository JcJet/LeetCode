const minSpeedOnTime = (
  dist: number[],
  hours: number,
  start = 1,
  end = 10 ** 7
) => {
  if (dist.length > Math.ceil(hours)) return -1;
  if (start === end) return start;
  const speed = start + Math.round((end - start) / 2 - 0.5);
  const onTime =
    dist.reduce((time, x) => Math.ceil(time) + x / speed, 0) <= hours;
  return minSpeedOnTime(
    dist,
    hours,
    onTime ? start : speed + 1,
    onTime ? speed : end
  );
};