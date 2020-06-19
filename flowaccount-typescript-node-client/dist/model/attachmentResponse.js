"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AttachmentResponse {
    static getAttributeTypeMap() {
        return AttachmentResponse.attributeTypeMap;
    }
}
AttachmentResponse.discriminator = undefined;
AttachmentResponse.attributeTypeMap = [
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
        "type": "Array<AttachmentResponseData>"
    }
];
exports.AttachmentResponse = AttachmentResponse;
//# sourceMappingURL=attachmentResponse.js.map