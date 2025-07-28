import"./assets/styles-JE8YjOlG.js";import{a}from"./assets/vendor-N5iQpiFS.js";function y(t){const e=document.querySelectorAll(".categories__btn");Array.from(e).forEach(o=>{o.classList.remove(`${t}`),console.dir(o)})}const f="https://dummyjson.com/products",l={CATEGORIES:"/category-list",CATEGORY:"/category"},c=12;a.defaults.baseURL=f;async function L(){return(await a(`${l.CATEGORIES}`)).data}async function p(t){const e=(t-1)*c,{data:o}=await a(`?limit=${c}&skip=${e}`);return o}async function $(t,e){const o=(e-1)*c,{data:s}=await a(`${l.CATEGORY}/${t}?limit=${c}&skip=${o}`);return s}const r={categoriesList:document.querySelector(".categories"),productsList:document.querySelector(".products"),divNotFound:document.querySelector(".not-found")};function i(t){const e=t.map(({id:o,thumbnail:s,title:u,brand:g,category:_,price:m})=>`
    <li class="products__item" data-id="${o}">
    <img class="products__image" src="${s}" alt="${u}"/>
    <p class="products__title">${u}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span>${g}</p>
    <p class="products__category">Category: ${_}</p>
    <p class="products__price">Price: $${m}</p>
 </li>
 `).join("");r.productsList.insertAdjacentHTML("beforeend",e)}function b(t){const e=t.map(o=>`
    <li class="categories__item">
   <button class="categories__btn" type="button">${o}</button>
 </li>
    `).join("");r.categoriesList.insertAdjacentHTML("beforeend",e)}function n(){r.productsList.innerHTML=""}let d=1;async function C(){try{const{products:t,total:e}=await p(d);i(t)}catch(t){console.log(t)}try{const t=["all",...await L()];b(t)}catch(t){console.log(t)}}async function E(t){if(t.target.tagName!=="BUTTON")return;r.divNotFound.classList.remove("not-found--visible"),y("categories__btn--active"),t.target.classList.add("categories__btn--active");const e=t.target.textContent;if(e==="all"){n();try{const{products:o,total:s}=await p(d);i(o)}catch(o){console.log(o)}return}try{const{products:o,total:s}=await $(e,d);if(s===0){n(),r.divNotFound.classList.add("not-found--visible");return}n(),i(o)}catch(o){console.log(o)}}document.addEventListener("DOMContentLoaded",C);r.categoriesList.addEventListener("click",E);
//# sourceMappingURL=index.js.map
