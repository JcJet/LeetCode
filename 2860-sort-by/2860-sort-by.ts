function sortBy(arr: any[], fn: Function, left = 0, right = arr.length - 1): any[] {
    if (left >= right) {
        return;
    }

    const pivotIndex = partition(arr, fn, left, right);

    sortBy(arr, fn, left, pivotIndex - 1);
    sortBy(arr, fn, pivotIndex + 1, right);

    return arr;
};

function partition(arr: any[], fn: Function, left: number, right: number): number {
  const pivot = arr[right];
  let i = left - 1;

  for (var j = left; j < right; j++) {
    if (fn(arr[j]) <= fn(pivot)) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, right);
  return i + 1;
}

function swap(arr: any[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}