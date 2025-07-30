import { loadMoreBtnIsHidden, loadMoreBtnIsVisible, removeClassCategory } from "./helpers";
import { modalClose, modalOpen, } from "./modal";
import { getCategories, getIdProduct, getOneCategory, getProducts, getSearchProduct } from "./products-api";
import { refs } from "./refs";
import { clearProducts, renderCategories, renderModalProduct, renderProducts } from "./render-function";
import { idCartArr, idWishlistArr, setStorageCart, setStorageWishlist } from "./storage";

let currentPage = 1;
let textCategory = 'all';
let isSearch = false;
let searchValue = null;
let idProduct = null;
export let isWishlistPage = false;

export async function initHomePage() {
    isWishlistPage = false;
    refs.navCountWishlist.textContent = idWishlistArr.length;
    refs.navCountCart.textContent = idCartArr.length;

    try {
        const { products, total } = await getProducts(currentPage);
        renderProducts(products);
        if (total > 12) {
            loadMoreBtnIsVisible();
        }
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

export async function initWishlistPage() {
    isWishlistPage = true;
    refs.navCountWishlist.textContent = idWishlistArr.length;
    refs.navCountCart.textContent = idCartArr.length;

    try {
        const fetchWishlist = idWishlistArr.map(async id => {
            return await getIdProduct(id);
        })
        Promise.all(fetchWishlist)
            .then(products => {
                renderProducts(products);
            })
            .catch(error => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export async function handlerCategoriesList(event) {
    currentPage = 1;
    isSearch = false;
    if (event.target.tagName !== "BUTTON") {
        return;
    }

    clearProducts();
    loadMoreBtnIsHidden();
    refs.divNotFound.classList.remove('not-found--visible');
    removeClassCategory('categories__btn--active');
    event.target.classList.add('categories__btn--active');

    textCategory = event.target.textContent;

    if (textCategory === 'all') {
        try {
            const { products, total } = await getProducts(currentPage);
            renderProducts(products);
            if (total > 12) {
                loadMoreBtnIsVisible();
            }
        } catch (error) {
            console.log(error);
        }
        return;
    }

    try {
        const { products, total } = await getOneCategory(textCategory, currentPage);

        if (total === 0) {
            refs.divNotFound.classList.add('not-found--visible');
            return;
        }
        renderProducts(products);
        if (total > 12) {
            loadMoreBtnIsVisible();
        }
    } catch (error) {
        console.log(error);

    }
}

export async function handlerLoadMoreBtn() {
    currentPage++;
    loadMoreBtnIsHidden();
    if (textCategory === 'all') {
        try {
            const { products, total } = await getProducts(currentPage);
            renderProducts(products);
            if (total > 12 * currentPage) {
                loadMoreBtnIsVisible();
            }
        } catch (error) {
            console.log(error);
        }
        return;
    }
    if (isSearch) {
        try {
            const { products, total } = await getSearchProduct(searchValue, currentPage);
            renderProducts(products);
            if (total > 12 * currentPage) {
                loadMoreBtnIsVisible();
            }
        } catch (error) {
            console.log(error);
        }
        return;
    }
    try {
        const { products, total } = await getOneCategory(textCategory, currentPage);
        renderProducts(products);
        if (total > 12 * currentPage) {
            loadMoreBtnIsVisible();
        }
    } catch (error) {
        console.log(error);
    }
}

export async function handlerProductsList(event) {
    if (!event.target.closest('.products__item')) {
        return;
    }
    idProduct = event.target.closest('.products__item').dataset.id;

    try {
        const product = await getIdProduct(idProduct);
        renderModalProduct(product);
        modalOpen(idProduct);
        refs.modalCloseBtn.addEventListener('click', modalClose);
        refs.modalWishlistBtn.addEventListener('click', onModalWishlistBtnClick);
        refs.modalCartBtn.addEventListener('click', onModalCartBtnClick);
    } catch (error) {
        console.log(error);
    }
}

export async function handlerSearchForm(event) {
    event.preventDefault();

    searchValue = event.target.elements.searchValue.value.trim().toLowerCase();
    textCategory = searchValue;
    if (!searchValue) {
        alert('Введіть пошукове слово');
        return;
    }

    currentPage = 1;
    clearProducts();
    loadMoreBtnIsHidden();
    refs.divNotFound.classList.remove('not-found--visible');

    try {
        const { products, total } = await getSearchProduct(searchValue, currentPage);
        if (total === 0) {
            refs.divNotFound.classList.add('not-found--visible');
            return;
        }
        renderProducts(products);
        if (total > 12) {
            isSearch = true;
            loadMoreBtnIsVisible();
        }

    } catch (error) {
        console.log(error);
    }
}

export async function handlerformBtnClearValue() {
    refs.searchForm.elements.searchValue.value = '';
    clearProducts();
    loadMoreBtnIsHidden();
    try {
        const { products, total } = await getProducts(currentPage);
        renderProducts(products);
        if (total > 12) {
            loadMoreBtnIsVisible();
        }
    } catch (error) {
        console.log(error);
    }
}

function onModalWishlistBtnClick() {
    setStorageWishlist(idProduct);
}

function onModalCartBtnClick() {
    setStorageCart(idProduct);
}