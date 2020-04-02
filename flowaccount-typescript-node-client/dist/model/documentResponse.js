"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DocumentResponse {
    static getAttributeTypeMap() {
        return DocumentResponse.attributeTypeMap;
    }
}
DocumentResponse.discriminator = "documentStructureType";
DocumentResponse.attributeTypeMap = [
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
        "name": "documentStructureType",
        "baseName": "documentStructureType",
        "type": "string"
    }
];
exports.DocumentResponse = DocumentResponse;
//# sourceMappingURL=documentResponse.js.map