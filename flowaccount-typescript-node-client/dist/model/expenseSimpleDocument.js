"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expenseDocument_1 = require("./expenseDocument");
class ExpenseSimpleDocument extends expenseDocument_1.ExpenseDocument {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ExpenseSimpleDocument.attributeTypeMap);
    }
}
ExpenseSimpleDocument.discriminator = undefined;
ExpenseSimpleDocument.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<ExpenseSimpleProductItem>"
    }
];
exports.ExpenseSimpleDocument = ExpenseSimpleDocument;
//# sourceMappingURL=expenseSimpleDocument.js.map