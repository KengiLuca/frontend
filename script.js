const fruitForm = document.querySelector("#inputSection form")
console.log(fruitForm)

fruitForm.addEventListener("submit", extractFruit)

function extractFruit(e){
    e.preventDefault() // Prevent the page from refreshing instantly
    console.log(e) // console logging the form
    addFruit(e.target[0].value) // Adding a list in the fruit section with the value of the fruit input name
    e.target[0].value = "" // Resetting the form so can add more fruits
}

const fruitList = document.querySelector("#fruitSection ul")
function addFruit(fruit){
    if (!fruit){
        console.log("Invalid fruit")
    } else {
    const li = document.createElement("li")
    li.addEventListener("click", removeFruit, {once:true})
    li.textContent = fruit
    fruitList.appendChild(li)
    }
}
function removeFruit(e){
    e.target.remove()
}

