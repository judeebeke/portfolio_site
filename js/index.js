const presentYear = document.querySelector("#year");
const backToTop = document.querySelector(".top-arrow");
const preloader = document.querySelector("#preloader");
const body = document.querySelector('body')
const NewDate = new Date();

const updateYear = (yearUpdate, year) => {
    year.innerHTML = yearUpdate.getFullYear();
};

updateYear(NewDate, presentYear);

if (preloader) {
    window.addEventListener("load", () => {
        preloader.remove();
    });
}

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});