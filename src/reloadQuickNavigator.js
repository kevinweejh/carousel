import { getCurrentIndex } from "./sharedState";

export default () => {
    const quickNav = document.querySelector("#quickNav");
    const quickNavBtnArray = Array.from(quickNav.children);

    const currentIndex = getCurrentIndex();

    quickNavBtnArray.forEach((quickNavBtn) => {
        quickNavBtn.classList.remove('bg-gray-700');
    })
    quickNavBtnArray[currentIndex].classList.add('bg-gray-700');
}