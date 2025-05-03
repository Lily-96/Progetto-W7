const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OTYzYTFjMjUwNDAwMTUxYWI2ZGQiLCJpYXQiOjE3NDYxNzk2NDIsImV4cCI6MTc0NzM4OTI0Mn0.PW3Qt9-UXQSjQKR6gEVTxQd_bn2ejVkkr-ObIxPD_vY";
const Url = "https://striveschool-api.herokuapp.com/api/product/";

fetch(Url, {
  headers: { Authorization: token },
})
  .then((res) => res.json())
  .then((products) => {
    const container = document.getElementById("prodottiLista");
    products.forEach((product) => {
      container.innerHTML += `
          <div class="col-md-4">
            <div class="card border-primary  mb-4">
              <img src="${product.imageUrl}" class="card-img-top " />
              <div class="card-body ">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <a href="details.html?id=${product._id}" id="btn-info" class="btn btn-info ">Scopri di più</a>
                <a href="backoffice.html?productId=${product._id}" id="btn-edit" class="btn btn-warning"><i class="bi bi-pencil-square"></i>Modifica</a>
                <button id="btn-addCart" class="btn btn-primary" onclick="addProduct('${product._id}')"><i class="bi bi-cart-check"></i></button>
              </div>
            </div>
          </div>`;
    });
  })
  .catch((err) => console.error("Errore nel caricamento prodotti:", err));
