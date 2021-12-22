import { months } from "@lib/constants";
import phoneParser, { CountryCode } from "libphonenumber-js";

export const capitalize = ([first, ...rest]: any) => {
  return first.toUpperCase() + rest.join("").toLowerCase();
};

/**
 * Capitalizes first letters of words in string.
 * @param {string} str String to be modified
 * @param {boolean=false} lower Whether all other letters should be lowercase
 * @return {string}
 * @usage
 *   capitalize('fix this string');     // -> 'Fix This String'
 *   capitalize('javaSCrIPT');          // -> 'JavaSCrIPT'
 *   capitalize('javaSCrIPT', true);    // -> 'Javascript'
 */
export const capitalizeAll = (str: string, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match: any) => match.toUpperCase());
    
export const formatPhoneNumber = (input?: string, countryCode: CountryCode = "US" as CountryCode) => {
  const sanitized = input?.replace(/[^a-zA-Z0-9]/g, "");
  const parsed = phoneParser(sanitized || "", { defaultCountry: countryCode , extract: true });
  return parsed?.formatNational()
}

export const formatDate = (date: string | undefined) => {
  if (date) {
  const d = new Date(date);
  if (isNaN(d.getTime())) return "present"
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  const day = d.getDay() + 1 // leave day because probably too detailed
  const formatted = `${month}, ${year}`;
  return formatted
  }
  return
};

export const generateDateRange = (obj: any) => {
  return `${formatDate(obj.startDate)} - ${formatDate(obj.endDate)}`;
};
export const setHttps = (link: string | undefined): string => {
  if (link?.search(/^http[s]?\:\/\//) == -1) {
    link = "https://" + link;
  }
  return link || "#";
}

export const minimizeUrl = (url?: string) => {
  const noProtocol =  url?.replace(/(^\w+:|^)\/\//, "");
  return noProtocol?.replace("www.", "")
}
