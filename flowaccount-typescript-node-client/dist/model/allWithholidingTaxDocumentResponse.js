"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AllWithholidingTaxDocumentResponse {
    static getAttributeTypeMap() {
        return AllWithholidingTaxDocumentResponse.attributeTypeMap;
    }
}
AllWithholidingTaxDocumentResponse.discriminator = undefined;
AllWithholidingTaxDocumentResponse.attributeTypeMap = [
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
        "type": "AllWithholidingTaxDocumentResponseData"
    }
];
exports.AllWithholidingTaxDocumentResponse = AllWithholidingTaxDocumentResponse;
//# sourceMappingURL=allWithholidingTaxDocumentResponse.js.map