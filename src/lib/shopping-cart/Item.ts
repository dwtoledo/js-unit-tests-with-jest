import { DiscountCondition } from "./DiscountCondition";
import Product from "./Product";

export default class Item {
  private _quantity: number;
  private _product: Product;
  private _discountCondition: DiscountCondition;

  constructor(quantity: number, product: Product) {
    if (quantity <= 0) {
      throw new Error("only positive quantities are allowed.");
    }

    this._product = product;
    this._quantity = quantity;
  }

  public getQuantity(): number {
    return this._quantity;
  }

  public getProduct(): Product {
    return this._product;
  }

  public updateQuantity(quantity: number): void {
    if (quantity <= 0) {
      throw new Error("only positive quantities are allowed.");
    }
    this._quantity = quantity;
  }

  public getDiscountCondition(): DiscountCondition {
    return this._discountCondition;
  }

  public setDiscountCondition(discountCondition: DiscountCondition): void {
    this._discountCondition = discountCondition;
  }
}
