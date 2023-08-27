let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.Navbar');


menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll=()=>{
    let header=document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY >100);
};

const menuItems = document.querySelectorAll('.Menu_Item a');

menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Remove 'active' class from all other links
        menuItems.forEach(link => link.classList.remove('active'));
        
        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});





