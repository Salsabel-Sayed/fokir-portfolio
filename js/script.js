// scroll sections
window.addEventListener('scroll',function(){
    const header = document.querySelector('header');

  
    if(window.scrollY >= 200){
        header.classList.add('scrolled');

    }else{
        header.classList.remove('scrolled');
    }
})

// typed.js 
var typed = new Typed('.type',{
    strings:['developer','designer','freelancer','photographer'],
    typeSpeed:50,
    backSpeed:50,
    looped:true,
});


// counting number

$(document).ready(function(){
    $('.counter').counterUp({
        delay:50,
        time:1500
    })
})