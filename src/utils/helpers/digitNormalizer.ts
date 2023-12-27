"use client"

export function CompareFarsiAndEnglishNumbers(input: string|number): string {
  const farsiNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const normalizedInput = input
    .toString()
    .split('')
    .map((char:string) => {
      const index = farsiNumbers.indexOf(char);
      return index !== -1 ? englishNumbers[index] : char;
    })
    .join('');

  return normalizedInput;
}
