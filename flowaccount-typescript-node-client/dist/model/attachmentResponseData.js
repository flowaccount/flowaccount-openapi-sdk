"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AttachmentResponseData {
    static getAttributeTypeMap() {
        return AttachmentResponseData.attributeTypeMap;
    }
}
AttachmentResponseData.discriminator = undefined;
AttachmentResponseData.attributeTypeMap = [
    {
        "name": "attachmentId",
        "baseName": "attachmentId",
        "type": "number"
    },
    {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "string"
    },
    {
        "name": "attachmentName",
        "baseName": "attachmentName",
        "type": "string"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "number"
    },
    {
        "name": "isDisplay",
        "baseName": "isDisplay",
        "type": "boolean"
    },
    {
        "name": "attachmentPath",
        "baseName": "attachmentPath",
        "type": "string"
    }
];
exports.AttachmentResponseData = AttachmentResponseData;
//# sourceMappingURL=attachmentResponseData.js.map