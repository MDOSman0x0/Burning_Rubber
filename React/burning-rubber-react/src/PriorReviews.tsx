import "./PriorReviews.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function PriorReviews() {
  return (
    <Carousel responsive={responsive}>
      <div className="card d-flex mx-auto">
        <div className="card-image">
          <img
            className="img-fluid d-flex mx-auto"
            src="https://i.ebayimg.com/images/g/PCEAAOSwQF5eKBdg/s-l1200.jpg"
          ></img>
        </div>
        <div className="card-text">
          <div className="card-title">Stupid Dealership Scammed Me!!</div>
          <div className="card-vehicle">Toyota Supra Mk4</div>
          Do not buy from these guys EVER. They sold me a car with bad
          brakes!!!! I rear ended a BatMobile as soon as I left the lot! This
          dealrship is either incompetent or is trying to kill people!
        </div>
        <div className="footer">
          <span id="name">
            Bruce Wayne<br></br>
          </span>
          <span id="review-value">Rating = 1/5</span>
        </div>
      </div>
      <div className="card d-flex mx-auto">
        <div className="card-image">
          <img
            className="img-fluid d-flex mx-auto"
            src="https://i.ytimg.com/vi/tn-Z5FHXcBA/hqdefault.jpg"
          ></img>
        </div>
        <div className="card-text">
          <div className="card-title">THISS is the Autozam AZ-1!</div>
          <div className="card-vehicle">Mazda Autozam AZ-1</div>
          The Autozam AZ-1 is a crazy vehicle -- a tiny, mid-engine sports car
          with gullwing doors. It's ridiculous and very small, but also
          surprisingly fun -- and today, I'm reviewing it! I'll show you all the
          quirks and features of the AZ-1, and I'm also going to drive the AZ-1
          and show you what it's like on the road!
        </div>
        <div className="footer">
          <span id="name">
            Doug DeMuro<br></br>
          </span>
          <span id="review-value">Rating = 5/5</span>
        </div>
      </div>
      <div className="card d-flex mx-auto ">
        <div className="card-image">
          <img
            className="img-fluid d-flex mx-auto"
            src="https://live.staticflickr.com/65535/51736789889_1a0923bd19_b.jpg"
          ></img>
        </div>
        <div className="card-text">
          <div className="card-title">Gets the Job Done.</div>
          <div className="card-vehicle">BMW Z8</div>
          The name is Bond. James Bond. The Z8 is an excellent car and burning
          rubber hit all the marks with no exceptions. After a trip to Q's
          garage this bad boy helped me tear up the streets of Azerbaijan like
          no car ever could. No regrets, its still a poverty beamer tho.
        </div>
        <div className="footer">
          <span id="name">
            James Bond<br></br>
          </span>
          <span id="review-value">Rating = 4/5</span>
        </div>
      </div>
    </Carousel>
  );
}

export default PriorReviews;
