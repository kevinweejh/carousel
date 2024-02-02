import { getCurrentIndex } from './sharedState';

export default () => {
    const currentIndex = getCurrentIndex();
    const imageDisplay = document.querySelector("#imageDisplay");

    const imageNodeList = Array.from(imageDisplay.children);
    imageNodeList.forEach((imageNode) => {
        imageNode.classList.add('hidden');
    })
    imageNodeList[currentIndex].classList.remove('hidden');
}