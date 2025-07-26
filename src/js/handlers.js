import { getProducts } from "./products-api";
import { renderProducts } from "./render-function";

let currentPage = 1;

export async function initHomePage() {
    try {
        const { products, total } = await getProducts(currentPage);
        renderProducts(products);

    } catch (error) {
        console.log(error);
    }
}