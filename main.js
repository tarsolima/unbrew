(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(r=o.key,a=void 0,a=function(t,n){if("object"!==e(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r),"symbol"===e(a)?a:String(a)),o)}var r,a}function i(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}var o=function(){function e(n,i,o){t(this,e),this.openModal=document.querySelector(n),this.closedModal=document.querySelector(i),this.modalContainer=document.querySelector(o),this.startModal=this.startModal.bind(this),this.eventContainer=this.eventContainer.bind(this)}return i(e,[{key:"startModal",value:function(t){t.preventDefault(),this.modalContainer.classList.toggle("active")}},{key:"eventContainer",value:function(t){t.preventDefault(),t.target===this.modalContainer&&this.startModal(t)}},{key:"addEvent",value:function(){this.openModal.addEventListener("click",this.startModal),this.closedModal.addEventListener("click",this.startModal),this.modalContainer.addEventListener("click",this.eventContainer)}},{key:"init",value:function(){return this.openModal&&this.closedModal&&this.eventContainer&&this.addEvent(),this}}]),e}();function r(t,e,n){var i=document.documentElement,o="data-outside";function r(a){t.contains(a.target)||(t.removeAttribute(o),e.forEach((function(t){return i.removeEventListener(t,r)})),n())}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){return i.addEventListener(t,r)}))})),t.setAttribute(o,""))}var a,s,c,l=function(){function e(n,i){t(this,e),this.dropdown=document.querySelectorAll(n),void 0===this.element?this.element=["touchstart","click"]:this.element=i,this.activeClass="active",this.handleDropDown=this.handleDropDown.bind(this)}return i(e,[{key:"handleDropDown",value:function(t){var e=this;t.preventDefault();var n=t.currentTarget;n.classList.add(this.activeClass),r(n,this.element,(function(){return n.classList.remove(e.activeClass)}))}},{key:"addEvent",value:function(){var t=this;this.dropdown.forEach((function(e){t.element.forEach((function(n){return e.addEventListener(n,t.handleDropDown)}))}))}},{key:"init",value:function(){return this.dropdown.length&&this.addEvent(),this}}]),e}(),u=function(){function e(n,i,o){t(this,e),this.menuMobile=document.querySelector(n),this.menuList=document.querySelector(i),void 0===this.element?this.element=["touchstart","click"]:this.element=o,this.activeClass="active",this.startMobile=this.startMobile.bind(this)}return i(e,[{key:"startMobile",value:function(t){var e=this;t.preventDefault(),this.menuMobile.classList.add(this.activeClass),this.menuList.classList.add(this.activeClass),r(this.menuList,this.element,(function(){e.menuMobile.classList.remove(e.activeClass),e.menuList.classList.remove(e.activeClass)}))}},{key:"addEvent",value:function(){var t=this;["touchstart","click"].forEach((function(e){t.menuMobile.addEventListener(e,t.startMobile)}))}},{key:"init",value:function(){return this.menuMobile&&this.menuList&&this.addEvent(),this}}]),e}();new o('[data-abrir="modal"]','[data-modal="fechar"]',"[data-container]").init(),new l("[data-dropdown]").init(),new u('[data-mobile="click"]','[data-mobile="list"]').init(),function(){var t=document.querySelectorAll("[data-scroll]"),e=.7*window.innerHeight;function n(){t.forEach((function(t){t.getBoundingClientRect().top-e<0&&t.classList.add("active")}))}n(),window.addEventListener("scroll",n)}(),s=document.querySelectorAll("[data-numero]"),c=document.querySelector(".fundo-services"),(a=new MutationObserver((function(t){t[0].target.classList.contains("active")&&(a.disconnect(),s.forEach((function(t){var e=+t.innerText,n=Math.floor(e/100),i=0,o=setInterval((function(){i+=n,t.innerText=i,i>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())})))}))).observe(c,{attributes:!0})})();