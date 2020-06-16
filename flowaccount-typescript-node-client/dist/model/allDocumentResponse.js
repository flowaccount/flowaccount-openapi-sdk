"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AllDocumentResponse {
    static getAttributeTypeMap() {
        return AllDocumentResponse.attributeTypeMap;
    }
}
AllDocumentResponse.discriminator = undefined;
AllDocumentResponse.attributeTypeMap = [
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
        "type": "AllDocumentResponseData"
    }
];
exports.AllDocumentResponse = AllDocumentResponse;
//# sourceMappingURL=allDocumentResponse.js.map