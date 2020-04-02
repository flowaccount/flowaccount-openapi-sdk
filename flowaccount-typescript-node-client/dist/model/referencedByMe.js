"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReferencedByMe {
    static getAttributeTypeMap() {
        return ReferencedByMe.attributeTypeMap;
    }
}
ReferencedByMe.discriminator = undefined;
ReferencedByMe.attributeTypeMap = [
    {
        "name": "referenceId",
        "baseName": "referenceId",
        "type": "number"
    },
    {
        "name": "referenceDocumentType",
        "baseName": "referenceDocumentType",
        "type": "number"
    },
    {
        "name": "referenceDocumentSerial",
        "baseName": "referenceDocumentSerial",
        "type": "string"
    },
    {
        "name": "documentId",
        "baseName": "documentId",
        "type": "number"
    },
    {
        "name": "documentSerial",
        "baseName": "documentSerial",
        "type": "number"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "number"
    }
];
exports.ReferencedByMe = ReferencedByMe;
//# sourceMappingURL=referencedByMe.js.map