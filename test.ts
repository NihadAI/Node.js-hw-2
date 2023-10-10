import Card from "./src/Card";
import { Transaction, CurrencyEnum } from "./src/Transaction";

const card = new Card();

// AddTransaction with Transaction object
const transaction = new Transaction(100, CurrencyEnum.USD);
const AddTransaction1 = card.AddTransaction(transaction);
console.log("Test 1:", AddTransaction1);

// AddTransaction with currency and amount
const AddTransaction2 = card.AddTransaction(CurrencyEnum.UAH, 200);
console.log("Test 2:", AddTransaction2);


// GetTransaction 
const getTransaction1 = card.GetTransaction(AddTransaction1)
console.log("Transaction by id:", getTransaction1);
const getTransaction2 = card.GetTransaction(AddTransaction2)
console.log("Transaction by id:", getTransaction2);


// GetBalance 
const GetBalanceUAH = card.GetBalance(CurrencyEnum.UAH)
console.log("Balance of currency:", GetBalanceUAH);
const GetBalanceUSD = card.GetBalance(CurrencyEnum.USD)
console.log("Balance of currency:", GetBalanceUSD);

