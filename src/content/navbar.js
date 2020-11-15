const content = document.getElementById('content');

const navbar = `<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand">Argentum Restaurant</a>
  <div class="">
    <a href="nav-link" class="px-2">
      Home
    </a>
    <a href="nav-link" class="px-2">
      Menu
    </a>
    <a href="nav-link" class="px-2">
      Contact
    </a>
  </div>
  <div class="div">
    <a href=""></a>
  </div>
</nav>`;

const renderNavbar = () => {
    content.insertAdjacentHTML('afterbegin', navbar);
};

export default renderNavbar;
