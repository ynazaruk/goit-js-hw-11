import{S as u,i as a}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function h(i){return l.innerHTML="",i.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href ="${e.largeImageURL}">
      <img class="gallery-image"
      width="360"
      height="200"
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
      </li>`).join("")}const p=document.getElementById("search-input"),l=document.querySelector(".gallery"),f=document.querySelector(".form"),m={captionsData:"alt"};let c=new u(".gallery a",m);c.on("show.simplelightbox",function(){});f.addEventListener("submit",i=>{i.preventDefault();const e=p.value.trim();if(e==="")return a.error({message:"Please try again! Write something.",position:"topRight"});l.innerHTML='<div class="loader"></div>',g(e).then(s=>{const o=h(s.hits);l.innerHTML=o,c.refresh(),s.hits.length===0&&a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(s=>{a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})})});function g(i){const e="https://pixabay.com/api/",s=new URLSearchParams({key:"44119919-a0aa1893dc0c72e99b6a5bc11",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${e}?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}
//# sourceMappingURL=commonHelpers.js.map
