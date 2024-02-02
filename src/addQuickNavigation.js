import { getImageCount, setCurrentIndex } from './sharedState';
import { createElement } from './utils';
import ReloadImage from './reloadImage';

export default () => {
    const quickNav = document.querySelector("#quickNav");

    const emptyCircle = createElement('div', ['border-gray-700', 'border', 'rounded-full', 'w-2', 'h-2', 'cursor-pointer'],'');
    const imgCount = getImageCount();
    console.log(`imageCount: ${imgCount}`);
    for (let i = 0; i < imgCount; i++) {
        const emptyCircleClone = emptyCircle.cloneNode(true);
        emptyCircleClone.addEventListener("click", () => {
            setCurrentIndex(i);
            ReloadImage();
        })
        quickNav.appendChild(emptyCircleClone);
        if (i == 0) {
            emptyCircleClone.classList.add('bg-gray-700');
        }
    }
}