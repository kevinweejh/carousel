import { createElement, appendMultipleChildren } from './utils';
import LaunchImageLoader from './launchImageLoader';

export default () => {
    const container = document.getElementById('content');

    const gallery = createElement('div', ['flex', 'h-1/2', 'w-1/2', 'items-center'],'');
    
    const prevBtn = createElement('btn', ['bg-white', 'h-6', 'w-6', 'rounded-full', 'text-black', 'text-center', 'm-3', 'cursor-pointer'], '◁', 'prevBtn');
    const nextBtn = createElement('btn', ['bg-white', 'h-6', 'w-6', 'rounded-full', 'text-black', 'text-center', 'm-3', 'cursor-pointer'], '▷', 'nextBtn');
    const quickNav = createElement('div', ['flex', 'justify-evenly', 'items-center', 'absolute', 'top-3/4', 'left-1/2', 'w-16', 'h-4', 'bg-white/75', '-translate-x-1/2', 'rounded-b-lg'], '', 'quickNav')
    const imageDisplay = createElement('div', ['bg-white/75', 'h-full', 'w-full', 'rounded-lg', 'p-3', 'overflow-hidden'], '', 'imageDisplay');
    
    appendMultipleChildren(gallery, prevBtn, imageDisplay, quickNav, nextBtn);
    container.appendChild(gallery);

    LaunchImageLoader();
}