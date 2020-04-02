"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StatusDocument {
    static getAttributeTypeMap() {
        return StatusDocument.attributeTypeMap;
    }
}
StatusDocument.discriminator = undefined;
StatusDocument.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "number"
    },
    {
        "name": "statusString",
        "baseName": "statusString",
        "type": "number"
    },
    {
        "name": "documentType",
        "baseName": "documentType",
        "type": "number"
    },
    {
        "name": "allowDelete",
        "baseName": "allowDelete",
        "type": "boolean"
    }
];
exports.StatusDocument = StatusDocument;
//# sourceMappingURL=statusDocument.js.map