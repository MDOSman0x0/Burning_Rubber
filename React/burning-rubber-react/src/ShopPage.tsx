import axios from 'axios';
import React from 'react';
import Header from "./Header";
import "./shopPage.css";

class ShopPage extends React.Component {
  state = {
    details: [],
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

  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <div className='row'>
            {this.state.details.map((output, id) => (
              <div className='col-md-10 mb-5' key={id}>
                <div className='card text-center'>
                  <img className= 'card-img-top' src={output['img']}/>
                  <div className='card-body'>
                    <h2 className='card-title'>{output['make']}</h2>
                    <h3 className='card-subtitle'>{output['type']}</h3>
                    <a href='#'className='mt-1 btn btn-danger'>Add To Cart</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <footer className="d-flex align-items-center justify-content-center mt-3 border-top position-static fixed-bottom">
        {" "}
        <p className="text-muted"> Copyright &copy; Burning Rubber 2023</p>{" "}
      </footer>
      </div>
    );
  }
}

export default ShopPage;

