(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function v(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=v(e);fetch(e.href,t)}})();const m=document.querySelector(".nav"),o=document.querySelector(".menu__button"),f=document.querySelector(".burger"),l=document.querySelector(".menu-nav"),u=window.innerWidth,y=document.querySelector(".tel"),r=document.querySelector(".menu-nav__child"),h=document.querySelector(".nav__active"),a=document.querySelector(".nav__active-child"),c=document.querySelector(".menu-nav__child-second"),L=document.querySelector(".header__block");u<=768?(o.classList.remove("visually-hidden"),l.classList.add("visually-hidden"),o.addEventListener("click",function(n){f.classList.add("menu-burger"),l.classList.remove("visually-hidden"),r.classList.remove("visually-hidden"),c.classList.remove("visually-hidden")})):u<=386?y.classList.add("visually-hidden"):(m.classList.remove("visually-hidden"),o.classList.add("visually-hidden"));h.addEventListener("mouseover",function(n){r.classList.remove("visually-hidden")});a.addEventListener("mouseover",function(n){c.classList.remove("visually-hidden")});a.addEventListener("mouseout",function(n){c.classList.add("visually-hidden")});L.addEventListener("mouseout",function(n){r.classList.add("visually-hidden")});
