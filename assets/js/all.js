const loader =document.querySelector(".isLoading");
const to_top =document.querySelector('.to-top') 
const go_top =document.querySelector('.go-top') 

window.addEventListener('load',()=>{
setTimeout(()=>{
loader.classList.add('loaded');
document.body.classList.remove('overflow-hidden')
},1000)
})

window.addEventListener('scroll', () => {

  if (window.scrollY >= to_top.offsetTop) {
    go_top.classList.add('active');
  } else {
    go_top.classList.remove('active');
  }
}, 200);

go_top.addEventListener('click',()=>{
window.scroll(

{
    top:0,
    behavior:"smooth"
}
)



})










