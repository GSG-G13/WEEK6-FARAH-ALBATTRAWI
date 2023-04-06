const form = document.querySelector('#add-appointment-form');
const msg= document.getElementById("msg")
form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const formData = new FormData(form); 
  const data = {}; 
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }
  // ERROR ABOUT THE METHOD!!
  console.log(data);
  fetch('/add-appointments', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  
  .then(data => {msg.innerHTML="We have recevied your data"})
  
  
  .then(data => {
    console.log('Success:', data);
   
  })
  
  .catch((error) => {
    console.error('Error:', error);
   
  });
  
  form.reset()
}); 