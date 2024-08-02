
let myLeads = []

let inputEl = document.getElementById("input-el")

let inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

const containerEl = document.getElementById("container-el")


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)

    renderLeads()
})




function renderLeads() {
    let listitems = ""
    for (let i = 0; i < myLeads.length; i++) {

        listitems += `<li>
        
        <a target='_blank' href='${myLeads[i]}' >${myLeads[i]}</a></li>`
    }

    ulEl.innerHTML =  listitems 
}