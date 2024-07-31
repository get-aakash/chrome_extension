
let myLeads = ["a","b","c","d"]

let inputEl = document.getElementById("input-el")

let inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for(let i= 0; i<myLeads.length;i++){
    ulEl.textContent += myLeads[i] 
}
