export function add(numbers: string): number {
  if (isEmpty(numbers)) {
    return 0;
  }

  const delimiter = getDelimiter(numbers);
  const numbersArray = parseNumbers(numbers, delimiter);
  return sumNumbers(numbersArray);
}

// constants
const customDelimiterPattern = /^\/\/(.)\n/;

// helpers
function isEmpty(numbers: string): boolean {
  return numbers === "";
}

function getDelimiter(numbers: string): string {
  if (customDelimiterPattern.test(numbers)) {
    return numbers.match(customDelimiterPattern)![1];
  }
  return ",";
}

function parseNumbers(numbers: string, delimiter: string): number[] {
  const strippedNumbers = numbers.replace(customDelimiterPattern, "");
  const convertedNumbers = strippedNumbers.replace(/\n/g, delimiter);
  return splitNumbers(convertedNumbers, delimiter);
}

function splitNumbers(numbers: string, delimiter: string): number[] {
  return numbers.split(delimiter).map(Number);
}

function sumNumbers(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
