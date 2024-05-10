// book.tsをインポート
import { Book } from "./book.js";
let book1 = new Book("1", "1", 0);
book1.displayInfo(); //ほんの情報
book1.borrowBook(); //借りる前
book1.displayInfo(); //借りた後の情報
