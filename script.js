
"use strict";
/*----------------------------------------
Reusable Variables -----------------------
------------------------------------------
*/
const navBar =document.querySelector('nav');
const navBarToggle = document.querySelector('.parent-burger');
const BurgerMenue = document.querySelector('.burger-menu');
const crossBAr =document.querySelector('.cross')



window.addEventListener('scroll',function(){
    if(this.window.scrollY > 0){
        navBar.style.borderBottom= '1px solid #514f4d';
        
    }else{
        navBar.style.borderBottom = 'none';
        navBar.style.background = 'tranparent';
    }
})

/*----------------------------------------
Add Event lisner--------------------------
------------------------------------------
*/

navBarToggle.addEventListener('click',function(){
    
   BurgerMenue .classList.toggle("hidden");

})
crossBAr.addEventListener('click',function(){
    BurgerMenue.classList.toggle("hidden");
})