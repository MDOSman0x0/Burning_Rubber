import "./ReviewForm.css";
import axios from "axios";
import React, {useState} from 'react'

const ReviewForm = () => {

  const[rating, setRating] = useState("")
  const[fullName, setfullName] = useState("")
  const[vehicle, setVehicle] = useState("")
  const[comments, setComments] = useState("")
  const[image, setImage] = useState("")

  const AddReview = async() => {
    let formField = new FormData()

    formField.append('rating', rating)
    formField.append('fullName', fullName)
    formField.append('vehicle', vehicle)
    formField.append('comments', comments)
    formField.append('img', image)
  

    await axios({
      method: 'post',
      url: "http://127.0.0.1:8500/",
      data: formField
    }).then((response) => {
      console.log(response.data)
    })

  }

  return (
    <div className="review">
      <h1 id="reviewHeader">Leave a Review</h1>
      <form id="reviewForm">

        <label> Rating </label>
        <input type="number" 
        min={1} max={5} 
        defaultValue='5'
        name = "rating" 
        value={rating} 
        onChange={(e) => setRating(e.target.value)} />

        <label> Full Name </label>
        <input type="text" 
        required placeholder="John Doe" 
        name = "fullName" 
        value={fullName} 
        onChange={(e) => setfullName(e.target.value)} />

        <label> Vehicle </label>
        <input type="text" 
        required placeholder="2012 Toyota Camry"
        name = "vehicle" 
        value={vehicle} 
        onChange={(e) => setVehicle(e.target.value)}/>

        <label> Comments </label>
        <textarea required
        name = "comments" 
        value={comments} 
        onChange={(e) => setComments(e.target.value)}> </textarea>

        <label> Image </label>
        <input type="URL"
        required placeholder="enter image URL here"
        name="image"
        src={image}
        onChange={(e) => setImage(e.target.value)}/>

        <button onClick={AddReview}> Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewForm;
