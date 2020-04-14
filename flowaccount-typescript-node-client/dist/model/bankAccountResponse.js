"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccountResponse {
    static getAttributeTypeMap() {
        return BankAccountResponse.attributeTypeMap;
    }
}
BankAccountResponse.discriminator = undefined;
BankAccountResponse.attributeTypeMap = [
    {
        "name": "bankAccountId",
        "baseName": "bankAccountId",
        "type": "number"
    },
    {
        "name": "bankAccountNumber",
        "baseName": "bankAccountNumber",
        "type": "string"
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
    },
    {
        "name": "bankName",
        "baseName": "bankName",
        "type": "string"
    }
];
exports.BankAccountResponse = BankAccountResponse;
//# sourceMappingURL=bankAccountResponse.js.map