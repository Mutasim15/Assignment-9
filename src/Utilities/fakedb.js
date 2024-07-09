// use local storage to manage cart data
const addToDb = id => {
    let jobCart = getApplyCart();
    // add quantity
    const quantity = jobCart[id];
    if (!quantity) {
        jobCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        jobCart[id] = newQuantity;
    }
    localStorage.setItem('apply-cart', JSON.stringify(cart));
}

const removeFromDb = id => {
    const applyCart  = getApplyCart();
    if (id in applyCart) {
        delete applyCart[id];
        localStorage.setItem('apply-cart', JSON.stringify(cart));
    }
}

const getApplyCart = () => {
    let jobCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('apply-cart');
    if (storedCart) {
        jobCart = JSON.parse(storedCart);
    }
    return jobCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('apply-cart');
}

export {
    addToDb,
    removeFromDb,
    
    deleteShoppingCart
}
