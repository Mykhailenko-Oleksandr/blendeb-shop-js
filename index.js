import"./assets/styles-JE8YjOlG.js";import{a as e}from"./assets/vendor-N5iQpiFS.js";const p="https://dummyjson.com/products",l={CATEGORIES:"/category-list"},r=12;e.defaults.baseURL=p;async function _(){return(await e(`${l.CATEGORIES}`)).data}async function g(t){const s=(t-1)*r,{data:o}=await e(`?limit=${r}&skip=${s}`);return o}const a={categoriesList:document.querySelector(".categories"),productsList:document.querySelector(".products")};function m(t){const s=t.map(({id:o,thumbnail:n,title:c,brand:i,category:d,price:u})=>`
    <li class="products__item" data-id="${o}">
    <img class="products__image" src="${n}" alt="${c}"/>
    <p class="products__title">${c}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span>${i}</p>
    <p class="products__category">Category: ${d}</p>
    <p class="products__price">Price: $${u}</p>
 </li>
 `).join("");a.productsList.insertAdjacentHTML("beforeend",s)}function y(t){const s=t.map(o=>`
    <li class="categories__item">
   <button class="categories__btn" type="button">${o}</button>
 </li>
    `).join("");a.categoriesList.insertAdjacentHTML("beforeend",s)}let $=1;async function b(){try{const{products:t,total:s}=await g($);m(t)}catch(t){console.log(t)}try{const t=["All",...await _()];y(t)}catch(t){console.log(t)}}document.addEventListener("DOMContentLoaded",b);
//# sourceMappingURL=index.js.map
