import Checkout from "./Checkout";
import Item from "./Item";
import Product from "./Product";

describe("Checkout Class", () => {
  let items: Array<Item>;

  beforeEach(() => {
    items = new Array<Item>;
  });

  it("should throw an error when creating a checkout instance with negative total", () => {
    expect(() => {
      const checkout = new Checkout(items, -99);
    }).toThrowError();
  });

  it("should throw an error when creating a checkout instance with empty items", () => {
    expect(() => {
      const checkout = new Checkout(items, 99);
    }).toThrowError();
  });

  it("should not throw an error when creating a checkout instance with total equal to zero", () => {
    items.push(new Item(2, new Product()));
    
    expect(() => {
      const checkout = new Checkout(items, 0);
    }).not.toThrowError();
  });

  it('should getTotal function return the total', () => {
    items.push(new Item(2, new Product()));
    const checkout = new Checkout(items, 2);

    expect(checkout.getTotal()).toBe(2);
  });

  it('should getItems function return the items', () => {
    items.push(new Item(2, new Product()));
    const checkout = new Checkout(items, 2);

    expect(checkout.getItems()).toEqual(items);
  });
});
