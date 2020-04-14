"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExpenseSimpleDocumentResponse {
    static getAttributeTypeMap() {
        return ExpenseSimpleDocumentResponse.attributeTypeMap;
    }
}
ExpenseSimpleDocumentResponse.discriminator = undefined;
ExpenseSimpleDocumentResponse.attributeTypeMap = [
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
        "type": "object & ExpenseDocument"
    }
];
exports.ExpenseSimpleDocumentResponse = ExpenseSimpleDocumentResponse;
//# sourceMappingURL=expenseSimpleDocumentResponse.js.map