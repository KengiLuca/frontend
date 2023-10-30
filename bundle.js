(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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


},{}]},{},[1]);
