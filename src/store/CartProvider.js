import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //for adding items
    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[exisitingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
      };
      updatedItems = [...state.items];
      updatedItems[exisitingCartItemIndex] = updateItem;
    } else {
      //adding new item for the first time
      updatedItems = state.items.concat(action.item);
    }

    const updatedAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "REM") {
    let updatedItems;
    let updatedTotalAmount;
    let amount;
    //for checking existing item
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const exisistingItem = state.items[existingCartItemIndex];

    amount = exisistingItem.price * exisistingItem.quantity; //it will grap total amount of pertiular item
    updatedTotalAmount = state.totalAmount - amount;
    updatedItems = state.items.filter((item) => item.id !== action.id);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispachCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispachCartAction({ type: "ADD", item: item });
  };

  const removeItemFormCartHandler = (id) => {
    dispachCartAction({ type: "REM", id });
    console.log("in remove reducer", id);
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFormCartHandler,
  };

  //localStorage.setItem(authCtx.email, JSON.stringify(cartContext));

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
