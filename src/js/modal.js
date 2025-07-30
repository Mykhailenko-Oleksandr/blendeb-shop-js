import { refs } from "./refs";
import { idProductArr } from "./storage";

export function modalClose() {
    refs.modal.classList.remove('modal--is-open');
}

export function modalOpen(id) {
    textWishlistBtn(id);
    refs.modal.classList.add('modal--is-open');
}

function textWishlistBtn(id) {
    idProductArr.includes(id) ?
        refs.modalWishlistBtn.textContent = 'Remove from Wishlist' :
        refs.modalWishlistBtn.textContent = 'Add to Wishlist';
}
