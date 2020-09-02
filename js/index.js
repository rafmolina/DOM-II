// Your code goes here
//console.log('hello')

// top image 
const busText = document.querySelector(".logo-heading");
console.log(busText)
window.addEventListener('mouseover', () => {
    busText.style.color = 'orange';
})

const funBus = document.querySelector(".intro h2");
console.log(funBus)
document.addEventListener('keydown', (event) => {
    if(event.key === "a"){
    funBus.style.color = 'green';
    }
})

const travelText = document.querySelector(".intro p");
console.log(travelText)
document.addEventListener('click', (event) =>{
    if (event.target === travelText){
    travelText.style.transform = "scale(1.5)"
    }
})

//const contentText = document.querySelectorAll(".text-content p");
//console.log(contentText)
//window.addEventListener('wheel', () => {
   //contentText.style.transform = 'scale(.7)';
    
//})

const legGo = document.querySelector(".text-content h2")
console.log(legGo)
legGo.addEventListener('click', () => {
    legGo.textContent ='';
    window.setTimeout(() => {
        window.location.reload(true);
    }, 200);
  });

const destination = document.querySelectorAll(".btn");
console.log(destination)
destination.addEventListener('focus', (event) => {
  event.target.style.color = 'pink';   
});