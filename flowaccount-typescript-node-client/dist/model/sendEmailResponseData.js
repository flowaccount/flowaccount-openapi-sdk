"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendEmailResponseData {
    static getAttributeTypeMap() {
        return SendEmailResponseData.attributeTypeMap;
    }
}
SendEmailResponseData.discriminator = undefined;
SendEmailResponseData.attributeTypeMap = [
    {
        "name": "ok",
        "baseName": "ok",
        "type": "boolean"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "successMsg",
        "baseName": "successMsg",
        "type": "string"
    }
];
exports.SendEmailResponseData = SendEmailResponseData;
//# sourceMappingURL=sendEmailResponseData.js.map