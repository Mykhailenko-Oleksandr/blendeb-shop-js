import { removeClassCategory } from "./helpers";
import { getCategories, getOneCategory, getProducts } from "./products-api";
import { refs } from "./refs";
import { clearProducts, renderCategories, renderProducts } from "./render-function";

let currentPage = 1;

export async function initHomePage() {
    try {
        const { products, total } = await getProducts(currentPage);
        renderProducts(products);

    } catch (error) {
        console.log(error);
    }

    try {
        const categories = ['all', ...await getCategories()];
        renderCategories(categories);
    } catch (error) {
        console.log(error);
    }
}

export async function handlerCategoriesList(event) {

    if (event.target.tagName !== "BUTTON") {
        return;
    }

    refs.divNotFound.classList.remove('not-found--visible');
    removeClassCategory('categories__btn--active');

    event.target.classList.add('categories__btn--active')

    const textCategory = event.target.textContent;

    if (textCategory === 'all') {
        clearProducts();
        try {
            const { products, total } = await getProducts(currentPage);
            renderProducts(products);
        } catch (error) {
            console.log(error);

        }

        return;
    }


    try {
        const { products, total } = await getOneCategory(textCategory, currentPage);

        if (total === 0) {
            clearProducts();
            refs.divNotFound.classList.add('not-found--visible');
            return;
        }
        clearProducts();
        renderProducts(products);

    } catch (error) {
        console.log(error);

    }

}