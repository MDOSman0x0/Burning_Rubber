import "./HomePage_style.css";

function FeaturedVehicles() {
  return (
    <>
      <div id="featuredVehicles" className="d-flex justify-content-center">
        <h1 className="border-5">Featured Vehicles</h1>
      </div>

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
              src="src/assets/toyota_hilux.jpg"
              className="d-block w-100 rounded"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>This is a Toyota Hilux</h5>
              <p>Invincible</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="src/assets/forerunner.jpg"
              className="d-block w-100 rounded"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Toyota Forerunner</h5>
              <p>Invincible</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="src/assets/lambo_tractor.jpg"
              className="d-block w-100 rounded"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Lambourghini Tractor</h5>
              <p>You don't see this everyday</p>
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
    </>
  );
}

export default FeaturedVehicles;
