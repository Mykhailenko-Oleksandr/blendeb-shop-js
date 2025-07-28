import { getCategories, getProducts } from "./products-api";
import { renderCategories, renderProducts } from "./render-function";

let currentPage = 1;

export async function initHomePage() {
    try {
        const { products, total } = await getProducts(currentPage);
        renderProducts(products);

    } catch (error) {
        console.log(error);
    }

    try {
        const categories = ['All', ...await getCategories()];
        renderCategories(categories);
    } catch (error) {
        console.log(error);
    }
}