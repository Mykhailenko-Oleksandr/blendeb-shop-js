import { handlerCategoriesList, handlerFormBtnClearValue, handlerLoadMoreBtn, handlerProductsList, handlerSearchForm, initHomePage } from "./js/handlers";
import { refs } from "./js/refs";

document.addEventListener('DOMContentLoaded', initHomePage);

refs.categoriesList.addEventListener('click', handlerCategoriesList);
refs.loadMoreBtn.addEventListener('click', handlerLoadMoreBtn);
refs.productsList.addEventListener('click', handlerProductsList);
refs.searchForm.addEventListener('submit', handlerSearchForm)
refs.formBtnClearValue.addEventListener('click', handlerFormBtnClearValue)







