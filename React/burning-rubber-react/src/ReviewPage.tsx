import Header from "./Header";
import PriorReviews from "./PriorReviews";
import ReviewForm from "./ReviewForm";
import './ReviewPage.css';

function ReviewPage() {
  return (
    <>
      <Header />
      <PriorReviews/>
      <ReviewForm/>
      <footer className="d-flex align-items-center justify-content-center mt-3 border-top position-static fixed-bottom">
        {" "}
        <p className="text-muted"> Copyright &copy; Burning Rubber 2023</p>{" "}
      </footer>
    </>
    
  );
}

export default ReviewPage;
