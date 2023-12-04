import React, {useRef} from 'react';
import emailjs from 'emailjs-com';
import './InquiryForm.css'   

function InquiryForm(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dm2s7qg', 'template_llc0db8', form.current, '9Flnl6rX_khpFtgk3')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          alert("Email Sent");
      };

return (
    <div className = "inquiry">
        <h1>Email Inquiry</h1>
        <form ref={form} onSubmit={sendEmail}>
        <label> Full Name </label>
        <input type="text" name = "Name" required placeholder='Name'/>
        <label> Email </label>
        <input type="email" name = "Email" required placeholder='Email'/>
        <label> Budget </label>
        <input type="number" name = "Budget" required placeholder='Budget'/>
        <label> Important Details </label>
        <textarea name = "Details"> </textarea>

        <button> Send Email</button>


        </form>
    </div>
);
}

export default InquiryForm;