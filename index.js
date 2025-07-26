import"./assets/styles-JE8YjOlG.js";import{a}from"./assets/vendor-N5iQpiFS.js";const i="https://dummyjson.com/products",r=12;a.defaults.baseURL=i;async function u(t){const s=(t-1)*r,{data:c}=await a(`?limit=${r}&skip=${s}`);return c}const l={productsList:document.querySelector(".products")};function _(t){const s=t.map(({id:c,thumbnail:n,title:o,brand:e,category:d,price:p})=>`
    <li class="products__item" data-id="${c}">
    <img class="products__image" src="${n}" alt="${o}"/>
    <p class="products__title">${o}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span>${e}</p>
    <p class="products__category">Category: ${d}</p>
    <p class="products__price">Price: $${p}</p>
 </li>
 `).join("");l.productsList.insertAdjacentHTML("beforeend",s)}let m=1;async function $(){try{const{products:t,total:s}=await u(m);_(t)}catch(t){console.log(t)}}document.addEventListener("DOMContentLoaded",$);
//# sourceMappingURL=index.js.map
