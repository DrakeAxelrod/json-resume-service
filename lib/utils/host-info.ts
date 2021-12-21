// pretty sure it only works in client
export const hostname =
  typeof window !== "undefined" && window.location.hostname
    ? window.location.hostname
    : "";
export const origin =
  typeof window !== "undefined" && window.location.origin
    ? window.location.origin
    : "";
