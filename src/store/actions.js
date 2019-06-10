//types
export const UNSORT = 'UNSORT'
export const SORT_AZ = 'SORT_AZ'
export const SORT_ZA = 'SORT_ZA'
export const SORT_PRICE_ASCENDING = 'SORT_PRICE_ASCENDING'
export const SORT_PRICE_DESCENDING = 'SORT_PRICE_DESCENDING'

export const ADD_TO_CART = 'ADD_TO_CART'
export const UPDATE_CART = 'UPDATE_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'

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

