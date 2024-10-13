const currentYear = document.querySelector("#currentyear");
const year = new Date().getFullYear();

const lastModifiedDate = document.querySelector("#lastModified");
currentYear.innerHTML = year;

lastModifiedDate.innerHTML = new Date(document.lastModified);