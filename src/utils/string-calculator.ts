export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  const numbersArray = numbers.split(",").map(Number);
  return numbersArray.reduce((acc, curr) => acc + curr, 0);
}
