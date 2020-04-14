"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    static getAttributeTypeMap() {
        return BankAccount.attributeTypeMap;
    }
}
BankAccount.discriminator = undefined;
BankAccount.attributeTypeMap = [
    {
        "name": "bankAccountNumber",
        "baseName": "bankAccountNumber",
        "type": "number"
    },
    {
        "name": "bankAccountName",
        "baseName": "bankAccountName",
        "type": "string"
    },
    {
        "name": "bankAccountType",
        "baseName": "bankAccountType",
        "type": "number"
    },
    {
        "name": "bankBranch",
        "baseName": "bankBranch",
        "type": "string"
    },
    {
        "name": "bankId",
        "baseName": "bankId",
        "type": "number"
    }
];
exports.BankAccount = BankAccount;
//# sourceMappingURL=bankAccount.js.map