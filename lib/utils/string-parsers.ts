import parsePhoneNumber from "libphonenumber-js";

// helper
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const capitalize = ([first, ...rest]: any) => {
  return first.toUpperCase() + rest.join("").toLowerCase();
};

export const formatPhoneNumber = (input?: any) => {
  return parsePhoneNumber(input || "")?.formatNational()
}

export const formatDate = (date: string) => {
  const d = new Date(date);
  if (isNaN(d.getTime())) return "present"
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  const day = d.getDay() + 1 // leave day because probably too detailed
  const formatted = `${month}, ${year}`;
  return formatted
};

export const generateDateRange = (obj: any) => {
  return `${formatDate(obj.startDate)} - ${formatDate(obj.endDate)}`;
};
