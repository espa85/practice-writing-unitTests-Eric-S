// cart.js

/*
Test-Driven Development | Lesson 1
Practice: Writing Unit Tests
Instructions
Implement and test a basic shopping cart module. The module should include the
following methods:
1. addItem(cart, item, quantity): Adds an item to the cart.
2. removeItem(cart, item): Removes an item from the cart.
3. getTotalItems(cart): Returns the total number of items in the cart.
Tasks
1. Define the Module:
○ Create a file named cart.js and define the required methods.
○ Export the methods using module.exports.
2. Write Unit Tests:
○ Create a tests folder and add a file named cart.test.js.
○ Write tests for each method in the cart.js module, covering:
■ Positive Tests: Valid inputs producing expected results.
■ Negative Tests: Invalid inputs handled gracefully.
■ Edge Cases: Unusual or extreme values.
3. Run the Tests:
○ Use npm test to execute the tests and verify that all pass.
4. Refactor:
○ If any tests fail, modify the implementation in cart.js to pass all tests.
Example Scenarios for Testing:
1. addItem
○ Positive: Add a new item with a valid name and quantity.
○ Negative: Add an item with a negative quantity.
○ Edge Case: Add an item with a quantity of 0.
2. removeItem
○ Positive: Remove an existing item from the cart.
○ Negative: Attempt to remove an item not in the cart.
1
○ Edge Case: Remove the last item from the cart.
3. getTotalItems
○ Positive: Calculate the total number of items correctly.
○ Negative: Handle an empty cart.
○ Edge Case: Calculate with large quantities.
*/

//1. addItem(cart, item, quantity): Adds an item to the cart.
function addItem(cart, item, quantity) {
  if (typeof item !== "string" || item.trim() === "") {
    throw new Error("Invalid item name.");
  }
  if (typeof quantity !== "number" || quantity < 0) {
    throw new Error("Quantity must be a non-negative number.");
  }

  const existingItem = inCart(cart, item);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ name: item, quantity });
  }

  return cart;
}

function inCart(cart, item) { //checks if item exists in cart
    return exists = cart.find(cartItem => cartItem.name === item);
} //returns true if it exists, otherwise false

function itemIndex (cart, item) { //checks where it is at in the cart
    return cart.findIndex(cartItem => cartItem.name === item);
} //returns it's position in the cart array

function removeItem(cart, item) {
    const index = itemIndex(cart, item); //finds item
    if (index === -1) { //if it doesn't exist
        throw new Error("Item not found in cart."); //report error
    }
    cart.splice(index, 1); //otherwise remove the item from the cart
    return cart; //return new cart contents
}

function getTotalItems(cart) {
    if (!Array.isArray(cart)) {  //if cart is not a valid array type
        throw new Error("Cart must be an array."); // report error
    }
    let total = 0;
    cart.forEach(cartItem => {
        total += cartItem.quantity;
    });
    return total;
}

module.exports = {
  addItem,
  removeItem,
  getTotalItems,
};
