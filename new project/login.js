const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('emailInput') || document.getElementById('email');
const passwordInput = document.getElementById('passwordInput') || document.getElementById('password');
const rememberMe = document.getElementById('rememberMe');
const errorMessage = document.getElementById('errorMessage');
const submitBtn = document.getElementById('submitBtn');

const savedEmail = localStorage.getItem('rememberedEmail');
if (savedEmail && emailInput) {
  emailInput.value = savedEmail;
  if (rememberMe) rememberMe.checked = true;
}

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (errorMessage) {
      errorMessage.classList.add('hidden');
      errorMessage.textContent = '';
    }

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (rememberMe && rememberMe.checked) {
      localStorage.setItem('rememberedEmail', email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Signing in...</span>';
    }

    try {
      const response = await fetch('https://bookingapi.stepacademy.ge/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': '*/*'
        },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();

      if (response.ok) {
   
        localStorage.setItem('userEmail', email);

        const token = result.token || result.accessToken || (result.data && result.data.accessToken);
        if (token) {
          localStorage.setItem('token', token);
        }

        window.location.href = 'verify.html';
      } else {
        showError(result.message || result.detail || 'Invalid email or password. Please try again.');
      }
    } catch (err) {
      console.error('Login Error:', err);
      showError('Connection error. Please check your network and try again.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Sign In</span>';
      }
    }
  });
}

function showError(msg) {
  if (errorMessage) {
    errorMessage.textContent = msg;
    errorMessage.classList.remove('hidden');
  } else {
    alert(msg);
  }
}