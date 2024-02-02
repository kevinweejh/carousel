import ScrollNext from './scrollNext';

export default () => {
    const INTERVAL = 2000;
    let autoScrollIntervalId;

    const startAutoScroll = () => {
        autoScrollIntervalId = setInterval(ScrollNext, INTERVAL);
    }

    const stopAutoScroll = () => clearInterval(autoScrollIntervalId);

    startAutoScroll();

    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");
    const quickNav = document.querySelector("#quickNav");
    const imageDisplay = document.querySelector("#imageDisplay");

    [prevBtn, nextBtn, quickNav, imageDisplay].forEach((element) => {
        element.addEventListener("mouseenter", stopAutoScroll);
        element.addEventListener("mouseleave", startAutoScroll);
    })
}