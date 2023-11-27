import './ReviewForm.css'   

function ReviewForm(){

return (
    <div className = "review">
        <h1>Leave a Review</h1>
        <form>

        <label> Rating </label>
        <input type="text" required placeholder='Rating'/>

        <label> Full Name </label>
        <input type="text" required placeholder='Name'/>


        <label> Vehicle </label>
        <input type="text" required placeholder='Vehicle'/>


        <label> Comments </label>
        <textarea required> </textarea>

        <button> Submit Review</button>


        </form>
    </div>
);
}

export default ReviewForm;