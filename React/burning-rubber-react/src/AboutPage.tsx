// import Header from "./Header";
import "./about_style.css";

function AboutPage() {
  return (
    <>
      {/* <Header /> */}

      <div id="info-block">
        <div id="first-info-block">
          <h2 className="section-head">
            <strong>Who We Are</strong>
          </h2>
          <p className="description">
            Thank you soliciting this awesome website created by a team of five
            highly motivated college students from San Diego, California. This
            website is the culmination of months of effort spent on a project
            assigned to us by our web development instructor. Our operation is
            stationed at San Diego State University's renowned College of
            Engineering. All of us are majoring in Computer Engineering and we
            hope that the fruits of our labor are exceptional, provided our
            website is best suited for your needs as a car and motorcycle
            enthusiast. That said, I hope you enjoy your time at Burning Rubber
            as much as we have enjoyed creating it for you.
          </p>
        </div>

        <div id="second-info-block">
          <h2 className="section-head">
            <strong>Not Your Typical Dealership</strong>
          </h2>
          <p className="description">
            I'm sure after having visited several other car and motorcylcle
            dealerships you might be wondering, what seperates this site from
            the others? Well to be frank, we try to bring humor and authenticity
            to the foreground of our work, making the user experience stand out
            from the rest. While we do use some common contemporary web
            development components, like from bootstrap, we try to blend these
            modern design concepts with the ruggid old internet approach of
            ordered chaos.
          </p>
        </div>

        <div id="third-info-block">
          <h2 className="section-head">
            <strong>Contact Information</strong>
          </h2>
          <p id="contact-info">
            <strong>San Diego State University Address:</strong>
            <br />
            5500 Campanile Dr,
            <br />
            San Diego, CA 92182,
            <br />
            United States
            <br />
            <br />
            <strong>Department:</strong>
            <br />
            Electrical and Computer Engineering
            <br />
            Location: Engineering Building
            <br />
            Phone: (619) 594-7013
            <br />
            <br />
          </p>
        </div>

        <div className="text-center">
          <img
            width="400"
            src="src/assets/hazmat_motor_fire.jpg"
            className="rounded"
            alt="Hazmat Motor Guy"
          />
        </div>

        <p id="hazmat-motor-caption">
          Checkout this badass hazmat dude rippin rubber while on fire.
          <br />I mean look at it. Stay rad my dude!
        </p>
      </div>

      <footer className="d-flex align-items-center justify-content-center mt-3 border-top position-static fixed-bottom">
        {" "}
        <p className="text-muted"> Copyright &copy; Burning Rubber 2023</p>{" "}
      </footer>
    </>
  );
}

export default AboutPage;
