import{S as u,i as n}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();function h(i){return imgGallery.innerHTML="",i.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href ="${e.largeImageURL}">
      <img class="gallery-image"
      width="1280"
      height="152"
      src="${e.webformatURL}"
      data-source="${e.largeImageURL}"
      alt="${e.tags}" />
      </a>
      <ul class="gallery-description">
      <li>
      <h3>Likes</h3><p>${e.likes}</p>
      </li>
      <li>
      <h3>Views</h3><p>${e.views}</p>
      </li>
      <li>
      <h3>Comments</h3><p>${e.comments}</p>
      </li>
      <li>
      <h3>Downloads</h3><p>${e.downloads}</p>
      </li>
      </ul>
      </li>`).join("")}const l=document.querySelector(".gallery"),f=document.querySelector(".form"),m={captionsData:"alt"};let c=new u(".gallery a",m);c.on("show.simplelightbox",function(){});f.addEventListener("submit",i=>{i.preventDefault();const e=i.currentTarget.elements.image.value.trim();l.innerHTML='<div class="loader"></div>',p(e).then(s=>{const o=h(s.hits);l.innerHTML=o,c.refresh(),s.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(s=>{n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})})});function p(i){const e="https://pixabay.com/api/",s=new URLSearchParams({key:"44119919-a0aa1893dc0c72e99b6a5bc11",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${e}?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}
//# sourceMappingURL=commonHelpers.js.map
