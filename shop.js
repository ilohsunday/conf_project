const container = document.getElementById("product-container");

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {

    const products = [...data]; // Spread operator

    products.forEach(product => {
      container.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card h-100 p-3">
            <img src="${product.image}" height="200" class="object-fit-contain">
            <h5 class="mt-3">${product.title}</h5>
            <p>$${product.price}</p>
            <button class="btn btn-dark mt-auto"
              onclick="addToCart(${product.id}, '${product.title}', ${product.price})">
              Add to Cart
            </button>
          </div>
        </div>
      `;
    });

  })
  .catch(error => console.log("Error:", error));