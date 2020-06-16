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
        "name": "status",
        "baseName": "status",
        "type": "boolean"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "BankAccountResponseData"
    }
];
exports.BankAccountResponse = BankAccountResponse;
//# sourceMappingURL=bankAccountResponse.js.map