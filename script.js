const form = document.querySelector('#registration-form');
const message = document.querySelector('#form-message');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const chosen = [...form.querySelectorAll('input[name="activities"]:checked')].map((item) => item.value);
  message.textContent = `Thank you, ${form.fullName.value.trim()}! Your registration details have been received${chosen.length ? ` for ${chosen.join(', ')}` : ''}. (Demo only — no data is sent.)`;
  form.reset();
});
