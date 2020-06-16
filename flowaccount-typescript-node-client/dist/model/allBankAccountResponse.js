"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AllBankAccountResponse {
    static getAttributeTypeMap() {
        return AllBankAccountResponse.attributeTypeMap;
    }
}
AllBankAccountResponse.discriminator = undefined;
AllBankAccountResponse.attributeTypeMap = [
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
        "type": "Array<BankAccountResponseData>"
    }
];
exports.AllBankAccountResponse = AllBankAccountResponse;
//# sourceMappingURL=allBankAccountResponse.js.map