import { handlerBuyProductsBtn, handlerProductsList, initCartPage } from "./js/handlers";
import { refs } from "./js/refs";


document.addEventListener('DOMContentLoaded', initCartPage);
refs.productsList.addEventListener('click', handlerProductsList);
refs.buyProductsBtn.addEventListener('click', handlerBuyProductsBtn);