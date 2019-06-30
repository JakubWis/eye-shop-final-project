import * as actionTypes from './actions';

const initalState = {
      shoppingItems: [

        
      ],

      cart: [

      ],

      discountCodes: [ ],//value is in percentes ( % )

      userLoggedIn: false,

      userData: null,
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
      case actionTypes.UNSORT:
        const unsortedItemPositioning = action.shoppingItems.sort((a, b) => (a.id > b.id) ? 1 : -1)
        return { ...state, shoppingItems: unsortedItemPositioning}
        
      case actionTypes.SORT_AZ:
        const sortedByAz = action.shoppingItems.sort((a, b) => (a.name > b.name) ? 1 : -1)
        return { ...state, shoppingItems: sortedByAz }

      case actionTypes.SORT_ZA:
        const sortedByZa= action.shoppingItems.sort((a, b) => (a.name < b.name) ? 1 : -1)
        return { ...state, shoppingItems: sortedByZa }

      case actionTypes.SORT_PRICE_ASCENDING:
        const sortedByPriceAsc = action.shoppingItems.sort((a, b) => (a.price > b.price) ? 1 : -1)
        return { ...state, shoppingItems: sortedByPriceAsc }

      case actionTypes.SORT_PRICE_DESCENDING:
        const sortedByPriceDes = action.shoppingItems.sort((a, b) => (a.price < b.price) ? 1 : -1)
        return { ...state, shoppingItems: sortedByPriceDes }
      
      case actionTypes.ADD_TO_CART:
        return { ...state, cart: [...state.cart, action.itemToAdd] }

      case actionTypes.DELETE_FROM_CART:
        const arrWithoutRemovedItem = state.cart.filter((item, index) => index !== action.itemIndex )
        return { ...state, cart: arrWithoutRemovedItem}

      case actionTypes.PICK_SIZE:
        const arrWithPickedSize = state.shoppingItems.map(item => {
          if(item.id === Number(action.itemId))
            item.pickedSize = action.size
          return item
        })
        return { ...state, shoppingItems: arrWithPickedSize}

      case actionTypes.REMOVE_FORM_STORE:
        const arrWithoutJustBoughtItems = state.shoppingItems
        arrWithoutJustBoughtItems.find(storedItem => storedItem.id === Number(action.productId)).size[action.pickedSize] -= 1  
        return { ...state, shoppingItems: arrWithoutJustBoughtItems}

      case actionTypes.ADD_TO_STORE:
        const arrWithItemBackToStore = state.shoppingItems
        arrWithItemBackToStore.find(storedItem => storedItem.id === Number(action.productId)).size[action.pickedSize] += 1  
        return { ...state, shoppingItems: arrWithItemBackToStore}

      case actionTypes.CLEAR_CART:
        return { ...state, cart: []}

      case actionTypes.FETCH_DISCOUNT_CODES:
        return { ...state, discountCodes: action.discountCodes }
      
      case actionTypes.FETCH_SHOPPING_ITEMS:
        return { ...state, shoppingItems: action.shoppingItems }

      case actionTypes.FETCH_PRODUCT: 
        let arrWithNewFetchedProduct = state.shoppingItems
        arrWithNewFetchedProduct.find(item => item.id === Number(action.productId)).size = action.productFromDatabase.size
        return { ...state, shoppingItems: arrWithNewFetchedProduct}

        case actionTypes.FETCH_USER_DATA:
          return { ...state, userData: action.userDataFromDatabes, userLoggedIn: true}
        
        case actionTypes.LOGOUT:
            return { ...state, userData: null, userLoggedIn: false}

      default: return state; 
    };
}

export default reducer;