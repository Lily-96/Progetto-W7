const Url = "https://striveschool-api.herokuapp.com/api/product/";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OTYzYTFjMjUwNDAwMTUxYWI2ZGQiLCJpYXQiOjE3NDYxNzk2NDIsImV4cCI6MTc0NzM4OTI0Mn0.PW3Qt9-UXQSjQKR6gEVTxQd_bn2ejVkkr-ObIxPD_vY";

const params = new URLSearchParams(window.location.search);
const id = params.get("productId");

console.log("ID", id);

const URL = id ? "https://striveschool-api.herokuapp.com/api/product/" + id : "https://striveschool-api.herokuapp.com/api/product/";
const method = id ? "PUT" : "POST";

const form = document.getElementById("backoffice-form");

window.onload = function () {
  const subtitle = document.getElementById("subtitle");

  if (id) {
    subtitle.innerText = "— Modifica prodotto";

    delBtn.classList.remove("d-none");

    fetch(URL, {
      headers: { Authorization: token },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Errore nella fetch");
        }
        return resp.json();
      })
      .then((product) => {
        document.getElementById("name").value = product.name;
        document.getElementById("description").value = product.description;
        document.getElementById("price").value = product.price;
        document.getElementById("imageUrl").value = product.imageUrl;
      })
      .catch((error) => console.log(error));
  } else {
    subtitle.innerText = "— Crea prodotto";
  }
};
let products = [];
form.onsubmit = function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const descriptionInput = document.getElementById("description");
  const priceInput = document.getElementById("price");
  const imageUrlInput = document.getElementById("imageUrl");
  const brandInput = document.getElementById("brand");

  const newProduct = {
    name: nameInput.value,
    description: descriptionInput.value,
    price: priceInput.value,
    imageUrl: imageUrlInput.value,
    brand: brandInput.value,
  };

  fetch(URL, {
    method: method,
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Errore nella fetch");
      }
      return resp.json();
    })
    .then((createdProduct) => {
      if (id) {
        alert("Hai modificato il prodotto " + createdProduct.name);
        window.location.assign("./index.html");
      } else {
        alert("Prodotto con id " + createdProduct._id + " creato correttamente");
        form.reset();
      }
    })
    .catch((error) => console.log(error));

  console.log("SUBMIT", newProduct);
};
const delBtn = document.getElementById("delete-btn");
delBtn.onclick = function () {
  if (confirm("Sei sicuro di voler eliminare questo prodotto?")) {
    fetch(URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((resp) => {
        if (resp.ok) {
          alert("Hai correttamente eliminato il prodotto");
          window.location.assign("./index.html");
        } else {
          throw new Error("Errore nella cancellazione del prodotto");
        }
      })
      .catch((error) => console.log(error));
  }
};
const resetBtn = document.getElementById("reset-btn");
resetBtn.onclick = function () {
  if (id) {
    document.getElementById("name").value = originalProduct.name;
    document.getElementById("description").value = originalProduct.description;
    document.getElementById("price").value = originalProduct.price;
    document.getElementById("imageUrl").value = originalProduct.imageUrl;
    document.getElementById("brand").value = originalProduct.brand;
  } else {
    form.reset();
  }
};
