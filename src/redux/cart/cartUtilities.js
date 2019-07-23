export const addItemToCart = (cartItems, itemToAdd) => {
  const updatedItems = [...cartItems];
  const itemIndex = updatedItems.indexOf(itemToAdd);
  updatedItems[itemIndex].quantity += 1;
  return updatedItems
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const updatedItems = [...cartItems];
  const itemIndex = updatedItems.indexOf(itemToRemove);
  updatedItems[itemIndex].quantity -= 1;
  return updatedItems
}