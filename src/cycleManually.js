import ScrollNext from './scrollNext';
import ScrollPrev from './scrollPrev';

export default () => {
    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");

    nextBtn.addEventListener("click", () => {
        ScrollNext();
    })
    prevBtn.addEventListener("click", () => {
        ScrollPrev();
    })
}