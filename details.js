const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OTYzYTFjMjUwNDAwMTUxYWI2ZGQiLCJpYXQiOjE3NDYxNzk2NDIsImV4cCI6MTc0NzM4OTI0Mn0.PW3Qt9-UXQSjQKR6gEVTxQd_bn2ejVkkr-ObIxPD_vY";
const Url = "https://striveschool-api.herokuapp.com/api/product/";
const params = new URLSearchParams(window.location.search);
const id = params.get("appId");

const URL = "https://striveschool-api.herokuapp.com/api/product/";
fetch(Url, {
  headers: { Authorization: token },
})
  .then((res) => res.json())
  .then((products) => {
    const container = document.getElementById("prodotti");
    products.forEach((product) => {
      container.innerHTML += `
          <div class="col-md-4">
            
              <img src="${product.imageUrl}" class="img" />
              
                <h5 class="title">${product.name}</h5>
                <p class="text">${product.description}</p>
                <p class="text">${product.price}</p>
                <p class="text">${product.brand}</p>
                
                <button id="btn-addCart" class="btn btn-primary" onclick="addProduct('${product._id}')"><i class="bi bi-cart-check"></i></button>
              
            
          </div>`;
    });
  })
  .catch((err) => console.error("Errore nel caricamento prodotti:", err));
