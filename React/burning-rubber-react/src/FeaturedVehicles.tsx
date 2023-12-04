import "./HomePage_style.css";

function FeaturedVehicles() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div id="carShowcase" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carShowcase"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carShowcase"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carShowcase"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="src/assets/cybertruck.jpg"
                className="d-block w-100 rounded"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Featured Vehicle</h5>
                <p>Tesla Cybertruck</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="src/assets/kawasaki.jpg"
                className="d-block w-100 rounded"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Featured Vehicle</h5>
                <p>Kawasaki 1000SX</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="src/assets/Lamborghini.jpg"
                className="d-block w-100 rounded"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Featured Vehicle</h5>
                <p>Lamborghini Aventador</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carShowcase"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carShowcase"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default FeaturedVehicles;
