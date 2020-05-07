"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateExpenseDocument_1 = require("./updateExpenseDocument");
class UpdateExpenseInlineDocument extends updateExpenseDocument_1.UpdateExpenseDocument {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(UpdateExpenseInlineDocument.attributeTypeMap);
    }
}
UpdateExpenseInlineDocument.discriminator = undefined;
UpdateExpenseInlineDocument.attributeTypeMap = [
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
exports.UpdateExpenseInlineDocument = UpdateExpenseInlineDocument;
//# sourceMappingURL=updateExpenseInlineDocument.js.map