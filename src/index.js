import './style.scss';
import renderContact from './content/contact';
import renderHome from './content/home';
import renderNavbar from "./content/navbar";
import renderMenu from './content/menu';

renderNavbar();
renderHome();

const navLinks = document.querySelectorAll('.nav-link');
const content = document.getElementById('content');

const renderPage = (location, page) => {
  location.innerHTML = "";
  page();
};

const removeActive = () => {
    navLinks.forEach((link) => {
        if (link.classList.contains('active')) {
            link.classList.remove('active');
        }
    });
};

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        if (event.target.textContent === 'Home') {
            removeActive();
            event.target.classList.add('active');
            renderPage(content, renderHome);
        }

        if (event.target.textContent === 'Menu') {
            removeActive();
            event.target.classList.add('active');
            renderPage(content, renderMenu);
        }

        if (event.target.textContent === 'Contact') {
            removeActive();
            event.target.classList.add('active');
            renderPage(content, renderContact);
        }
    });
});
