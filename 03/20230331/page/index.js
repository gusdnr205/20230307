

console.log(document.querySelector('.text-wrap h2').getBoundingClientRect().top+window.pageYOffset);
let posY=document.querySelector('.text-wrap h2').getBoundingClientRect().top+window.pageYOffset;

window.onscroll=function(){
    console.log("스크롤돔")
    console.log(window.scrollY);
    if(posY < window.scrollY){
        document.querySelector('.header').classList.add("isactive");    
    }else{
        document.querySelector('.header').classList.remove("isactive");
        
    }

}