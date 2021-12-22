// not used right now
const entityMap: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
};

export const sanitizeHtml = (html: string) => {
    return String(html).replace(/[&<>"'\/]/g, key => entityMap[key]);
}
