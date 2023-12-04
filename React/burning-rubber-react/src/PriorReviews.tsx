import axios from "axios";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./PriorReviews.css";
import { Card } from "react-bootstrap";

class PriorReviews extends React.Component {
  state = { details: [] };

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
    const { details } = this.state;

    const cardSlide = details.reduce((acc, item, index) => {
      const chunkIndex = Math.floor(index / 4);

      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }

      acc[chunkIndex].push(item);

      return acc;
    }, []);

    return (
      <Carousel style={{ padding: "1rem" }}>
        {cardSlide.map((group, groupIndex) => (
          <Carousel.Item key={groupIndex} className="slide">
            <div className="card-container row justify-content-center">
              {group.map((output, id) => (
                <Card key={id} style={{ width: "18rem" }}>
                  <img src={output["img"]} alt={output["vehicle"]} />
                  <div>
                    <h3>{output["vehicle"]}</h3>
                    <h5>Rating: {output["rating"]}/5</h5>
                    <p>{output["comments"]}</p>
                    <h6>
                      {output["fullName"]} on {output["created"]}
                    </h6>
                  </div>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default PriorReviews;
