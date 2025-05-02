const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OTYzYTFjMjUwNDAwMTUxYWI2ZGQiLCJpYXQiOjE3NDYxNzk2NDIsImV4cCI6MTc0NzM4OTI0Mn0.PW3Qt9-UXQSjQKR6gEVTxQd_bn2ejVkkr-ObIxPD_vY";
const Url = "https://striveschool-api.herokuapp.com/api/product/";
const params = new URLSearchParams(window.location.search);
const id = params.get("appId");

const URL = "https://striveschool-api.herokuapp.com/api/product/";

fetch(URL + id)
  .then((resp) => resp.json())
  .then((products) => {
    const container = document.getElementById("prodottiLista");

    container.innerHTML = `
                    <h1>${product.name}</h1>
                    <p class="font-monospace">${product.description}</p>
                    <p class="lead">${product.imageUrl}</p>
                    <p class="fs-3 text-${ product.price? }"></p>

                    
    `;
  })
  .catch((error) => console.log(error));
  });

  
