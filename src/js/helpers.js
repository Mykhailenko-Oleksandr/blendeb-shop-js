
export function removeClassCategory(className) {
    const allBtn = document.querySelectorAll('.categories__btn');

    Array.from(allBtn).forEach(item => {
        item.classList.remove(`${className}`)
        console.dir(item);

    });
}