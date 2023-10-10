"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyEnum = exports.Transaction = void 0;
var uuid_1 = require("uuid");
var CurrencyEnum;
(function (CurrencyEnum) {
    CurrencyEnum[CurrencyEnum["USD"] = 0] = "USD";
    CurrencyEnum[CurrencyEnum["UAH"] = 1] = "UAH";
})(CurrencyEnum || (exports.CurrencyEnum = CurrencyEnum = {}));
var Transaction = /** @class */ (function () {
    function Transaction(Amount, Currency) {
        this.Amount = Amount;
        this.Currency = Currency;
        this.Id = (0, uuid_1.v4)();
    }
    ;
    return Transaction;
}());
exports.Transaction = Transaction;
