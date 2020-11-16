const content = document.getElementById('content');

const navbar = `
<div class='container'>
  <ul class="navbar nav-pills nav-fill list-unstyled mb-0">
    <li class='nav-item'>
      <img class="navbar-brand" src='../src/images/logo.png'>
    </li>
    <li  class='nav-item'>
      <a href="#" class="nav-link active px-4 ">Home</a>
    </li>
    <li class='nav-item'>
      <a href="#" class="nav-link px-4">Menu</a>
    </li>
    <li class='nav-item'>
      <a href="#" class="nav-link px-4">Contact</a>
    </li> 
  </ul>
</div>`;

const renderNavbar = () => {
  content.insertAdjacentHTML('beforebegin', navbar);
};

export default renderNavbar;
