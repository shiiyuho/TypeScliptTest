import { product } from "./product.js";
import { user } from "./user.js";
import { processPurchase } from "./purchase.js";

const sampleProduct = new product(1, "Nakano Nino", 28000, 5);
const sampleUser = new user(101, "Ishii", "ishiiufo.2@icloud.com");

processPurchase(sampleUser.ID, sampleProduct);
