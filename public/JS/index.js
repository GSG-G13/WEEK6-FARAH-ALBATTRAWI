const form = document.querySelector('#add-appointment-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const formData = new FormData(form); 
  const data = {}; 
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }
  // ERROR ABOUT THE METHOD!!
  console.log(data);
  fetch('/add-appointment', { 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  })
  
  
  .then(data => {
    console.log('Success:', data);
   
  })
  .catch((error) => {
    console.error('Error:', error);
   
  });
});