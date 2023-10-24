const inquiryForm = document.querySelector('#inquiry-form');
const message = document.querySelector('.message');
const fullName = document.querySelector('#fullName');
const emailAddress = document.querySelector('#emailAddress');
const budgetNumber = document.querySelector('#budgetNumber');

inquiryForm.addEventListener('submit', clicked);

function clicked(e){
  e.preventDefault();

  if (fullName.value === '' || emailAddress.value === '' || budgetNumber.value === '') {
  message.classList.add('error');
  message.innerHTML = 'Please fill all fields';
  }

  else {
    message.innerHTML = 'Inquiry submitted successfully';
    setTimeout(() => message.remove(), 5000);

    inquiryForm.reset();
  }

}

