import axios from "axios";
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./PriorReviews.css";
import { Card } from "react-bootstrap";

class PriorReviews extends React.Component {
  state = {details:[],}

  componentDidMount() {
    let data;
    axios
      .get("http://127.0.0.1:8500/")
      .then((res) => {
        data = res.data;
        this.setState({
          details: data,
        });
      })
      .catch((err) => {});
  }

  render() {
    return(
      <Carousel>
  <Carousel.Item className="row">
  {this.state.details.map((output,id) => (
    <Card style={{ width: "18rem" }}>
    <img src={output["img"]} />
            <div>
              <h3> {output["vehicle"]}</h3>
              <h5>Rating: {output["rating"]}/5</h5>
              <p>{output["comments"]}</p>
              <h6>{output["fullName"]} on {output["created"]}</h6>
              </div>
    </Card>
      ) )}
  </Carousel.Item>
</Carousel>
    )
  }
}

export default PriorReviews;