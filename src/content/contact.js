const content = document.getElementById('content');

const contact = `<div class="container-fluid contact-detail">
      <div class="d-md-none">
        <div class="card text-center" style="">
          <div class="card-body">
            <h5 class="card-title">We are waiting for you!</h5>
            <p class="card-text">
              Come and have a taste of our chefs creations
            </p>
            <a
              href="https://www.google.com.ar/maps/place/Caba%C3%B1as+del+Saladero/@-36.418792,-56.9756536,14z/data=!4m8!3m7!1s0x959bffdee8d8ffbd:0xc54f454aef3edb4c!5m2!4m1!1i2!8m2!3d-36.4173157!4d-56.9467287"
              class="btn btn-primary"
              target="_blank"
              >See direction</a
            >
          </div>
        </div>
      </div>
      <div class="row d-none d-md-flex">
        <div class="col-12 text-center bg-light py-3">
          <h2>
            <svg
              class="bi bi-map"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M15.817.613A.5.5 0 0 1 16 1v13a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 14.51l-4.902.98A.5.5 0 0 1 0 15V2a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0l4.902.98 4.902-.98a.5.5 0 0 1 .415.103zM10 2.41l-4-.8v11.98l4 .8V2.41zm1 11.98l4-.8V1.61l-4 .8v11.98zm-6-.8V1.61l-4 .8v11.98l4-.8z"
              />
            </svg>
            Here we are, and we are waiting for you!
          </h2>
        </div>
        <div class="mapouter col-12 mx-auto">
          <div class="gmap_canvas mx-auto">
            <iframe
              width="740"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=cabanas%20del%20saladero&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe
            ><a href="https://2torrentz.net">torrent</a>
          </div>
        </div>
      </div>
    </div>
`;

const renderContact = () => {
    content.insertAdjacentHTML('beforeend', contact);
};

export default renderContact;