"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AllExpenseDocumentResponse {
    static getAttributeTypeMap() {
        return AllExpenseDocumentResponse.attributeTypeMap;
    }
}
AllExpenseDocumentResponse.discriminator = undefined;
AllExpenseDocumentResponse.attributeTypeMap = [
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
        "type": "AllExpenseDocumentResponseData"
    }
];
exports.AllExpenseDocumentResponse = AllExpenseDocumentResponse;
//# sourceMappingURL=allExpenseDocumentResponse.js.map