const content = document.getElementById("content");

const menu = ` <div class="container-fluid">
      <div class="menu-header">
        <h1>This is our lovely menu!</h1>
      </div>
      <div class="card-columns">
        <div class="card" style="">
          <img
            class="card-img-top"
            src="images/burguer.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">I want it!</a>
          </div>
        </div>
        <div class="card" style="">
          <img
            class="card-img-top"
            src="images/dessert-1.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">I want it!</a>
          </div>
        </div>
        <div class="card" style="">
          <img
            class="card-img-top"
            src="images/pasta.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">I want it!</a>
          </div>
        </div>
        <div class="card" style="">
          <img
            class="card-img-top"
            src="images/pizza.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">I want it!</a>
          </div>
        </div>
        <div class="card" style="">
          <img
            class="card-img-top"
            src="images/milanesa.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">I want it!</a>
          </div>
        </div>
        <div class="card" style="">
          <img
            class="card-img-top"
            src="images/dessert-2.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">I want it!</a>
          </div>
        </div>
        <div class="card" style="">
          <img
            class="card-img-top"
            src="images/dessert-3.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">I want it!</a>
          </div>
        </div>
      </div>
    </div>`;

const renderMenu = () => {
    content.insertAdjacentHTML("beforeend", menu);
};

export default renderMenu;