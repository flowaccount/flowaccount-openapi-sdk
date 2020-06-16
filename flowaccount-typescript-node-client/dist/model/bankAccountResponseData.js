"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccountResponseData {
    static getAttributeTypeMap() {
        return BankAccountResponseData.attributeTypeMap;
    }
}
BankAccountResponseData.discriminator = undefined;
BankAccountResponseData.attributeTypeMap = [
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
exports.BankAccountResponseData = BankAccountResponseData;
//# sourceMappingURL=bankAccountResponseData.js.map