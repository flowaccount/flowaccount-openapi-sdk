"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpgradeDocument {
    static getAttributeTypeMap() {
        return UpgradeDocument.attributeTypeMap;
    }
}
UpgradeDocument.discriminator = undefined;
UpgradeDocument.attributeTypeMap = [
    {
        "name": "recordId",
        "baseName": "recordId",
        "type": "number"
    },
    {
        "name": "referenceDocumentSerial",
        "baseName": "referenceDocumentSerial",
        "type": "string"
    },
    {
        "name": "referenceDocumentType",
        "baseName": "referenceDocumentType",
        "type": "number"
    }
];
exports.UpgradeDocument = UpgradeDocument;
//# sourceMappingURL=upgradeDocument.js.map