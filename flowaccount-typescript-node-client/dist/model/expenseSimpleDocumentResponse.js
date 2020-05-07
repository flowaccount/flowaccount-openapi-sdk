"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expenseResponse_1 = require("./expenseResponse");
class ExpenseSimpleDocumentResponse extends expenseResponse_1.ExpenseResponse {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ExpenseSimpleDocumentResponse.attributeTypeMap);
    }
}
ExpenseSimpleDocumentResponse.discriminator = undefined;
ExpenseSimpleDocumentResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "ExpenseSimpleDocumentResponseAllOfData"
    }
];
exports.ExpenseSimpleDocumentResponse = ExpenseSimpleDocumentResponse;
//# sourceMappingURL=expenseSimpleDocumentResponse.js.map