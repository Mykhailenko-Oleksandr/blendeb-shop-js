import { handlerProductsList, handlerScroll, initWishlistPage } from "./js/handlers";
import { refs } from "./js/refs";


document.addEventListener('DOMContentLoaded', initWishlistPage);
refs.productsList.addEventListener('click', handlerProductsList);

window.addEventListener('scroll', handlerScroll)
