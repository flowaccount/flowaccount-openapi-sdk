"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExpenseDocumentResponse {
    static getAttributeTypeMap() {
        return ExpenseDocumentResponse.attributeTypeMap;
    }
}
ExpenseDocumentResponse.discriminator = undefined;
ExpenseDocumentResponse.attributeTypeMap = [
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
exports.ExpenseDocumentResponse = ExpenseDocumentResponse;
//# sourceMappingURL=expenseDocumentResponse.js.map