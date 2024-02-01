(()=>{"use strict";const e=(e,t,n,a=null)=>{const o=document.createElement(e);return o.classList.add(...t),o.innerText=n,a&&(o.id=a),o},t=()=>{(()=>{const t=e("div",["flex","flex-col","bg-black/50","w-1/2","mx-auto"],"","homeTab"),n=e("h1",["text-3xl","font-semibold","text-white","p-6","text-center","w-max","flex","mx-auto"],"Restaurant de la Victoire");t.appendChild(n);const a=e("p",["text-lg","text-white","text-center","w-max","flex","mx-auto"],"Best restaurant from here to Mars and back");t.appendChild(a);const o=e("div",["p-6","text-2xl","font-semibold","text-white","text-center"],"Opening Hours","openingHours"),d={Sunday:"6AM - 10PM",Monday:"6AM - 6PM",Tuesday:"Closed",Wednesday:"6AM - 6PM",Thursday:"6AM - 6PM",Friday:"6AM - 6PM",Saturday:"6AM - 11PM"};for(const t in d){const n=e("p",["text-base","text-white","font-normal"],`${t}: ${d[t]}`);o.appendChild(n)}t.appendChild(o);const i=e("div",["p-6","text-2xl","font-semibold","text-white","text-center"],"Address","address"),s=e("p",["text-base","text-white","font-normal"],"12 Gentle Rain Dr., Marana, AZ");i.appendChild(s),t.appendChild(i),document.getElementById("tabContent").appendChild(t)})()},n=()=>{(()=>{const t=e("div",["flex","flex-col","w-1/2","text-center","mx-auto"],"","menuTab");["Starters","Mains","Desserts","Beverages"].forEach((n=>{const a=e("div",["bg-black/50","my-6","text-white","font-semibold","p-3","text-2xl"],n,n);t.appendChild(a)})),document.getElementById("tabContent").appendChild(t),[{name:"A Good Cake",section:"Desserts",price:6.9},{name:"The Goodest Cake",section:"Desserts",price:26.9},{name:"Great Pasta",section:"Mains",price:6.9},{name:"The Maddest Pasta on Neptune",section:"Mains",price:26.9},{name:"So-so Coffee",section:"Beverages",price:6.9},{name:"The - wow that was good - coffee",section:"Beverages",price:26.9},{name:"Soggy Fries",section:"Starters",price:6.9},{name:"Rock Hard Fries",section:"Starters",price:26.9}].forEach((t=>{const n=e("p",["text-white","text-base"],`${t.name}`),a=e("p",["text-white","font-normal","text-base"],`Price: ${t.price}`),o=e("div",["m-3"],"");o.appendChild(n),o.appendChild(a),document.getElementById(t.section).appendChild(o)}))})()},a=()=>{(()=>{const t=e("div",["flex","flex-col","my-6"],"","contactTab");[{name:"Steve-O",title:"Chef Extraordinaire","e-mail":"steve-o@restaurant.dlv"},{name:"Mary-O",title:"Managerial Expertise Personified","e-mail":"mary-o@restaurant.dlv"},{name:"Jimb-O",title:"The Waiter that Waits","e-mail":"jimb-o@restaurant.dlv"}].forEach((n=>{const a=e("div",["w-1/2","bg-black/50","text-white","mx-auto","text-center","font-semibold","m-3","p-3","text-2xl"],n.name),o=e("p",["font-normal","text-base","italic"],n.title),d=e("p",["font-normal","text-base"],n["e-mail"]);d.innerHTML=`<a href="mailto:${n["e-mail"]}">${n["e-mail"]}</a>`,a.appendChild(o),a.appendChild(d),t.appendChild(a)})),document.getElementById("tabContent").appendChild(t)})()};document.getElementById("content").classList.add("bg-[url('./restaurant.jpg')]","h-screen","flex","flex-col"),document.createElement("div"),(()=>{const e=document.createElement("div");e.classList.add("grid","grid-cols-3","w-1/3","mx-auto","p-6"),((e,t)=>{["Home","Menu","Contact"].forEach((t=>{const n=(e=>{const t=document.createElement("button");return t.classList.add("text-2xl","text-white"),t.innerText=e,t.id=e.toLowerCase()+"TabBtn",t})(t);e.appendChild(n)}))})(e),document.getElementById("content").appendChild(e)})();const{tabContentDiv:o}=((()=>{const e=document.createElement("div");e.classList.add("w-2/3","mx-auto"),e.id="tabContent",document.getElementById("content").appendChild(e)})(),{tabContentDiv:document.getElementById("tabContent")});t(),(()=>{const e=document.querySelectorAll('[id$="Btn"]'),d={homeTabBtn:t,menuTabBtn:n,contactTabBtn:a};e.forEach((e=>{e.addEventListener("click",(()=>{o.innerHTML="";const t=d[e.id];t?t():console.error("No matching module function found for button:",e.id)}))}))})()})();