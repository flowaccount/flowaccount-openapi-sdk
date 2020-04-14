"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExpenseSimpleDocumentAllOf {
    static getAttributeTypeMap() {
        return ExpenseSimpleDocumentAllOf.attributeTypeMap;
    }
}
ExpenseSimpleDocumentAllOf.discriminator = undefined;
ExpenseSimpleDocumentAllOf.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<ExpenseSimpleProductItem>"
    }
];
exports.ExpenseSimpleDocumentAllOf = ExpenseSimpleDocumentAllOf;
//# sourceMappingURL=expenseSimpleDocumentAllOf.js.map