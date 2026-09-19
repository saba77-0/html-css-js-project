const initialData = [
  {
    id: 10,
    name: "Lopota Lake Resort & Spa",
    starRating: 5,
    thumbnail: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/b9/8a/e1/d5/00/v1_E10/E103CRQZ.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=cfe2cda65d4053e1bd9c8c4f23fe303e39fd71272ab72fd346b0a493568f54b2",
    averageRating: 3.6666666666666665,
    reviewCount: 6,
    roomCount: 6,
    address: { id: 10, hotelId: 10, street: "Lopota Lake, Napareuli", city: "Kvareli", country: "Georgia", zipCode: "4500", state: "Kakheti" }
  },
  {
    id: 9,
    name: "Hotel Kabadoni Sighnaghi",
    starRating: 4,
    thumbnail: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/aa/3c/a1/73/ec/v1_E10/E10FOXQX.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=1deb857f2d0938f5690416d897a015b2a7143aa082da8761ebaf97eb74460eef",
    averageRating: 4,
    reviewCount: 1,
    roomCount: 6,
    address: { id: 9, hotelId: 9, street: "22 Baratashvili Street", city: "Sighnaghi", country: "Georgia", zipCode: "4200", state: "Kakheti" }
  },
  {
    id: 8,
    name: "Crowne Plaza Borjomi",
    starRating: 5,
    thumbnail: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/f6/3e/6f/91/95/v1_E10/E107QKGE.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=622f8381f74400ab39a28195e5490d1bf8325fae6aea58ff01fac34d3dab10fa",
    averageRating: 4,
    reviewCount: 2,
    roomCount: 6,
    address: { id: 8, hotelId: 8, street: "1 Pirosmani Street", city: "Borjomi", country: "Georgia", zipCode: "1400", state: "Samtskhe-Javakheti" }
  },
  {
    id: 7,
    name: "Sheraton Batumi Hotel",
    starRating: 5,
    thumbnail: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/cb47cb6e-0fe7-4e58-9605-76b75b4a9d19/3ed73668-a1eb-449c-a7d9-132efdfb3276.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=0f10e4df2ed378b1bae20484f1b9430e48d868203159162b5f04b961c2ad947a",
    averageRating: 2,
    reviewCount: 1,
    roomCount: 6,
    address: { id: 7, hotelId: 7, street: "28 Rustaveli Street", city: "Batumi", country: "Georgia", zipCode: "6010", state: "Adjara" }
  },
  {
    id: 6,
    name: "Radisson Blu Hotel Batumi",
    starRating: 5,
    thumbnail: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/038824ed-b308-4b8a-9f3b-ce8f4e37e655/727920e5-8b73-44ec-9372-43660446c98e.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=bf11bb0b1d9ec829153ee957715ec79bf179a98b594adce1c793b278b6923ecb",
    averageRating: 3,
    reviewCount: 2,
    roomCount: 6,
    address: { id: 6, hotelId: 6, street: "23 Ninoshvili Street", city: "Batumi", country: "Georgia", zipCode: "6010", state: "Adjara" }
  },
  {
    id: 5,
    name: "Fabrika Hostel & Suites",
    starRating: 3,
    thumbnail: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/13/09/28/60/ff/v1_E10/E103FZUU.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=c3840d380208a1ccb185b9172631bf701d602e6a8ba4c0394826457e1057dace",
    averageRating: 5,
    reviewCount: 1,
    roomCount: 6,
    address: { id: 5, hotelId: 5, street: "8 Kundeli Street", city: "Tbilisi", country: "Georgia", zipCode: "0105", state: null }
  },
  {
    id: 4,
    name: "Sheraton Grand Tbilisi Metechi Palace",
    starRating: 5,
    thumbnail: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/ca/63/6b/b0/3b/v1_E11/E117JBR0.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=0f770a8dd455dee377587e7b82267df264d84eff87212be4e152fdfd4ba93ece",
    averageRating: 4.5,
    reviewCount: 2,
    roomCount: 6,
    address: { id: 4, hotelId: 4, street: "20 Telavi Street, Avlabari", city: "Tbilisi", country: "Georgia", zipCode: "0103", state: null }
  },
  {
    id: 3,
    name: "Stamba Hotel",
    starRating: 5,
    thumbnail: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/7b/69/9c/1c/de/v1_E10/E10A3SA8.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=1bcb541a4dc971d970a0b55b5f90b2f21cf7d5387364a8bfe1e6e4f879b7ec5b",
    averageRating: 4,
    reviewCount: 1,
    roomCount: 6,
    address: { id: 3, hotelId: 3, street: "14 Kostava Street", city: "Tbilisi", country: "Georgia", zipCode: "0108", state: null }
  },
  {
    id: 2,
    name: "The Biltmore Hotel Tbilisi",
    starRating: 5,
    thumbnail: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/bf40e7fe-80fd-4c73-8bd6-441a221eca74/292fdbbf-8657-4352-b7c5-9b24c1589870.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=00f605a86aea8594706b7049c0e27cb1883e9e2c196fcaea1037a1e896d1fa4e",
    averageRating: 3,
    reviewCount: 1,
    roomCount: 6,
    address: { id: 2, hotelId: 2, street: "24 Rustaveli Avenue", city: "Tbilisi", country: "Georgia", zipCode: "0108", state: null }
  },
  {
    id: 1,
    name: "Rooms Hotel Tbilisi",
    starRating: 5,
    thumbnail: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/3f/f5/4a/47/91/v1_E10/E10A8E95.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=833ea22058fb83ef1d93c8493572029ab44d171d455bc972a67f381eeb3e8d75",
    averageRating: 3,
    reviewCount: 1,
    roomCount: 6,
    address: { id: 1, hotelId: 1, street: "14 Robakidze Street", city: "Tbilisi", country: "Georgia", zipCode: "0179", state: null }
  }
];

let hotels = [...initialData];

const filterToggleBtn = document.getElementById('filterToggleBtn');
const filterPanel = document.getElementById('filterPanel');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const countryFilter = document.getElementById('countryFilter');
const cityFilter = document.getElementById('cityFilter');
const starsFilter = document.getElementById('starsFilter');
const ratingFilter = document.getElementById('ratingFilter');
const sortBy = document.getElementById('sortBy');
const hotelsGrid = document.getElementById('hotelsGrid');

filterToggleBtn.addEventListener('click', () => {
  filterPanel.classList.toggle('hidden');
});

function renderStars(rating) {
  let starsHtml = '';
  const fullStars = Math.floor(rating);
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      starsHtml += '<i class="fa-solid fa-star"></i>';
    } else {
      starsHtml += '<i class="fa-regular fa-star"></i>';
    }
  }
  return starsHtml;
}

function renderHotels(data) {
  hotelsGrid.innerHTML = '';
  
  if (data.length === 0) {
    hotelsGrid.innerHTML = '<div class="no-results">No hotels found matching your criteria.</div>';
    return;
  }

  data.forEach(hotel => {
    const card = document.createElement('a');
    card.href = `hotel.html?id=${hotel.id}`;
    card.className = 'card';

    card.innerHTML = `
      <div class="card-img-wrapper">
        <img src="${hotel.thumbnail}" alt="${hotel.name}" class="card-img">
        <div class="badge-stars">${hotel.starRating} ★</div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${hotel.name}</h3>
        <div class="card-footer-info">
          <div class="stars-rating">
            ${renderStars(hotel.averageRating)}
            <span class="review-count">(${hotel.reviewCount})</span>
          </div>
          <div class="rooms-count">${hotel.roomCount} rooms</div>
        </div>
      </div>
    `;

    hotelsGrid.appendChild(card);
  });
}

function applyFilters() {
  let filtered = [...hotels];
  const query = searchInput.value.trim().toLowerCase();

  if (query) {
    filtered = filtered.filter(hotel => hotel.name.toLowerCase().includes(query));
  }

  const countryVal = countryFilter.value;
  if (countryVal) {
    filtered = filtered.filter(hotel => hotel.address.country === countryVal);
  }

  const cityVal = cityFilter.value;
  if (cityVal) {
    filtered = filtered.filter(hotel => hotel.address.city === cityVal);
  }

  const starsVal = starsFilter.value;
  if (starsVal) {
    filtered = filtered.filter(hotel => hotel.starRating >= parseInt(starsVal));
  }

  const ratingVal = ratingFilter.value;
  if (ratingVal) {
    filtered = filtered.filter(hotel => hotel.averageRating >= parseFloat(ratingVal));
  }

  const sortVal = sortBy.value;
  if (sortVal === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortVal === 'stars') {
    filtered.sort((a, b) => b.starRating - a.starRating);
  } else if (sortVal === 'rating') {
    filtered.sort((a, b) => b.averageRating - a.averageRating);
  } else if (sortVal === 'reviews') {
    filtered.sort((a, b) => b.reviewCount - a.reviewCount);
  }

  renderHotels(filtered);
}

async function fetchHotels() {
  try {
    const response = await fetch('https://bookingapi.stepacademy.ge/api/hotels');
    if (response.ok) {
      const resData = await response.json();
      if (resData.data && resData.data.items) {
        hotels = resData.data.items;
      }
    }
  } catch (error) {
  } finally {
    applyFilters();
  }
}

searchBtn.addEventListener('click', applyFilters);
searchInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') applyFilters();
});

countryFilter.addEventListener('change', applyFilters);
cityFilter.addEventListener('change', applyFilters);
starsFilter.addEventListener('change', applyFilters);
ratingFilter.addEventListener('change', applyFilters);
sortBy.addEventListener('change', applyFilters);

fetchHotels();



document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      try {
        const response = await fetch("https://bookingapi.stepacademy.ge/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
          },
          body: JSON.stringify({
            email: email,
            password: password
          })
        });

        const data = await response.json();

        if (response.ok) {
         
          localStorage.setItem("token", data.token || data.accessToken);

         
          const firstName = data.firstName || data.user?.firstName || "Saba";
          const lastName = data.lastName || data.user?.lastName || "Sabuka";
          
          localStorage.setItem("userFirstName", firstName);
          localStorage.setItem("userLastName", lastName);
          
       
          window.location.href = "index1.html";
        } else {
          alert(data.message || "ელ.ფოსტა ან პაროლი არასწორია!");
        }
      } catch (error) {
        console.error("Login Error:", error);
        alert("ქსელური შეცდომა.");
      }
    });
  }
});