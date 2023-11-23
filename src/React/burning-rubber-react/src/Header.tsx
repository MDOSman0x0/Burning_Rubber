import './header_style.css';

function Header() {
    return (
      <div>

      <h1 id="title-bar">
        <strong>BURNING RUBBER</strong>
      </h1>
    
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme="dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navBar">
            <ul className="navbar-nav me-auto mb-2 mg-lb-0">
              <li className="nav-item">
                <a id="tabHome" className="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a id="tabDealership" className="nav-link" href="shop.html">Dealership</a>
              </li>
              <li className="nav-item">
                <a id="tabInquiry" className="nav-link" href="inquiry.html">Inquiry</a>
              </li>
              <li className="nav-item">
                <a id="tabReview" className="nav-link" href="review.html">Review</a>
              </li>
              <li className="nav-item">
                <a id="tabAbout" className="nav-link" href="about.html">About Us</a>
              </li>
            </ul>
            <button id="loginBtn" className="btn btn-outline-danger" type="button">Login</button>
          </div>
        </div>
      </nav>

      </div>
    );
}

export default Header;