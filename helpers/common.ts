import { Buffer } from 'buffer';
import * as FileSystem from 'expo-file-system';

export function isNumber(number: number) {
  return typeof number == 'number' && isFinite(number);
}
export function isArray(data: any) {
  return Array.isArray(data);
}


export const formatCurrency = (amount: number, currency: string = 'USD') => {
  if (Number.isNaN(amount)) {
    return '';
  }
  // Create our number formatter.
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return formatter.format(amount);
};

export async function writeFile(buffer: any, fileName: string) {
  try {
    //Buffer.from(res.data.data.pdf).toString('base64');
    const base64 = new Buffer(buffer).toString('base64');
    const filename = FileSystem.documentDirectory + fileName + '.pdf';
    await FileSystem.writeAsStringAsync(filename, base64, { encoding: FileSystem.EncodingType.Base64 });
    return filename as string;
  }
  catch (err) {
    console.error(err);
  }
}

export function arrayBufferToBase64(buffer: ArrayBufferLike) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

export function formatNumberIntoDecimals(inputNumber: number, decimals: number) {
  if (inputNumber) {
    if (Number.isInteger(inputNumber)) {
      return inputNumber.toString() // If it's an integer, return as is
    } else {
      return inputNumber.toFixed(decimals)  // If it has decimals, round to decimal places
    }
  } else {
    return '0'
  }
}

export const structuredClone = (data: any) => {
  return JSON.parse(JSON.stringify(data))
}

export function encodeURIString(URI: string) {
  const encodedURI = encodeURIComponent(URI)
    .replace(
      /[-.!~*'()]/g,
      (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
    )
  return encodedURI
}

export function decodeUriString(URI: string) {
  const decodedURI = decodeURIComponent(URI)
  return decodedURI
}


export function removeTimeFromDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

export const encodeRegExp = (re: RegExp) => JSON.stringify(re.source);


export const decodeRegExp = (json: string) => new RegExp(JSON.parse(json));

export function roundToTwo(num: number) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}
