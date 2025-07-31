import { handlerBuyProductsBtn, handlerProductsList, handlerScroll, initCartPage } from "./js/handlers";
import { refs } from "./js/refs";


document.addEventListener('DOMContentLoaded', initCartPage);
refs.productsList.addEventListener('click', handlerProductsList);
refs.buyProductsBtn.addEventListener('click', handlerBuyProductsBtn);

window.addEventListener('scroll', handlerScroll)
