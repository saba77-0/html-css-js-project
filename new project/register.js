document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById("registerForm");
  const submitBtn = document.getElementById("submitBtn");
  const messageBox = document.getElementById("messageBox");

  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    submitBtn.disabled = true;

    try {
      const response = await fetch("https://bookingapi.stepacademy.ge/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        })
      });

      const data = await response.json();

      if (response.ok) {

        localStorage.setItem("userFirstName", firstName);
        localStorage.setItem("userLastName", lastName);

        if (messageBox) {
          messageBox.textContent = "Account created! Redirecting...";
          messageBox.className = "message-box success";
        }

        setTimeout(() => {
          window.location.href = "login.html";
        }, 1200);
      } else {
        if (messageBox) {
          messageBox.textContent = data.message || "Registration failed.";
          messageBox.className = "message-box error";
        }
      }
    } catch (error) {
      console.error("Register Error:", error);
    } finally {
      submitBtn.disabled = false;
    }
  });
});