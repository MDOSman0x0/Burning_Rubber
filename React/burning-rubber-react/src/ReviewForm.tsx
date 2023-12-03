import "./ReviewForm.css";

function ReviewForm() {
  return (
    <div className="review">
      <h1 id="reviewHeader">Leave a Review</h1>
      <form id="reviewForm">
        <label> Rating </label>
        <input type="text" required placeholder="Rating" />

        <label> Full Name </label>
        <input type="text" required placeholder="Name" />

        <label> Vehicle </label>
        <input type="text" required placeholder="Vehicle" />

        <label> Comments </label>
        <textarea required> </textarea>

        <button> Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewForm;
