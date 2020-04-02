"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendEmailResponse {
    static getAttributeTypeMap() {
        return SendEmailResponse.attributeTypeMap;
    }
}
SendEmailResponse.discriminator = undefined;
SendEmailResponse.attributeTypeMap = [
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
        "type": "SendEmailResponseData"
    }
];
exports.SendEmailResponse = SendEmailResponse;
//# sourceMappingURL=sendEmailResponse.js.map