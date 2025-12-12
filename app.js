const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle("active")

    console.log("Hello World")
})

// Function to make Product move

const logos = document.querySelector(".rotating-product-track").cloneNode(true)
document.querySelector(".rotating-product").appendChild(logos)