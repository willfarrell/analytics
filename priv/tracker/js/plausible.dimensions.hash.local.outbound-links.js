!function(){"use strict";var o=window.location,c=window.document,l=c.currentScript,s=l.getAttribute("data-api")||new URL(l.src).origin+"/api/event";function e(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(e){}var i={};i.n=e,i.u=o.href,i.d=l.getAttribute("data-domain"),i.r=c.referrer||null,i.w=window.innerWidth,t&&t.meta&&(i.m=JSON.stringify(t.meta)),t&&t.props&&(i.p=t.props);var n=l.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),a=i.p||{};n.forEach(function(e){var t=e.replace("event-",""),i=l.getAttribute(e);a[t]=a[t]||i}),i.p=a,i.h=1;var r=new XMLHttpRequest;r.open("POST",s,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(i)),r.onreadystatechange=function(){4===r.readyState&&t&&t.callback&&t.callback()}}}function t(e){for(var t=e.target,i="auxclick"===e.type&&2===e.which,n="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==o.host&&((i||n)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!n||(setTimeout(function(){o.href=t.href},150),e.preventDefault()))}c.addEventListener("click",t),c.addEventListener("auxclick",t);var i=window.plausible&&window.plausible.q||[];window.plausible=e;for(var n,a=0;a<i.length;a++)e.apply(this,i[a]);function r(){n=o.pathname,e("pageview")}window.addEventListener("hashchange",r),"prerender"===c.visibilityState?c.addEventListener("visibilitychange",function(){n||"visible"!==c.visibilityState||r()}):r()}();