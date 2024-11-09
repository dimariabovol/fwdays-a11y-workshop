const products = async () => {
  const productList = document.querySelector('.product-list');
  const response = await fetch('https://fakestoreapi.com/products?limit=8');
  const products = await response.json();

  const renderProductItem = product => {
    return `
      <li>
        <article class="card">
          <img src="${product.image}" class="card-img product-img" alt="" />
          <div class="card-body">
            <h3 class="card-title">${product.title.substring(0, 16)}...</h3>
            <p class="card-text">${product.description.substring(0, 90)}...</p>
            <p class="card-text">${product.price}$</p>
            <button type="button" class="btn btn-primary">
              View Details
              <span class="visually-hidden">for ${product.title}</span>
            </button>
          </div>
        </article>
      </li>`;
  };

  products.forEach(product =>
    productList.insertAdjacentHTML('beforeend', renderProductItem(product))
  );
};

export default products;
