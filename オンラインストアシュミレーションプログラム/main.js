import { product } from "./product.js"; //product.tsのインポート文
import { user } from "./user.js"; //user.tsのインポート文
import { processPurchase } from "./purchase.js"; //Purchaseのインポート文
const sampleProduct = new product(1, "中野二乃", 28000, 5); //productへの値代入（ID、名前、値段、個数）
const sampleUser = new user(101, "Ishii", "ishiiufo.2@icloud.com"); //userへの値入力（ID、名前、メルアド）
processPurchase(sampleUser.ID, sampleProduct); //processPurchaseの関数呼び出し
