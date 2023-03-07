// nav bar black
 
window.addEventListener('scroll',function(){
    var nav=document.getElementById('navbar')
    if(window.scrollY>80){
        nav.classList.add('nav-chang')
    }else{
        nav.classList.remove('nav-chang')
    }
})