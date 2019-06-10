import * as actionTypes from './actions';

const initalState = {
      shoppingItems: [
        {
          id: 0,
          name: 'T-shirt .ajej',
          price: 99.00,
          photoLink: "https://i.ibb.co/19TZNc3/t-shirt.png",
          description: 'Vivamus vulputate nec nisl ut euismod. Proin accumsan bibendum aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec a urna sem. Cras volutpat lectus tortor, ut viverra quam tempus in. Morbi vel sagittis massa. Vestibulum sodales libero non consequat condimentum. Donec semper lacus non velit aliquet volutpat. Sed pulvinar gravida turpis egestas mattis. Praesent et sapien neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris id volutpat leo. In tincidunt sit amet risus sed tempus. Nulla in elit et sem finibus facilisis nec et erat. Duis auctor blandit nibh, nec convallis odio venenatis eget.',
          size: {
            S: 1,
            M: 3,
            L: 0,
            XL: 20,
          },
          pickedSize: null,
        },
        {
          id: 1,
          name: 'T-shirt .eye',
          price: 79.00,
          photoLink: "https://i.ibb.co/19TZNc3/t-shirt.png",
          description: 'Vivamus vulputate nec nisl ut euismod. Proin accumsan bibendum aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec a urna sem. Cras volutpat lectus tortor, ut viverra quam tempus in. Morbi vel sagittis massa. Vestibulum sodales libero non consequat condimentum. Donec semper lacus non velit aliquet volutpat. Sed pulvinar gravida turpis egestas mattis. Praesent et sapien neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris id volutpat leo. In tincidunt sit amet risus sed tempus. Nulla in elit et sem finibus facilisis nec et erat. Duis auctor blandit nibh, nec convallis odio venenatis eget.',
          size: {
            S: 50,
            M: 100,
            L: 50,
            XL: 20,
          },
          pickedSize: null,
        },
        {
          id: 2,
          name: 'T-shirt .eye',
          price: 79.00,
          photoLink: "https://i.ibb.co/19TZNc3/t-shirt.png",
          description: 'Vivamus vulputate nec nisl ut euismod. Proin accumsan bibendum aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec a urna sem. Cras volutpat lectus tortor, ut viverra quam tempus in. Morbi vel sagittis massa. Vestibulum sodales libero non consequat condimentum. Donec semper lacus non velit aliquet volutpat. Sed pulvinar gravida turpis egestas mattis. Praesent et sapien neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris id volutpat leo. In tincidunt sit amet risus sed tempus. Nulla in elit et sem finibus facilisis nec et erat. Duis auctor blandit nibh, nec convallis odio venenatis eget.',
          size: {
            S: 50,
            M: 100,
            L: 50,
            XL: 20,
          },
          pickedSize: null,
        },
        {
          id: 3,
          name: 'T-shirt .eye',
          price: 50.00,
          photoLink: "https://i.ibb.co/19TZNc3/t-shirt.png",
          description: 'Vivamus vulputate nec nisl ut euismod. Proin accumsan bibendum aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec a urna sem. Cras volutpat lectus tortor, ut viverra quam tempus in. Morbi vel sagittis massa. Vestibulum sodales libero non consequat condimentum. Donec semper lacus non velit aliquet volutpat. Sed pulvinar gravida turpis egestas mattis. Praesent et sapien neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris id volutpat leo. In tincidunt sit amet risus sed tempus. Nulla in elit et sem finibus facilisis nec et erat. Duis auctor blandit nibh, nec convallis odio venenatis eget.',
          size: {
            S: 50,
            M: 100,
            L: 50,
            XL: 20,
          },
          pickedSize: null,
        },
        {
          id: 4,
          name: 'T-shirt .heyo',
          price: 99.00,
          photoLink: "https://i.ibb.co/19TZNc3/t-shirt.png",
          description: 'Vivamus vulputate nec nisl ut euismod. Proin accumsan bibendum aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec a urna sem. Cras volutpat lectus tortor, ut viverra quam tempus in. Morbi vel sagittis massa. Vestibulum sodales libero non consequat condimentum. Donec semper lacus non velit aliquet volutpat. Sed pulvinar gravida turpis egestas mattis. Praesent et sapien neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris id volutpat leo. In tincidunt sit amet risus sed tempus. Nulla in elit et sem finibus facilisis nec et erat. Duis auctor blandit nibh, nec convallis odio venenatis eget.',
          size: {
            S: 50,
            M: 100,
            L: 50,
            XL: 20,
          },
          pickedSize: null,
        },
        {
          id: 5,
          name: 'T-shirt .aya',
          price: 100.50,
          photoLink: "https://i.ibb.co/19TZNc3/t-shirt.png",
          description: 'Vivamus vulputate nec nisl ut euismod. Proin accumsan bibendum aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec a urna sem. Cras volutpat lectus tortor, ut viverra quam tempus in. Morbi vel sagittis massa. Vestibulum sodales libero non consequat condimentum. Donec semper lacus non velit aliquet volutpat. Sed pulvinar gravida turpis egestas mattis. Praesent et sapien neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris id volutpat leo. In tincidunt sit amet risus sed tempus. Nulla in elit et sem finibus facilisis nec et erat. Duis auctor blandit nibh, nec convallis odio venenatis eget.',
          size: {
            S: 50,
            M: 100,
            L: 50,
            XL: 20,
          },
          pickedSize: null,
        },
        {
          id: 6,
          name: 'T-shirt .eye',
          price: 79.00,
          photoLink: "https://i.ibb.co/19TZNc3/t-shirt.png",
          description: 'Vivamus vulputate nec nisl ut euismod. Proin accumsan bibendum aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec a urna sem. Cras volutpat lectus tortor, ut viverra quam tempus in. Morbi vel sagittis massa. Vestibulum sodales libero non consequat condimentum. Donec semper lacus non velit aliquet volutpat. Sed pulvinar gravida turpis egestas mattis. Praesent et sapien neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris id volutpat leo. In tincidunt sit amet risus sed tempus. Nulla in elit et sem finibus facilisis nec et erat. Duis auctor blandit nibh, nec convallis odio venenatis eget.',
          extra: 'Nowość',
          size: {
            S: 50,
            M: 100,
            L: 50,
            XL: 20,
          },
          pickedSize: null,
        },
        {
          id: 7,
          name: 'T-shirt .wwww',
          price: 79.00,
          photoLink: "https://i.ibb.co/19TZNc3/t-shirt.png",
          description: 'Vivamus vulputate nec nisl ut euismod. Proin accumsan bibendum aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec a urna sem. Cras volutpat lectus tortor, ut viverra quam tempus in. Morbi vel sagittis massa. Vestibulum sodales libero non consequat condimentum. Donec semper lacus non velit aliquet volutpat. Sed pulvinar gravida turpis egestas mattis. Praesent et sapien neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris id volutpat leo. In tincidunt sit amet risus sed tempus. Nulla in elit et sem finibus facilisis nec et erat. Duis auctor blandit nibh, nec convallis odio venenatis eget.',
          extra: 'Ostatnia sztuka',
          size: {
            S: 50,
            M: 100,
            L: 50,
            XL: 20,
          },
          pickedSize: null,
        },
      ],

      cart: [

      ]
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
      case actionTypes.UNSORT:
        const unsortedItemPositioning = action.shoppingItems.sort((a, b) => (a.id > b.id) ? 1 : -1)
        return { ...state, shoppingItems: unsortedItemPositioning}
        
      case actionTypes.SORT_AZ:
        const sortedByAz = action.shoppingItems.sort((a, b) => (a.name < b.name) ? 1 : -1)
        return { ...state, shoppingItems: sortedByAz }

      case actionTypes.SORT_ZA:
        const sortedByZa= action.shoppingItems.sort((a, b) => (a.name > b.name) ? 1 : -1)
        return { ...state, shoppingItems: sortedByZa }

      case actionTypes.SORT_PRICE_ASCENDING:
        const sortedByPriceAsc = action.shoppingItems.sort((a, b) => (a.price < b.price) ? 1 : -1)
        return { ...state, shoppingItems: sortedByPriceAsc }

      case actionTypes.SORT_PRICE_DESCENDING:
        const sortedByPriceDes = action.shoppingItems.sort((a, b) => (a.price > b.price) ? 1 : -1)
        return { ...state, shoppingItems: sortedByPriceDes }
      
      case actionTypes.ADD_TO_CART:
        const coppyOfCart = action.cart
        coppyOfCart.push(action.itemToAdd)
        return { ...state, cart: coppyOfCart }

      case actionTypes.DELETE_FROM_CART:
        const arrWithoutRemovedItem = action.cart.filter((item, index) => index !== action.itemIndex )
        console.log(arrWithoutRemovedItem)
        return { ...state, cart: arrWithoutRemovedItem}

      case actionTypes.PICK_SIZE:
        const arrWithPickedSize = action.shoppingItems.map(item => {
          if(item.id == action.itemId)
            item.pickedSize = action.size
          return item
        })
        return { ...state, shoppingItems: arrWithPickedSize}

      default: return state; 
    };
}

export default reducer;