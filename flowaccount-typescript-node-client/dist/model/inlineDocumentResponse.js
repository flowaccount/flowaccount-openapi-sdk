"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const documentResponse_1 = require("./documentResponse");
class InlineDocumentResponse extends documentResponse_1.DocumentResponse {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(InlineDocumentResponse.attributeTypeMap);
    }
}
InlineDocumentResponse.discriminator = undefined;
InlineDocumentResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "InlineDocumentResponseAllOfData"
    }
];
exports.InlineDocumentResponse = InlineDocumentResponse;
//# sourceMappingURL=inlineDocumentResponse.js.map