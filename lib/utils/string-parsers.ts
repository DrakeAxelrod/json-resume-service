import { months } from "@lib/constants";
// import phoneParser, { CountryCode } from "libphonenumber-js";

export const capitalize = ([first, ...rest]: any) => {
  return first.toUpperCase() + rest.join("").toLowerCase();
};

export const capitalizeAll = (str: string, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match: any) => match.toUpperCase());

export const formatPhoneNumber = (input?: string) => {
  const sanitized = input?.replace(/[^a-zA-Z0-9]/g, "");
  // const parsed = phoneParser(sanitized || "", { defaultCountry, extract: true });
  // return parsed?.formatNational()
  return sanitized
}

export const formatDate = (date: string | undefined) => {
  return date
  // if (date) {
  // const d = new Date(date);
  // if (isNaN(d.getTime())) return "present"
  // const month = months[d.getMonth()];
  // const year = d.getFullYear();
  // const day = d.getDay() + 1 // leave day because probably too detailed
  // const formatted = `${month}, ${year}`;
  // return formatted
  // }
  // return
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
