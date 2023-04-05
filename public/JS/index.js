
// DOM

const submitBtn = document.getElementById('submitBtn')

const form = document.querySelector('#add-appointment-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const formData = new FormData(form); 
  const data = {}; 
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }
  console.log(data);
});
