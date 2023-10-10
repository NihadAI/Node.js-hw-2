"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction_1 = require("./Transaction");
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.transactions = [];
        return _this;
    }
    Card.prototype.AddTransaction = function (a, b) {
        if (a instanceof Transaction_1.Transaction) {
            this.transactions.push(a);
            return a.Id;
        }
        else if (typeof a === "number" && b !== undefined) {
            var newTransaction = new Transaction_1.Transaction(b, a);
            this.transactions.push(newTransaction);
            return newTransaction.Id;
        }
        else {
            throw new Error("Error");
        }
    };
    Card.prototype.GetTransaction = function (Id) {
        return this.transactions.find(function (transaction) { return transaction.Id === Id; });
    };
    Card.prototype.GetBalance = function (Currency) {
        return this.transactions.reduce(function (total, transaction) {
            if (transaction.Currency === Currency) {
                return total + (transaction.Amount || 0);
            }
            return total;
        }, 0);
    };
    return Card;
}(Transaction_1.Transaction));
exports.default = Card;
