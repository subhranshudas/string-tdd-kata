export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  const customDelimiterPattern = /^\/\/(.)\n/;

  const isCustomDelimiterPatternPresent = customDelimiterPattern.test(numbers);
  let numbersArray: number[] = [];

  if (isCustomDelimiterPatternPresent) {
    const delimiter = numbers.match(customDelimiterPattern)?.[1];

    // remove the custom delimiter pattern
    const strippedNumbers = numbers.replace(customDelimiterPattern, "");

    // split numbers by delimiter
    numbersArray = strippedNumbers.split(delimiter!).map(Number);
    return numbersArray.reduce((acc, curr) => acc + curr, 0);
  } else {
    // convert to "\n" to ","
    const convertedNumbers = numbers.replace(/\n/g, ",");
    // split to numbers
    numbersArray = convertedNumbers.split(",").map(Number);
    return numbersArray.reduce((acc, curr) => acc + curr, 0);
  }
}
