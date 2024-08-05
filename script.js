
let myLeads = []


const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

let tabBtn = document.getElementById("tab-btn")

const deleteBtn = document.getElementById("delete-btn")

const ulEl = document.getElementById("ul-el")

const containerEl = document.getElementById("container-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        renderLeads(myLeads)
    }) 
})



inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads(myLeads)
    
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
} )




function renderLeads(leads) {
    let listitems = ""
    for (let i = 0; i < leads.length; i++) {

        listitems += `<li>
        <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
        </a>
                </li>`
    }

    ulEl.innerHTML = listitems
}