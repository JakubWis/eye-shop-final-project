//types
export const UNSORT = 'UNSORT'
export const SORT_AZ = 'SORT_AZ'
export const SORT_ZA = 'SORT_ZA'
export const SORT_PRICE_ASCENDING = 'SORT_PRICE_ASCENDING'
export const SORT_PRICE_DESCENDING = 'SORT_PRICE_DESCENDING'

export const ADD_TO_CART = 'ADD_TO_CART'
export const UPDATE_CART = 'UPDATE_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'
export const BUY_PRODUCTS = 'BUY_PRODUCTS'
export const CLEAR_CART = 'CLEAR_CART'
export const REMOVE_FORM_STORE = 'REMOVE_FORM_STORE'
export const ADD_TO_STORE = 'ADD_TO_STORE'

export const PICK_SIZE = 'PICK_SIZE'

//creators
export const unsort = (shoppingItems) => {
    return {
        type: UNSORT,
        shoppingItems
    }
}

export const sortAz = (shoppingItems) => {
    return {
        type: SORT_AZ,
        shoppingItems
    }
}

export const sortZa = (shoppingItems) => {
    return {
        type: SORT_ZA,
        shoppingItems
    }
}

export const sortPriceAscending = (shoppingItems) => {
    return {
        type: SORT_PRICE_ASCENDING,
        shoppingItems
    }
}

export const sortPriceDescending = (shoppingItems) => {
    return {
        type: SORT_PRICE_DESCENDING,
        shoppingItems
    }
}

export const addToCart = (itemToAdd, cart) => {
    return {
        type: ADD_TO_CART,
        itemToAdd,
        cart
    }
}

export const delteFromCart = (itemIndex, cart) => {
    return {
        type: DELETE_FROM_CART,
        itemIndex,
        cart
    }
}

export const pickSize = (itemId, size, shoppingItems) => {
    return {
        type: PICK_SIZE,
        itemId,
        size,
        shoppingItems
    }
}

export const removeFromStore = ( shoppingItems, productId, pickedSize) => {
    return {
        type: REMOVE_FORM_STORE,
        shoppingItems,
        productId,
        pickedSize,
    }
}

export const addToStore = ( shoppingItems, productId, pickedSize ) => {
    return {
        type: ADD_TO_STORE,
        shoppingItems, 
        productId, 
        pickedSize
    }
}
//CHANGE WHEN DATABASE!!!!!!
export const buyProducts = ( cart, shoppingItems ) => {
    return {
        type: BUY_PRODUCTS,
        cart, 
        shoppingItems,
    }
}

export const clearCart = ( cart ) => {
    return {
        type: CLEAR_CART,
        cart,
    }
}

