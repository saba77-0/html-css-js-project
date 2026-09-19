document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "login.html";
    return;
  }


  const pictureInput = document.getElementById("pictureUrlInput");
  const firstNameInput = document.getElementById("firstNameInput");
  const lastNameInput = document.getElementById("lastNameInput");
  const emailInput = document.getElementById("emailInput");
  const phoneInput = document.getElementById("phoneInput");
  const dobInput = document.getElementById("dobInput");
  const addressInput = document.getElementById("addressInput");

  const topNavAvatar = document.getElementById("topNavAvatar");
  const sidebarAvatar = document.getElementById("sidebarAvatar");
  const previewAvatar = document.getElementById("previewAvatar");
  const sidebarFullName = document.getElementById("sidebarFullName");
  const sidebarEmail = document.getElementById("sidebarEmail");

  async function loadUserData() {
    try {
      const response = await fetch("https://bookingapi.stepacademy.ge/api/users/me", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "accept": "application/json"
        }
      });

      if (response.ok) {
        const userData = await response.json();
        fillProfileUI(userData);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  }

  function fillProfileUI(user) {
    const fn = user.firstName || "";
    const ln = user.lastName || "";
    const initials = ((fn[0] || "") + (ln[0] || "")).toUpperCase() || "U";


    sidebarFullName.textContent = `${fn} ${ln}`.trim() || "User Profile";
    sidebarEmail.textContent = user.email || "";


    firstNameInput.value = fn;
    lastNameInput.value = ln;
    emailInput.value = user.email || "";

    let pictureUrl = "";

    if (user.details) {
      phoneInput.value = user.details.phoneNumber || "";
      addressInput.value = user.details.address || "";
      pictureUrl = user.details.pictureUrl || "";
      pictureInput.value = pictureUrl;
      
      if (user.details.dob) {
        dobInput.value = user.details.dob.split("T")[0];
      }
    }

    updateAvatarUI(pictureUrl, initials);
  }


  function updateAvatarUI(imageUrl, initials) {
    if (imageUrl && imageUrl.trim() !== "") {
      const imgHTML = `<img src="${imageUrl}" alt="Avatar" style="width:100%; height:100%; border-radius:inherit; object-fit:cover;">`;
      topNavAvatar.innerHTML = imgHTML;
      sidebarAvatar.innerHTML = imgHTML;
      previewAvatar.innerHTML = imgHTML;
    } else {
      topNavAvatar.textContent = initials;
      sidebarAvatar.textContent = initials;
      previewAvatar.textContent = initials;
    }
  }

  pictureInput.addEventListener("input", (e) => {
    const url = e.target.value.trim();
    const fn = firstNameInput.value;
    const ln = lastNameInput.value;
    const initials = ((fn[0] || "") + (ln[0] || "")).toUpperCase() || "U";
    updateAvatarUI(url, initials);
  });


  const form = document.getElementById("profileForm");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      details: {
        phoneNumber: phoneInput.value,
        address: addressInput.value,
        dob: dobInput.value ? new Date(dobInput.value).toISOString() : new Date().toISOString(),
        pictureUrl: pictureInput.value
      }
    };

    try {
      const res = await fetch("https://bookingapi.stepacademy.ge/api/users/me", {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        alert("Profile updated successfully!");
        loadUserData();
      } else {
        alert("Failed to save changes.");
      }
    } catch (err) {
      console.error("Save Error:", err);
      alert("An error occurred while saving.");
    }
  });


  document.getElementById("sidebarLogout").addEventListener("click", () => {
    if (confirm("Are you sure you want to log out?")) {
      localStorage.clear();
      window.location.href = "login.html";
    }
  });

  document.getElementById("discardBtn").addEventListener("click", () => {
    loadUserData();
  });


  loadUserData();
});