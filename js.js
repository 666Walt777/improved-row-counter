// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")
let cleanEl = document.getElementById("clean-el")
function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let contains = count + " - "    
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += contains
    // NB: Make sure to not delete the existing content of the paragraph
    countEl.innerText = 0
    count = 0
    
}
function clean(){
    saveEl.textContent = ""
    countEl.innerText = 0
    count = 0
}

