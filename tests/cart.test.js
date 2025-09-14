// tests/cart.test.js
const { addItem, removeItem, getTotalItems } = require("../cart");

describe("Shopping Cart Module", () => {
  let cart;

  beforeEach(() => {
    cart = [];
  });

  // -------- addItem Tests --------
  describe("addItem", () => {
    test("Positive: Add a new item with a valid name and quantity", () => {
      addItem(cart, "apple", 3);
      expect(cart).toEqual([{ name: "apple", quantity: 3 }]);
    });

    test("Positive: Add quantity to an existing item", () => {
      addItem(cart, "apple", 2);
      addItem(cart, "apple", 3);
      expect(cart).toEqual([{ name: "apple", quantity: 5 }]);
    });

    test("Negative: Add an item with a negative quantity", () => {
      expect(() => addItem(cart, "banana", -2)).toThrow("Quantity must be a non-negative number.");
    });

    test("Edge Case: Add an item with a quantity of 0", () => {
      addItem(cart, "orange", 0);
      expect(cart).toEqual([{ name: "orange", quantity: 0 }]);
    });
  });

  // -------- removeItem Tests --------
  describe("removeItem", () => {
    test("Positive: Remove an existing item from the cart", () => {
      addItem(cart, "apple", 3);
      removeItem(cart, "apple");
      expect(cart).toEqual([]);
    });

    test("Negative: Attempt to remove an item not in the cart", () => {
      expect(() => removeItem(cart, "pear")).toThrow("Item not found in cart.");
    });

    test("Edge Case: Remove the last item from the cart", () => {
      addItem(cart, "apple", 2);
      removeItem(cart, "apple");
      expect(cart.length).toBe(0);
    });
  });

  // -------- getTotalItems Tests --------
  describe("getTotalItems", () => {
    test("Positive: Calculate the total number of items correctly", () => {
      addItem(cart, "apple", 2);
      addItem(cart, "banana", 3);
      expect(getTotalItems(cart)).toBe(5);
    });

    test("Negative: Handle an empty cart", () => {
      expect(getTotalItems(cart)).toBe(0);
    });

    test("Edge Case: Calculate with large quantities", () => {
      addItem(cart, "watermelon", 1000000);
      expect(getTotalItems(cart)).toBe(1000000);
    });
  });
});
