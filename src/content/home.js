const content = document.getElementById('content');

const home =`<div class="jumbotron-fluid jumbotron">
      <div class="container-fluid main-text">
        <h1 class="display-5">
          Welcome to our Argentinian typically restaurant
        </h1>
        <p class="lead">Here you will deleite with our classic best dishes.</p>
      </div>
    </div>`;

const renderHome = () => {
    content.insertAdjacentHTML('afterbegin', home);
};

export default renderHome;
