import Header from "./Header";
import FeaturedVehicles from "./FeaturedVehicles";
import SearchBar from "./SearchBar";
import "./HomePage_style.css";

function HomePage() {
  return (
    <>
      <Header />
      <FeaturedVehicles />
      <SearchBar />
      <footer className="d-flex align-items-center justify-content-center mt-3 border-top position-static fixed-bottom">
        {" "}
        <p className="text-muted"> Copyright &copy; Burning Rubber 2023</p>{" "}
      </footer>
    </>
  );
}

export default HomePage;
