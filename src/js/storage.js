import { refs } from "./refs";
// idProductArr
export const idWishlistArr = JSON.parse(localStorage.getItem('wishlist')) || [];
export const idCartArr = JSON.parse(localStorage.getItem('cart')) || [];

export function setStorageWishlist(id) {
    if (idWishlistArr.includes(id)) {
        const index = idWishlistArr.indexOf(id);
        idWishlistArr.splice(index, 1);
        localStorage.setItem('wishlist', JSON.stringify(idWishlistArr));
        refs.modalWishlistBtn.textContent = 'Add to Wishlist';

        refs.navCountWishlist.textContent = idWishlistArr.length;
        return;
    }

    idWishlistArr.push(id)
    refs.modalWishlistBtn.textContent = 'Remove from Wishlist';

    refs.navCountWishlist.textContent = idWishlistArr.length;

    localStorage.setItem('wishlist', JSON.stringify(idWishlistArr))
}

export function setStorageCart(id) {
    if (idCartArr.includes(id)) {
        const index = idCartArr.indexOf(id);
        idCartArr.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(idCartArr));
        refs.modalCartBtn.textContent = 'Add to cart';

        refs.navCountCart.textContent = idCartArr.length;
        return;
    }

    idCartArr.push(id)
    refs.modalCartBtn.textContent = 'Remove from Cart';

    refs.navCountCart.textContent = idCartArr.length;

    localStorage.setItem('cart', JSON.stringify(idCartArr))
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