// Active Class for Navigation

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(
    (links) => {
        links.addEventListener('click', () => {
            navLinks.forEach(
                (linksR) => {
                    linksR.classList.remove('active');
                }
            )
            links.classList.add('active');
        })
    }
)

// Hamburger Menu

const hamBurgerMenu = document.querySelector(".bars");
const navList = document.querySelector(".nav-list");
const closeHamburgerMenu = document.querySelector(".close-link");

hamBurgerMenu.addEventListener('click', () => {
    navList.classList.add('active');
    document.body.style.overflowY = "hidden"; 
})

closeHamburgerMenu.addEventListener('click', () => {
    navList.classList.remove('active');
    document.body.style.overflowY = "scroll"; 
})

navLinks.forEach(
    (links) => {
        links.addEventListener('click', () => {
            navList.classList.remove('active');
            document.body.style.overflowY = "scroll"; 
        })
    }
)

// Change Image on Click

const mainImg = document.querySelector(".main-image");
const smallImg = document.querySelectorAll('.small-image');
console.log(smallImg)

smallImg.forEach(
    (sImg) => {
        sImg.addEventListener('click', () => {
            mainImg.src = sImg.src;
            console.log(sImg.src);
        })
    }
)