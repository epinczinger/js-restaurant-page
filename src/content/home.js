const content = document.getElementById('content');

const home = `<div class="jumbotron-fluid jumbotron">
      <div class="container-fluid main-text">
        <h1 class="display-5" style='font-weight: bold; color: white; text-shadow: -3px 0px 6px rgba(200,53,53,1);'>
          Welcome to our Argentinian typically restaurant
        </h1>
        <p class="lead" style='font-weight: bold; color: white; text-shadow: -3px 0px 6px rgba(200,53,53,1);'>Here you will deleite with our classic best dishes.</p>
      </div>
    </div>`;

const renderHome = () => {
    content.insertAdjacentHTML('afterbegin', home);
};

export default renderHome;
