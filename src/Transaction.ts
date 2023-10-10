import { v4 } from "uuid"; 

enum CurrencyEnum {
  USD,  
  UAH,  
}

class Transaction {
  Id: string = v4();;
  constructor(public Amount?: number, public Currency?: CurrencyEnum) { 
  }
}

export {Transaction, CurrencyEnum}