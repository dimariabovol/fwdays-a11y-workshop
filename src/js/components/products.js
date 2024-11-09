const products = async () => {
  let isShowMore = false;

  const productList = document.querySelector('.product-list');
  const showMore = document.querySelector('.show-more');

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
              Add to cart <span class="visually-hidden">${product.title}</span>
            </button>
          </div>
        </article>
      </li>`;
  };

  const getProducts = () => {
    let visibleProducts = isShowMore ? products : products.slice(0, 4);
    showMore.textContent = isShowMore ? 'Show less' : 'Show more';
    productList.innerHTML = visibleProducts.map(renderProductItem).join('');
  };

  showMore.addEventListener('click', () => {
    isShowMore = !isShowMore;
    getProducts();
  });

  getProducts();
};

export default products;
