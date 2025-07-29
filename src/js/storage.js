export function setStorage(value) {
    localStorage.setItem('wishlist', JSON.stringify(value))
}

// export function getStorage() {
//     const wishlist = localStorage.getItem('wishlist');
//     const parseWishlist = JSON.parse(wishlist)
//     return parseWishlist
// }




export function getStorage() {
    const wishlist = localStorage.getItem('wishlist');
    return wishlist
}