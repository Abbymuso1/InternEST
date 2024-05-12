/*
 * Locales code
 * https://gist.github.com/raushankrjha/d1c7e35cf87e69aa8b4208a8171a8416
 */

interface LocaleCode {
  code: string;
  currency: string;
}

function getLocaleCode(): LocaleCode {
  return {
    code: 'en-US',
    currency: 'USD',
  };
}

// ----------------------------------------------------------------------

export function fNumber(inputValue: string): string {
  const { code } = getLocaleCode();

  if (!inputValue) return '';

  const number: number = Number(inputValue);

  const fm: string = new Intl.NumberFormat(code, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number);

  return fm;
}

// ----------------------------------------------------------------------

export function fCurrency(inputValue: string): string {
  const { code, currency } = getLocaleCode();

  if (!inputValue) return '';

  const number: number = Number(inputValue);

  const fm: string = new Intl.NumberFormat(code, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number);

  return fm;
}

// ----------------------------------------------------------------------

export function fPercent(inputValue: string): string {
  const { code } = getLocaleCode();

  if (!inputValue) return '';

  const number: number = Number(inputValue) / 100;

  const fm: string = new Intl.NumberFormat(code, {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(number);

  return fm;
}

// ----------------------------------------------------------------------

export function fShortenNumber(inputValue: string): string {
  const { code } = getLocaleCode();

  if (!inputValue) return '';

  const number: number = Number(inputValue);

  const fm: string = new Intl.NumberFormat(code, {
    notation: 'compact',
    maximumFractionDigits: 2,
  }).format(number);

  return fm.replace(/[A-Z]/g, (match: string) => match.toLowerCase());
}

// ----------------------------------------------------------------------

export function fData(inputValue: string | number): string {
  if (!inputValue) return '';

  if (inputValue === 0) return '0 Bytes';

  const units: string[] = ['bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'];

  const decimal: number = 2;

  const baseValue: number = 1024;

  const number: number = Number(inputValue);

  const index: number = Math.floor(Math.log(number) / Math.log(baseValue));

  const fm: string = `${parseFloat((number / baseValue ** index).toFixed(decimal))} ${units[index]}`;

  return fm;
}
