import { refs } from "./refs";

export function removeClassCategory(className) {
    const allBtn = document.querySelectorAll('.categories__btn');

    Array.from(allBtn).forEach(item => {
        item.classList.remove(`${className}`)
    });
}

export function loadMoreBtnIsVisible() {
    refs.loadMoreBtn.classList.remove('is-hidden');
}

export function loadMoreBtnIsHidden() {
    refs.loadMoreBtn.classList.add('is-hidden');
}