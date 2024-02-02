let currentIndex, imgCount;

const getCurrentIndex = () => currentIndex;

const setCurrentIndex = (index) => {
    currentIndex = index;
    if (index > (imgCount - 1)) {
        currentIndex = index - imgCount;
    }
    if (index < 0) {
        currentIndex = imgCount - 1;
    }
    
}

const getImageCount = () => imgCount;

const setImageCount = (fileCount) => {
    imgCount = fileCount;
}

export { getCurrentIndex, setCurrentIndex, getImageCount, setImageCount };