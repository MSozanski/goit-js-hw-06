"use strict"
const numberOfItem = document.querySelectorAll('.item')

const list = document.querySelector('.item')

console.log(list)
console.log(list.childNodes[3].children)

console.log(`Number of categories: ${numberOfItem.length}

Category: ${list.firstElementChild.textContent}
Elements: ${list.childNodes[3].children.length}

Category: ${list.nextElementSibling.childNodes[1].textContent}
Elements: ${list.nextElementSibling.childNodes[3].children.length}

Category: ${list.nextElementSibling.nextElementSibling.childNodes[1].textContent}
Elements: ${list.nextElementSibling.nextElementSibling.childNodes[3].children.length}
`)




// const numberOfItem = document.querySelectorAll('.item')
// console.log(`Number of categories: ${numberOfItem.length}`)

// const list= document.querySelector('#categories')



// console.log(list)
// console.log(document.querySelector('#categories').lastChild.textContent)




// const list= document.querySelector('.item')

// console.log(`Number of categories: ${numberOfItem.length}

// Category: ${list.firstElementChild.textContent}
// Elements: ${list.querySelectorAll('li').length}

// Category: ${list.nextSibling.nextSibling.textContent}
// Elements: ${list.querySelectorAll('li').length}

// Category: ${list.textContent}
// Elements: ${list.querySelectorAll('li').length}
// `)