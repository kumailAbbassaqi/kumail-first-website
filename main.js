//  change navbar style on scroll


window.addEventListener('scroll' , () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
})
 

//hide the faqs answer and also to show

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open')    

        //icon change
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = 'uil uil-plus';
        }
    } )
})

//nav hide and show 
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click' , () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";

})

//close nav menu 
const closeNav = () => {   
     menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click' , closeNav);

// theme changer 

var icon = document.querySelector("#icon");

icon.onclick = function(){
    document.body.classList.toggle("theme");
    if(document.body.classList.contains("theme")) {
        icon.src = "images/tm1.jpg";
    }
        else{
            icon.src = "images/tm2.jpg";
        }
   
}

