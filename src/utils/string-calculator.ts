const CUSTOM_DELIMITER_PATTERN = /^\/\/(.)\n/;
const DEFAULT_DELIMITER = ",";

export function add(numbers: string): number {
  if (isEmpty(numbers)) {
    return 0;
  }

  const delimiter = getDelimiter(numbers);
  const numbersArray = parseNumbers(numbers, delimiter);

  const negatives = numbersArray.filter((n) => n < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }
  return sumNumbers(numbersArray);
}

// helpers
function isEmpty(numbers: string): boolean {
  return numbers === "";
}

function getDelimiter(numbers: string): string {
  if (CUSTOM_DELIMITER_PATTERN.test(numbers)) {
    return numbers.match(CUSTOM_DELIMITER_PATTERN)![1];
  }
  return DEFAULT_DELIMITER;
}

function parseNumbers(
  numbers: string,
  delimiter: string = DEFAULT_DELIMITER
): number[] {
  const strippedNumbers = numbers.replace(CUSTOM_DELIMITER_PATTERN, "");
  const convertedNumbers = strippedNumbers.replace(/\n/g, delimiter);
  return splitNumbers(convertedNumbers, delimiter);
}

function splitNumbers(numbers: string, delimiter: string): number[] {
  return numbers.split(delimiter).map(Number);
}

function sumNumbers(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
