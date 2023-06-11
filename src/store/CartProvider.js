import React, { useReducer, useContext } from "react";
import CartContext from "./cart-context";
import AuthContext from "./auth-context";

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
  const authCtx = useContext(AuthContext);

  const [cartState, dispachCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  let userEmail = authCtx.email.replace("@", "").replace(".", "");

  const addItemToCartHandler = async (item) => {
    dispachCartAction({ type: "ADD", item: item });
    console.log(item, cartState.totalAmount);
    console.log(userEmail);
    const Response = await fetch(
      `https://crudcrud.com/api/987f59d1e4fc44759a886da631fe2c62/${userEmail}`,
      {
        method: "POST",
        body: JSON.stringify({
          items: item,
          totalAmount: cartState.totalAmount,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await Response.json();
    console.log(data);
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
