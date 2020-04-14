"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExpenseInlineDocumentAllOf {
    static getAttributeTypeMap() {
        return ExpenseInlineDocumentAllOf.attributeTypeMap;
    }
}
ExpenseInlineDocumentAllOf.discriminator = undefined;
ExpenseInlineDocumentAllOf.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<ExpenseInlineProductItem>"
    },
    {
        "name": "discountType",
        "baseName": "discountType",
        "type": "number"
    },
    {
        "name": "useInlineDiscount",
        "baseName": "useInlineDiscount",
        "type": "boolean"
    },
    {
        "name": "useInlineVat",
        "baseName": "useInlineVat",
        "type": "boolean"
    },
    {
        "name": "exemptAmount",
        "baseName": "exemptAmount",
        "type": "number"
    },
    {
        "name": "vatableAmount",
        "baseName": "vatableAmount",
        "type": "number"
    }
];
exports.ExpenseInlineDocumentAllOf = ExpenseInlineDocumentAllOf;
//# sourceMappingURL=expenseInlineDocumentAllOf.js.map