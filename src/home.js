import { handlerCategoriesList, initHomePage } from "./js/handlers";
import { refs } from "./js/refs";

document.addEventListener('DOMContentLoaded', initHomePage);

refs.categoriesList.addEventListener('click', handlerCategoriesList);
