import axios from "axios";
import React from "react";
// import Header from "./Header";
import { FaSearch } from "react-icons/fa";
import "./shopPage.css";

class ShopPage extends React.Component {
  state = {
    details: [],
    search: "",
  };

  componentDidMount() {
    let data;
    axios
      .get("http://127.0.0.1:8000/")
      .then((res) => {
        data = res.data;
        this.setState({
          details: data,
        });
      })
      .catch((err) => {});
  }

  searchingChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    const searchCars = this.state.details.filter(
      (vehicle) =>
        vehicle.make.includes(this.state.search) ||
        vehicle.type.includes(this.state.search) || vehicle.typecar.includes(this.state.search)
    );

    return (
      <div>
        {/* <Header/> */}
        <div id="searchBar">
          <FaSearch id="search-icon" />
          <input
            type="search"
            placeholder="Search"
            value={this.state.search}
            onChange={this.searchingChange}
          />
        </div>
        <div id="shopContainer" className="container">
          <div id = "carEntry" className="row">
            {searchCars.map((output, id) => (
              <div className="col-md-6 mb-5" key={id}>
                <div className="card text-center">
                  <img id = "picture" className="card-img-top" src={output["img"]} />
                  <div className="card-body">
                    <h2 className="card-title">{output["make"]} {output["type"]}</h2>
                    <h4 className="card-subtitle text-muted">{output["typecar"]}</h4>
                    <h5 className="card-subtitle mt-2">MPG: {output["mpg"]}</h5>
                    <p className="card-text mt-2">Price: ${output["price"]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <footer className="d-flex align-items-center justify-content-center mt-3 border-top position-static fixed-bottom">
          <p className="text-muted"> Copyright &copy; Burning Rubber 2023</p>
        </footer>
      </div>
    );
  }
}

export default ShopPage;
