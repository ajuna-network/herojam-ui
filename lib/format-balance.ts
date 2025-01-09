export const decimalSeparatorDisplay = ".";
export const decimalSeparatorsInput = [".", ","];
export const decimalSeparatorRegex = ",|.";

export type FormatCurrencyOptions = {
  nDecimals: number;
  padToDecimals: boolean;
  decimalSeparator: string;
};

const defaultOptions: FormatCurrencyOptions = {
  nDecimals: Infinity,
  padToDecimals: true,
  decimalSeparator: decimalSeparatorDisplay,
};

export const formatBalance = ({
  value,
  decimals,
  unit,
  options,
}: {
  value: bigint | null | undefined;
  decimals: number;
  unit?: string;
  options?: Partial<FormatCurrencyOptions>;
}): string => {
  const { nDecimals, padToDecimals, decimalSeparator, withUnit } = {
    ...defaultOptions,
    ...options,
  };
  if (value === null || value === undefined) return "";
  const precisionMultiplier = 10n ** BigInt(decimals);
  if (nDecimals < decimals) {
    value = value / 10n ** BigInt(decimals - (nDecimals + 1));
    const rounded = Math.abs(Number(value % 10n)) > 4;
    const rounding = rounded ? (value < 0 ? -1n : 1n) : 0n;
    value = value / 10n + rounding;
    value *= 10n ** BigInt(decimals - nDecimals);
  }
  const isNegative = value < 0n;
  const absValue = isNegative ? value * -1n : value;
  let intPartStr = (absValue / precisionMultiplier).toString();
  if (isNegative) intPartStr = "-" + intPartStr;
  const decimalPart = absValue % precisionMultiplier;

  if (
    nDecimals === 0 ||
    (nDecimals === Infinity && decimalPart === 0n) ||
    (padToDecimals === false && decimalPart === 0n)
  )
    return intPartStr;

  let newDecimalPart = decimalPart
    .toString()
    .padStart(decimals, "0")
    .replace(/00*$/, "");

  if (nDecimals !== Infinity && padToDecimals === true) {
    newDecimalPart = newDecimalPart.padEnd(nDecimals, "0");
  }

  return (
    intPartStr + decimalSeparator + newDecimalPart + (unit ? ` ${unit}` : "")
  );
};
