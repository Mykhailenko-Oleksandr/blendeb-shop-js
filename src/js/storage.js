import { refs } from "./refs";

export const idProductArr = JSON.parse(localStorage.getItem('wishlist')) || [];

export function setStorage(id) {
    if (idProductArr.includes(id)) {
        const index = idProductArr.indexOf(id);
        idProductArr.splice(index, 1);
        localStorage.setItem('wishlist', JSON.stringify(idProductArr));
        refs.modalWishlistBtn.textContent = 'Add to Wishlist';

        refs.navCountWishlist.textContent = idProductArr.length;
        return;
    }

    idProductArr.push(id)
    refs.modalWishlistBtn.textContent = 'Remove from Wishlist';
    console.log(idProductArr.length);

    refs.navCountWishlist.textContent = idProductArr.length;

    localStorage.setItem('wishlist', JSON.stringify(idProductArr))
}

// export function getStorage() {
//     const wishlist = localStorage.getItem('wishlist');
//     const parseWishlist = JSON.parse(wishlist)
//     return parseWishlist
// }




// export function getStorage() {
//     const wishlist = localStorage.getItem('wishlist');
//     return wishlist
// }