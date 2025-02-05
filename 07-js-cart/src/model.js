const products = [
    {
        id: 'jorts',
        name: 'Jorts',
        price: 0.99,
        image: 'http://placehold.co/150x150?text=Jorts'
    },
    {
        id: 'jean',
        name: 'Jean',
        price: 3.14,
        image: 'http://placehold.co/150x150?text=Jean'
    },
    {
        id: 'nyancat',
        name: 'Nyancat',
        price: 2.73,
        image: 'http://placehold.co/150x150?text=Nyancat'
    }
];

const state = {
    cart: new Map(), 
    isCartVisible: false
};

function addToCart(productId) {
    const currentQty = state.cart.get(productId) || 0;
    state.cart.set(productId, currentQty + 1);
}

function updateQuantity(productId, quantity) {
    const newQty = parseInt(quantity, 10);
    if (newQty > 0) {
        state.cart.set(productId, newQty);
    } else {
        state.cart.delete(productId);
    }
}

function checkout() {
    state.cart.clear();
    state.isCartVisible = false;
}

function toggleCart() {
    state.isCartVisible = !state.isCartVisible;
}

function getTotalItems() {
    let total = 0;
    for (const qty of state.cart.values()) {
        total += qty;
    }
    return total;
}

function getCartTotal() {
    let total = 0;
    for (const [productId, qty] of state.cart.entries()) {
        const product = products.find(p => p.id === productId);
        total += product.price * qty;
    }
    return total.toFixed(2);
}
export {
    products,
    state,
    addToCart,
    updateQuantity,
    checkout,
    toggleCart,
    getTotalItems,
    getCartTotal
};