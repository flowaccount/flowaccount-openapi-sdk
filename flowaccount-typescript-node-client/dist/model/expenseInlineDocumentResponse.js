"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expenseResponse_1 = require("./expenseResponse");
class ExpenseInlineDocumentResponse extends expenseResponse_1.ExpenseResponse {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ExpenseInlineDocumentResponse.attributeTypeMap);
    }
}
ExpenseInlineDocumentResponse.discriminator = undefined;
ExpenseInlineDocumentResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "ExpenseInlineDocumentResponseAllOfData"
    }
];
exports.ExpenseInlineDocumentResponse = ExpenseInlineDocumentResponse;
//# sourceMappingURL=expenseInlineDocumentResponse.js.map