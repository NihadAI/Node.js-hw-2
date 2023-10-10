"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = require("./src/Card");
var Transaction_1 = require("./src/Transaction");
var card = new Card_1.default();
// AddTransaction with Transaction object
var transaction = new Transaction_1.Transaction(100, Transaction_1.CurrencyEnum.USD);
var AddTransaction1 = card.AddTransaction(transaction);
console.log("Test 1:", AddTransaction1);
// AddTransaction with currency and amount
var AddTransaction2 = card.AddTransaction(Transaction_1.CurrencyEnum.UAH, 200);
console.log("Test 2:", AddTransaction2);
// GetTransaction 
var getTransaction1 = card.GetTransaction(AddTransaction1);
console.log("Transaction by id:", getTransaction1);
var getTransaction2 = card.GetTransaction(AddTransaction2);
console.log("Transaction by id:", getTransaction2);
// GetBalance 
var GetBalanceUAH = card.GetBalance(Transaction_1.CurrencyEnum.UAH);
console.log("Balance of currenct:", GetBalanceUAH);
var GetBalanceUSD = card.GetBalance(Transaction_1.CurrencyEnum.USD);
console.log("Balance of currenct:", GetBalanceUSD);
