
let myLeads = ["a","b","c","d"]

let inputEl = document.getElementById("input-el")

let inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

const containerEl = document.getElementById("container-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for(let i= 0; i<myLeads.length;i++){
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li" 
}

containerEl.innerHTML = "<button>" + "Buy!" + "</button>"