// console.log("Hello, this is script.js file.")

const h1=document.querySelector('.thisish1')
// // h1.textContent="Bye World"
// h1.innerHTML="<mark>Bye World</mark>"
// console.log(h1)

const button=document.getElementsByTagName('button')[0]
// button.textContent="Hello"
// console.log(button)
button.addEventListener('click',()=>{
    h1.textContent = "Bye World"
    var newparagraph=document.createElement('p')
    newparagraph.textContent="Learning DOM"
    document.body.appendChild(newparagraph)
})


