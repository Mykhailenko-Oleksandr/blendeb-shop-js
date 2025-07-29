import { loadMoreBtnIsHidden, loadMoreBtnIsVisible, removeClassCategory } from "./helpers";
import { modalClose, modalOpen, } from "./modal";
import { getCategories, getIdProduct, getOneCategory, getProducts, getSearchProduct } from "./products-api";
import { refs } from "./refs";
import { clearProducts, renderCategories, renderModalProduct, renderProducts } from "./render-function";
import { getStorage, setStorage } from "./storage";

let currentPage = 1;
let textCategory = 'all';
let isSearch = false;
let searchValue = null;
let idProduct = null;


export async function initHomePage() {
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
    event.target.classList.add('categories__btn--active')

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
    idProduct = event.target.closest('.products__item').dataset.id

    try {
        const product = await getIdProduct(idProduct);
        renderModalProduct(product);
        modalOpen();
        refs.modalCloseBtn.addEventListener('click', modalClose);
        refs.modalWishlistBtn.addEventListener('click', onModalWishlistBtnClick)
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

// function onModalWishlistBtnClick(event) {
//     refs.modalWishlistBtn.textContent = 'Remove from Wishlist';
//     const idProductArr = [];

//     console.log(getStorage());
//     const qqqq = getStorage()
//     console.log('qqqq', qqqq);

//     idProductArr.push(idProduct);


//     console.log(idProductArr);

//     setStorage(idProductArr);

// }