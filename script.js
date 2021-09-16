const toggleNav = document.querySelector('.Navbar__toggle');

function classToggle() {
    const navs = document.querySelectorAll('.Navbar__items');
    toggleNav.classList.toggle("Toggle__show");


    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

toggleNav.addEventListener('click', classToggle);