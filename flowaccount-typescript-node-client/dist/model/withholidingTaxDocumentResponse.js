"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WithholidingTaxDocumentResponse {
    static getAttributeTypeMap() {
        return WithholidingTaxDocumentResponse.attributeTypeMap;
    }
}
WithholidingTaxDocumentResponse.discriminator = undefined;
WithholidingTaxDocumentResponse.attributeTypeMap = [
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
        "type": "WithholidingTaxDocumentResponseData"
    }
];
exports.WithholidingTaxDocumentResponse = WithholidingTaxDocumentResponse;
//# sourceMappingURL=withholidingTaxDocumentResponse.js.map