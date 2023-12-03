import axios from 'axios';
import React from 'react';
import Header from "./Header";
import {FaSearch} from "react-icons/fa";
import "./shopPage.css";

class ShopPage extends React.Component {
  state = {
    details: [],
    search: '',
  };

  componentDidMount() {
    let data;
    axios.get('http://127.0.0.1:8000/')
      .then(res => {
        data = res.data;
        this.setState({
          details: data
        });
      })
      .catch(err => { });
  }

  searchingChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    const searchCars = this.state.details.filter(vehicle =>
      vehicle.make.includes(this.state.search) || vehicle.type.includes(this.state.search)
    );

    return (
      <div>
        <Header/>
        <div className = 'searchBar'>
          <FaSearch id="search-icon"/>
        <input type='search' placeholder='Search make or model' value={this.state.search} onChange={this.searchingChange}/>
        </div>
        <div className='container'>
          <div className='row'>
            {searchCars.map((output, id) => (
              <div className='col-md-10 mb-5' key={id}>
                <div className='card text-center'>
                  <img className= 'card-img-top' src={output['img']}/>
                  <div className='card-body'>
                    <h2 className='card-title'>{output['make']} {output['type']}</h2>
                    <h3 className='card-subtitle'>{output['type']}</h3>
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
