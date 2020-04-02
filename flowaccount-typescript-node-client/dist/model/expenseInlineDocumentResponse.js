"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExpenseInlineDocumentResponse {
    static getAttributeTypeMap() {
        return ExpenseInlineDocumentResponse.attributeTypeMap;
    }
}
ExpenseInlineDocumentResponse.discriminator = undefined;
ExpenseInlineDocumentResponse.attributeTypeMap = [
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
        "type": "object & ExpenseInlineDocument"
    }
];
exports.ExpenseInlineDocumentResponse = ExpenseInlineDocumentResponse;
//# sourceMappingURL=expenseInlineDocumentResponse.js.map