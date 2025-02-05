import {
    products,
    state,
    addToCart,
    updateQuantity,
    checkout,
    toggleCart,
    getTotalItems,
    getCartTotal
} from './model.js';
const app = document.querySelector('#app');
function renderProduct(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <button type="button" class="add-to-cart" data-product-id="${product.id}">
                Add to Cart
            </button>
        </div>
    `;
}
function renderCartItem(product, quantity) {
    const total = (product.price * quantity).toFixed(2);
    return `
        <div class="cart-item">
            <img src="${product.image}" alt="${product.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${product.name}</h4>
                <p>$${product.price.toFixed(2)} each</p>
                <label>
                    Quantity: 
                    <input 
                        type="number" 
                        class="quantity-input" 
                        data-product-id="${product.id}" 
                        value="${quantity}" 
                        min="0"
                    >
                </label>
                <p>Total: $${total}</p>
            </div>
        </div>
    `;
}
function render() {
    
    const productsHtml = `
        <div class="products-grid">
            ${products.map(renderProduct).join('')}
        </div>
    `;
    const cartButtonHtml = !state.isCartVisible ? `
        <button type="button" class="view-cart" id="view-cart">
            View Cart ${getTotalItems() > 0 ? `(${getTotalItems()})` : ''}
        </button>
    ` : '';
    const cartHtml = state.isCartVisible ? `
        <div class="cart-content">
            <h2>Shopping Cart</h2>
            ${state.cart.size === 0 ? 
                '<p>Nothing in the cart</p>' :
                Array.from(state.cart.entries()).map(([productId, quantity]) => {
                    const product = products.find(p => p.id === productId);
                    return renderCartItem(product, quantity);
                }).join('')
            }
            ${state.cart.size > 0 ? `
                <div class="cart-total">
                    <p>Total: $${getCartTotal()}</p>
                </div>
            ` : ''}
            <div class="cart-buttons">
                <button type="button" class="hide-cart">Hide Cart</button>
                <button type="button" class="checkout">Checkout</button>
            </div>
        </div>
    ` : '';
    app.innerHTML = `
        ${productsHtml}
        ${cartButtonHtml}
        ${cartHtml}
    `;
}
app.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const productId = e.target.dataset.productId;
        addToCart(productId);
        render();
    } else if (e.target.classList.contains('view-cart')) {
        toggleCart();
        render();
    } else if (e.target.classList.contains('hide-cart')) {
        toggleCart();
        render();
    } else if (e.target.classList.contains('checkout')) {
        checkout();
        render();
    }
});
app.addEventListener('change', (e) => {
    if (e.target.classList.contains('quantity-input')) {
        const productId = e.target.dataset.productId;
        updateQuantity(productId, e.target.value);
        render();
    }
});
render();