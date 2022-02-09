// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "D Sonowal" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
//Total no of cookie
let totalCookies = 0

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')

// selecting the element with an id of add-cc
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')

// selecting the element with an id of add-sugar
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

const displayGbQty = document.querySelector('#qty-gb')
const displayCcQty = document.querySelector('#qty-cc')
const displaySugarQty = document.querySelector('#qty-sugar')

const displayTotQty = document.querySelector('#qty-total')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {    
// HINT: You can delete this console.log after you no longer need it!
//console.log('Gingerbread + button was clicked!')
//console.log(gb)
// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
gb ++;
    totalCookies ++
  displayGbQty.textContent = gb
  displayTotQty.textContent = totalCookies
})

gbMinusBtn.addEventListener('click', function(){
    if(gb >0 ){
        gb --
        totalCookies --
    }
    displayGbQty.textContent = gb
  displayTotQty.textContent = totalCookies
})
// TODO: Hook up event listeners for the rest of the buttons
// CC Button Clicks
ccPlusBtn.addEventListener ('click', function(){
    cc ++ ;
    totalCookies ++
    displayCcQty.textContent = cc
  displayTotQty.textContent = totalCookies
})
ccMinusBtn.addEventListener('click', function(){
    if (cc >0){
        cc --;
        totalCookies --
    }
    displayCcQty.textContent = cc
    displayTotQty.textContent = totalCookies
})

// Sugar Button Clicks
sugarPlusBtn.addEventListener ('click', function(){
    sugar ++ ;
    totalCookies ++
    displaySugarQty.textContent = sugar
  displayTotQty.textContent = totalCookies
})
sugarMinusBtn.addEventListener('click', function(){
    if (sugar >0){
        sugar --;
        totalCookies --
    }
    displaySugarQty.textContent = sugar
    displayTotQty.textContent = totalCookies
})