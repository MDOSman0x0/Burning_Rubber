function SearchBar() {
  return (
    <>
      <div id="introduction" className="d-flex justify-content-center">
        Welcome to the most awespiring dealership you'll ever visit.
      </div>

      <div id="searchFilter" className="input-group mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="🔎︎ Search for Make, Model, Year, Price ... "
        />
        <button
          id="searchButton"
          className="btn btn-outline-danger"
          type="button"
        >
          Search
        </button>
      </div>

      <ul
        className="nav nav-tabs justify-content-center"
        id="searchTab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="type-tab"
            data-bs-toggle="tab"
            data-bs-target="#type-tab-pane"
            type="button"
            role="tab"
            aria-controls="type-tab-pane"
            aria-selected="true"
          >
            Type
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="price-tab"
            data-bs-toggle="tab"
            data-bs-target="#price-tab-pane"
            type="button"
            role="tab"
            aria-controls="price-tab-pane"
            aria-selected="false"
          >
            Price
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="mpg-tab"
            data-bs-toggle="tab"
            data-bs-target="#mpg-tab-pane"
            type="button"
            role="tab"
            aria-controls="mpg-tab-pane"
            aria-selected="false"
          >
            MPG
          </button>
        </li>
      </ul>
      <div className="tab-content" id="searchTabContent">
        <div
          className="tab-pane fade show active"
          id="type-tab-pane"
          role="tabpanel"
          aria-labelledby="type-tab"
        >
          <div className="d-flex align justify-content-evenly">
            <button type="button" className="btn btn-danger">
              Sports
            </button>
            <button type="button" className="btn btn-danger">
              Truck
            </button>
            <button type="button" className="btn btn-danger">
              Van
            </button>
            <button type="button" className="btn btn-danger">
              SUV
            </button>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="price-tab-pane"
          role="tabpanel"
          aria-labelledby="price-tab"
        >
          <div className="d-flex align justify-content-evenly">
            <button type="button" className="btn btn-danger">
              Under $20K
            </button>
            <button type="button" className="btn btn-danger">
              Under $40K
            </button>
            <button type="button" className="btn btn-danger">
              Under $60K
            </button>
            <button type="button" className="btn btn-danger">
              Under $100K
            </button>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="mpg-tab-pane"
          role="tabpanel"
          aria-labelledby="mpg-tab"
        >
          <div className="d-flex align justify-content-evenly">
            <button type="button" className="btn btn-danger">
              {">"}15 MPG
            </button>
            <button type="button" className="btn btn-danger">
              {">"}20 MPG
            </button>
            <button type="button" className="btn btn-danger">
              {">"}25 MPG
            </button>
            <button type="button" className="btn btn-danger">
              {">"}30 MPG
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
