window.onload = function(){
    
    //fetch the hamburger
    const hamburgerButton = document.querySelector(".hamburger");
    //fetch the mobile menu
    const mobileMenu = document.querySelector(".mobileNavMenu");
    //when the user presses outside the menu the menu should close
    //TODO : addcode
    
    //make the hamburger button on and off and also toggle the menu items
    hamburgerButton.addEventListener('click', function(){
        hamburgerButton.classList.toggle('isActive');
        mobileMenu.classList.toggle('isActive');
    });


}