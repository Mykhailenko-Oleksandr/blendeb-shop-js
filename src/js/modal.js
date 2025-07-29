import { refs } from "./refs";
import { setStorage } from "./storage";

export function modalClose() {
    refs.modal.classList.remove('modal--is-open');
}

export function modalOpen() {
    refs.modal.classList.add('modal--is-open');
}

// export function onModalWishlistBtnClick(event) {
//     refs.modalWishlistBtn.textContent = 'Remove from Wishlist';
//     console.dir(event.target.closest('.modal__content').children['.modal-product']);


//     // setStorage()
// }