const loader =document.querySelector(".isLoading");
console.log(loader);
window.addEventListener('load',()=>{

setTimeout(()=>{

loader.classList.add('loaded');
document.body.classList.remove('overflow-hidden')

},1000)
})
