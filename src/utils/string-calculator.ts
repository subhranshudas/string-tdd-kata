export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  // convert to "\n" to ","
  const convertedNumbers = numbers.replace(/\n/g, ",");

  // split to numbers
  const numbersArray = convertedNumbers.split(",").map(Number);
  return numbersArray.reduce((acc, curr) => acc + curr, 0);
}
