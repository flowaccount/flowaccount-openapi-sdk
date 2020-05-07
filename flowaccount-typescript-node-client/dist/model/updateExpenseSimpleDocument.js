"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateExpenseDocument_1 = require("./updateExpenseDocument");
class UpdateExpenseSimpleDocument extends updateExpenseDocument_1.UpdateExpenseDocument {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(UpdateExpenseSimpleDocument.attributeTypeMap);
    }
}
UpdateExpenseSimpleDocument.discriminator = undefined;
UpdateExpenseSimpleDocument.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<ExpenseSimpleProductItem>"
    }
];
exports.UpdateExpenseSimpleDocument = UpdateExpenseSimpleDocument;
//# sourceMappingURL=updateExpenseSimpleDocument.js.map