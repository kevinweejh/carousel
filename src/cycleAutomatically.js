import ScrollNext from './scrollNext';

export default () => {
    const INTERVAL = 2000;
    let autoScrollIntervalId;

    const startAutoScroll = () => {
        autoScrollIntervalId = setInterval(ScrollNext, INTERVAL);
    }

    startAutoScroll();

}