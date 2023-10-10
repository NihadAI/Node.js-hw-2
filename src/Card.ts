import  {Transaction, CurrencyEnum } from "./Transaction";

class Card extends Transaction {
  transactions: Transaction[] = [];

  AddTransaction(Transaction: Transaction): string;
  AddTransaction(Currency: CurrencyEnum, Amount: number): string;

  AddTransaction(a: Transaction | CurrencyEnum, b?: number): string {
    if (a instanceof Transaction) {
      this.transactions.push(a);
      return a.Id;
    } else if (typeof a === "number" && b !== undefined) {
      const newTransaction = new Transaction(b, a);
      this.transactions.push(newTransaction);
      return newTransaction.Id;
    } else {
      throw new Error("Error");
    }
  }

  GetTransaction(Id: string): Transaction | undefined  {
    return this.transactions.find(transaction => transaction.Id === Id);
  }

  GetBalance(Currency: CurrencyEnum): number   {
    return this.transactions.reduce((total, transaction) => {
      if (transaction.Currency === Currency) {
        return total + (transaction.Amount || 0);
      }
      return total;
    }, 0);
  }
}

export default Card;
