import { getCurrentIndex } from "./sharedState";

export default () => {
    const quickNav = document.querySelector("#quickNav");
    const quickNavBtnArray = Array.from(quickNav.children);

    quickNavBtnArray.forEach((quickNavBtn) => {
        quickNavBtn.classList.remove('bg-gray-700');
    })

    const currentIndex = getCurrentIndex();
    quickNavBtnArray[currentIndex].classList.add('bg-gray-700');
}