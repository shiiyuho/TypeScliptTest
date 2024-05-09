import { product } from "./product";

export function processPurchase(user_id: number, product: product): void {
  console.log(`Purchase process for User ID ${user_id} initiated.`);
  product.decreaseStock();
}
