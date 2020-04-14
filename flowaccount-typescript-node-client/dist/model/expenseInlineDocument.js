"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expenseDocument_1 = require("./expenseDocument");
class ExpenseInlineDocument extends expenseDocument_1.ExpenseDocument {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ExpenseInlineDocument.attributeTypeMap);
    }
}
ExpenseInlineDocument.discriminator = undefined;
ExpenseInlineDocument.attributeTypeMap = [
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
exports.ExpenseInlineDocument = ExpenseInlineDocument;
//# sourceMappingURL=expenseInlineDocument.js.map