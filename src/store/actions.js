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

export const FETCH_DISCOUNT_CODES = 'FETCH_DISCOUNT_CODES'
export const FETCH_SHOPPING_ITEMS = 'FETCH_SHOPPING_ITEMS'
export const FETCH_PRODUCT = 'FETCH_PRODUCT'

export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const FETCH_USER_DATA = 'FETCH_USER_DATA' 
export const LOGOUT = 'LOGUT'

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

export const addToCart = (itemToAdd) => {
    return {
        type: ADD_TO_CART,
        itemToAdd
    }
}

export const deleteFromCart = (itemIndex) => {
    return {
        type: DELETE_FROM_CART,
        itemIndex
    }
}

export const pickSize = (itemId, size) => {
    return {
        type: PICK_SIZE,
        itemId,
        size
    }
}

export const removeFromStore = ( productId, pickedSize) => {
    return {
        type: REMOVE_FORM_STORE,
        productId,
        pickedSize
    }
}

export const addToStore = (  productId, pickedSize ) => {
    return {
        type: ADD_TO_STORE,
        productId, 
        pickedSize
    }
}

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

export const fetchDiscountCodes = (discountCodes) => {
    return {
        type: FETCH_DISCOUNT_CODES,
        discountCodes,
    }
}

export const fetchShoppingItems = (shoppingItems) => {
    return {
        type: FETCH_SHOPPING_ITEMS,
        shoppingItems,
    }
}

export const fetchProduct = (productFromDatabase, productId) => {
    return {
        type: FETCH_PRODUCT,
        productFromDatabase,
        productId,
    }
}

export const authSucces = (userId, userToken) => {
    localStorage.setItem('loggedUserId', userId)
    localStorage.setItem('userToken', userToken)
    return {
        type: AUTH_SUCCESS,
    }
}

export const fetchUserData = (userDataFromDatabes) => {
    return {
        type: FETCH_USER_DATA,
        userDataFromDatabes,
    }
}

export const logout = () => {
    localStorage.removeItem('loggedUserId')
    localStorage.removeItem('expiresAt')
    return {
        type: LOGOUT,
    }
}