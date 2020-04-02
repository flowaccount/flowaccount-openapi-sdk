"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReferencedToMe {
    static getAttributeTypeMap() {
        return ReferencedToMe.attributeTypeMap;
    }
}
ReferencedToMe.discriminator = undefined;
ReferencedToMe.attributeTypeMap = [
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
exports.ReferencedToMe = ReferencedToMe;
//# sourceMappingURL=referencedToMe.js.map