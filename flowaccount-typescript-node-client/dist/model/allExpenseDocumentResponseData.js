"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AllExpenseDocumentResponseData {
    static getAttributeTypeMap() {
        return AllExpenseDocumentResponseData.attributeTypeMap;
    }
}
AllExpenseDocumentResponseData.discriminator = undefined;
AllExpenseDocumentResponseData.attributeTypeMap = [
    {
        "name": "list",
        "baseName": "list",
        "type": "Array<ExpenseInlineDocumentResponseAllOfData>"
    }
];
exports.AllExpenseDocumentResponseData = AllExpenseDocumentResponseData;
//# sourceMappingURL=allExpenseDocumentResponseData.js.map