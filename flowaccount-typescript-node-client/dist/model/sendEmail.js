"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SendEmail {
    static getAttributeTypeMap() {
        return SendEmail.attributeTypeMap;
    }
}
SendEmail.discriminator = "documentStructureType";
SendEmail.attributeTypeMap = [
    {
        "name": "documentId",
        "baseName": "documentId",
        "type": "number"
    },
    {
        "name": "fromemail",
        "baseName": "fromemail",
        "type": "string"
    },
    {
        "name": "toemail",
        "baseName": "toemail",
        "type": "string"
    },
    {
        "name": "cCMyself",
        "baseName": "cCMyself",
        "type": "boolean"
    },
    {
        "name": "ccEmail",
        "baseName": "ccEmail",
        "type": "string"
    },
    {
        "name": "bccEmail",
        "baseName": "bccEmail",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
exports.SendEmail = SendEmail;
//# sourceMappingURL=sendEmail.js.map