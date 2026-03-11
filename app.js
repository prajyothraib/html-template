function openModal(){

document.getElementById("modalBox").style.display="block"

}

function closeModal(){

document.getElementById("modalBox").style.display="none"

}

window.onclick=function(event){

const modal=document.getElementById("modalBox")

if(event.target==modal){

modal.style.display="none"

}

}

function openTab(evt,tabName){

let tabcontent=document.getElementsByClassName("tabcontent")

for(let i=0;i<tabcontent.length;i++){

tabcontent[i].classList.remove("active")

}

let tablinks=document.getElementsByClassName("tablink")

for(let i=0;i<tablinks.length;i++){

tablinks[i].classList.remove("active")

}

document.getElementById(tabName).classList.add("active")

evt.currentTarget.classList.add("active")

}

function showAlert(message,type){

let alert=document.createElement("div")

alert.className="alert "+type

alert.innerText=message

document.body.prepend(alert)

setTimeout(()=>{

alert.remove()

},3000)

}

function darkMode(){

document.body.classList.toggle("dark")

}

function createCard(title,text){

let card=document.createElement("div")

card.className="card"

card.innerHTML=

`

<h3>${title}</h3>

<p>${text}</p>

<button class="btn primary">View</button>

`

document.querySelector(".card-container").appendChild(card)

}

for(let i=1;i<=10;i++){

createCard("Dynamic Card "+i,"Generated using JavaScript")

}