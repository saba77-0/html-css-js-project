document.addEventListener("DOMContentLoaded", () => {
  const verifyForm = document.getElementById("verifyForm");
  const resendBtn = document.getElementById("resendBtn");
  const messageBox = document.getElementById("messageBox");

  const userEmail = (localStorage.getItem("userEmail") || "").trim();

  if (verifyForm) {
    verifyForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const codeInput = document.getElementById("verifyCode");
      const rawCode = codeInput ? codeInput.value.trim() : "";

      hideMessage();

      if (!userEmail) {
        showMessage("Email address not found. Please log in again.", "error");
        return;
      }

      try {
        const response = await fetch("https://bookingapi.stepacademy.ge/api/auth/verify-email", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "accept": "*/*"
          },
          body: JSON.stringify({
            email: userEmail,
            code: rawCode 
          })
        });

        const textData = await response.text();
        let jsonData = {};
        try {
          jsonData = JSON.parse(textData);
        } catch (err) {}

        if (response.ok) {
          showMessage("Email verified successfully! Redirecting...", "success");
          setTimeout(() => {
            window.location.href = "index1.html";
          }, 1500);
        } else {
          showMessage(jsonData.detail || jsonData.message || "Invalid or expired verification code.", "error");
        }
      } catch (error) {
        console.error("Verify Error details:", error);
        showMessage("Verification failed. Please check your network and try again.", "error");
      }
    });
  }

  if (resendBtn) {
    resendBtn.addEventListener("click", async () => {
      if (!userEmail) {
        showMessage("Email address not found.", "error");
        return;
      }

      hideMessage();

      try {
        const response = await fetch(`https://bookingapi.stepacademy.ge/api/auth/resend-email-verification/${encodeURIComponent(userEmail)}`, {
          method: "POST",
          headers: {
            "accept": "*/*"
          }
        });

        if (response.ok) {
          showMessage("A new verification code has been sent.", "success");
        } else {
          showMessage("Request failed to resend code.", "error");
        }
      } catch (error) {
        console.error("Resend Error:", error);
        showMessage("Network error.", "error");
      }
    });
  }

  function showMessage(text, type) {
    if (messageBox) {
      messageBox.textContent = text;
      messageBox.className = `message-box ${type}`;
    } else {
      alert(text);
    }
  }

  function hideMessage() {
    if (messageBox) {
      messageBox.textContent = "";
      messageBox.className = "message-box hidden";
    }
  }
});