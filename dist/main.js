(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{eW:()=>r,H9:()=>d});const n=[{name:"1"},{name:"2"},{name:"3"},{name:"3"}];localStorage.setItem("todos",JSON.stringify(n));const o=JSON.parse(localStorage.getItem("todos"));function r(){o.push({name:"5"})}function d(e){delete n[e]}!function(){const e=document.createElement("button");e.innerHTML="<h1>+</h1>",e.addEventListener("click",r());const n=document.querySelector("#todoPage");n.appendChild(e);for(let e=0;e<t.userTodos.length;e++)if(null!=t.userTodos[e]){const o=document.createElement("div"),r=t.userTodos[e].name;o.classList.add("todo-div"),o.innerHTML=`<h2>${r}</h2>`;const c=document.createElement("button");c.innerHTML="X",c.addEventListener("click",(function(){const e=c.parentElement;n.removeChild(e)})),c.addEventListener("click",d(e)),o.appendChild(c),n.appendChild(o)}}()})();