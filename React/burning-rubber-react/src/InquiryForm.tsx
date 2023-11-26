import './InquiryForm.css'   

function InquiryForm(){

return (
    <div className = "inquiry">
        <h1>Email Inquiry</h1>
        <form>
        <label> Full Name </label>
        <input type="text" required placeholder='Name'/>


        <label> Email </label>
        <input type="text" required placeholder='Email'/>

        <label> Budget </label>
        <input type="text" required placeholder='Budget'/>

        <label> Important Details </label>
        <textarea required> </textarea>

        <button> Send Email</button>


        </form>
    </div>
);
}

export default InquiryForm;