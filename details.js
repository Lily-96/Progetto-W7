const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OTYzYTFjMjUwNDAwMTUxYWI2ZGQiLCJpYXQiOjE3NDYxNzk2NDIsImV4cCI6MTc0NzM4OTI0Mn0.PW3Qt9-UXQSjQKR6gEVTxQd_bn2ejVkkr-ObIxPD_vY";
const Url = "https://striveschool-api.herokuapp.com/api/product/";
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log("ID prodotto:", id);

const URL = "https://striveschool-api.herokuapp.com/api/product/";
fetch(Url + id, {
  method: "GET",
  headers: { Authorization: token },
})
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then((product) => {
    const container = document.getElementById("prodotti");
    container.innerHTML = `
      <h1>${product.name}</h1>
      <img src="${product.imageUrl}" alt="Immagine Prodotto" class="img-fluid" />
      <p class="font-monospace fs-5">€${product.price}</p>
      <p class="lead">${product.description}</p>
      <p class="fs-2 display-6">${product.brand}</p>`;
  })
  .catch((err) => console.error("Errore nel caricamento prodotti:", err));
