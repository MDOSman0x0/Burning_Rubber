import Header from "./Header";
import "./shopPage.css";

function ShopPage() {
  return (
    <>
      <Header />

      <form id="search-form">
        <div>
          <label>Search:</label>
          <input
            type="text"
            required
            placeholder="Insert Query Here"
            id="searchBox"
          />
        </div>

        <input className="btn" type="submit" value="Search" id="srchBtn" />
        <div className="message"></div>
      </form>

      <div id="allVehicles">
        <h1 className="border-5 d-flex align-items-center justify-content-center mt-3">
          All Vehicles
        </h1>
      </div>

      <div id="hilux">
        <p>
          <img
            src="src/assets/toyota_hilux.jpg"
            className="d-block w-50 rounded centered"
            alt="..."
          />
        </p>
        <h1 className="d-flex align-items-center justify-content-center mt-3">
          Toyota Hilux
        </h1>
        <p className="text-center mt-3">
          So indestructible that we guarantee a full refund if it breaks
          <br />
          300,000 miles
          <br />
          <b>$35,000</b>
        </p>
      </div>

      <div id="Lambo_R8">
        <p>
          <img
            src="src/assets/lambo_tractor.jpg"
            className="d-block w-50 rounded centered"
            alt="..."
          />
        </p>
        <h1 className="d-flex align-items-center justify-content-center mt-3">
          Lamborghini R8
        </h1>
        <p className="text-center mt-3">
          Not your typical Lamborghini
          <br />
          (Yes, Lamborghini actually made this)
          <br />
          <b>$25,000</b>
        </p>
      </div>

      <div id="Z8">
        <p>
          <img
            src="src/assets/Z8.jpg"
            className="d-block w-50 rounded centered"
            alt="..."
          />
        </p>
        <h1 className="d-flex align-items-center justify-content-center mt-3">
          BMW Z8
        </h1>
        <p className="text-center mt-3">
          2001 BMW naturally aspirated V8 roadster
          <br />
          15,000 miles
          <br />
          1 of 5703
          <br />
          <b>$150,000</b>
        </p>
      </div>

      <div id="GTR">
        <p>
          <img
            src="src/assets/GTR.jpg"
            className="d-block w-50 rounded centered"
            alt="..."
          />
        </p>
        <h1 className="d-flex align-items-center justify-content-center mt-3">
          Nissan GT-R
        </h1>
        <p className="text-center mt-3">
          Godzilla
          <br />
          10,000 miles
          <br />
          2012 model
          <br />
          <b>$65,000</b>
        </p>
      </div>

      <div id="autozam">
        <p>
          <img
            src="src/assets/autozam.jpg"
            className="d-block w-50 rounded centered"
            alt="..."
          />
        </p>
        <h1 className="d-flex align-items-center justify-content-center mt-3">
          1993 Autozam AZ-1
        </h1>
        <p className="text-center mt-3">
          JDM Gullwing kei car
          <br />
          35,000 miles
          <br />
          Imported from Japan
          <br />
          <b>$40,000</b>
        </p>
      </div>

      <div id="supra">
        <p>
          <img
            src="src/assets/supra.jpg"
            className="d-block w-50 rounded centered"
            alt="..."
          />
        </p>
        <h1 className="d-flex align-items-center justify-content-center mt-3">
          1997 Toyota Supra
        </h1>
        <p className="text-center mt-3">
          IS THAT A SUPRA??
          <br />
          40,000 miles
          <br />
          0-60 faster than a blink of an eye
          <br />
          <b>$95,000</b>
        </p>
      </div>

      <footer className="d-flex align-items-center justify-content-center mt-3 border-top position-static fixed-bottom">
        <p className="text-muted">Copyright &copy; Burning Rubber 2023</p>
      </footer>
    </>
  );
}

export default ShopPage;
