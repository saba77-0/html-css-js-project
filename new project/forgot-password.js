const forgotForm = document.getElementById('forgotForm');
const emailInput = document.getElementById('emailInput');
const alertMessage = document.getElementById('alertMessage');
const submitBtn = document.getElementById('submitBtn');

forgotForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  alertMessage.className = 'alert-message hidden';
  alertMessage.textContent = '';

  const email = emailInput.value.trim();

  if (!email) return;

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span>Sending...</span>';

  try {
    const encodedEmail = encodeURIComponent(email);
    const response = await fetch(`https://bookingapi.stepacademy.ge/api/auth/forget-password/${encodedEmail}`);

    const result = await response.json();

    if (response.ok) {
      showAlert(result.data || 'If the email exists, a reset link has been sent.', 'success');
      emailInput.value = '';
    } else {
      showAlert(result.message || 'Something went wrong. Please try again.', 'error');
    }
  } catch (error) {
    showAlert('Connection error. Please check your network and try again.', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fa-regular fa-paper-plane"></i><span>Send Reset Link</span>';
  }
});

function showAlert(msg, type) {
  alertMessage.textContent = msg;
  alertMessage.className = `alert-message ${type}`;
}