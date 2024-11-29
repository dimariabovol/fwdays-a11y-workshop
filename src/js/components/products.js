const products = async () => {
  let isShowMore = false;
  let cartCount = 0;

  const productList = document.querySelector('.product-list');
  const showMore = document.querySelector('.show-more');

  const response = await fetch('https://fakestoreapi.com/products?limit=8');
  const products = await response.json();

  const renderProductItem = product => {
    return `
      <li>
        <div class="card">
          <img src="${product.image}" class="card-img product-img" alt="" />
          <div class="card-body">
            <h4 class="card-title">${product.title.substring(0, 16)}...</h4>
            <p class="card-text">${product.description.substring(0, 90)}...</p>
            <p class="card-text">${product.price}$</p>
            <div class="btn btn-primary cart-trigger">
              Add to cart
            </div>
          </div>
        </div>
      </li>`;
  };

  const emitUpdateCartEvent = (trigger, cartCount) => {
    return trigger.dispatchEvent(
      new CustomEvent('update-cart', { bubbles: true, detail: { cartCount } })
    );
  };

  const addToCart = () => {
    const cart = document.querySelector('.cart-index');
    const cartTriggers = document.querySelectorAll('.cart-trigger');

    cartTriggers.forEach(trigger =>
      trigger.addEventListener('click', () => {
        cart.textContent = ++cartCount;
        emitUpdateCartEvent(trigger, cartCount);
      })
    );
  };

  const getProducts = () => {
    let visibleProducts = isShowMore ? products : products.slice(0, 4);
    showMore.textContent = isShowMore ? 'Show less' : 'Show more';
    productList.innerHTML = visibleProducts.map(renderProductItem).join('');

    addToCart();
  };

  showMore.addEventListener('click', () => {
    isShowMore = !isShowMore;
    getProducts();
  });

  getProducts();
};

export default products;
