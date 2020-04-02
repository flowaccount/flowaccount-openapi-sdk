"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const documentResponse_1 = require("./documentResponse");
class SimpleDocumentResponse extends documentResponse_1.DocumentResponse {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SimpleDocumentResponse.attributeTypeMap);
    }
}
SimpleDocumentResponse.discriminator = undefined;
SimpleDocumentResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "SimpleDocumentResponseAllOfData"
    }
];
exports.SimpleDocumentResponse = SimpleDocumentResponse;
//# sourceMappingURL=simpleDocumentResponse.js.map