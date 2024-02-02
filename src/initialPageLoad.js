import LoadCarousel from './loadCarousel';

export default () => {
    const container = document.getElementById('content');
    container.classList.add("bg-[url('./gallery.jpg')]", 'h-screen','bg-cover', 'flex', 'flex-col', 'items-center', 'justify-center');

    LoadCarousel();
}
