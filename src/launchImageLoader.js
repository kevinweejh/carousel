import { createElement } from './utils';
import { getCurrentIndex, setCurrentIndex, setImageCount } from './sharedState';
import Bass from './galleryImages/bass.jpg';
import MoreBass from './galleryImages/moreBass.jpg';
import EvenMoreBass from './galleryImages/evenMoreBass.jpg';
import BassBassBASS from './galleryImages/bassBassBASS.jpg';

export default () => {
    const imgFileSources = [Bass, MoreBass, EvenMoreBass, BassBassBASS];
    setImageCount(imgFileSources.length); 

    const imageDisplay = document.querySelector("#imageDisplay");

    imgFileSources.forEach((imgFileSource) => {
        const image = createElement('img', ['object-scale-down', 'w-full', 'h-full', 'shadow-inner', 'shadow-white'],'')
        image.src = imgFileSource;

        imageDisplay.appendChild(image);
    })

    if (!getCurrentIndex()) {
        setCurrentIndex(0);
    }

    const currentIndex = getCurrentIndex();

    const imageNodeList = Array.from(imageDisplay.children);
    imageNodeList.forEach((imageNode) => {
        imageNode.classList.add('hidden');
    })
    imageNodeList[currentIndex].classList.remove('hidden');
}