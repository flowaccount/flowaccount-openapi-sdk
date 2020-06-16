"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContactResponse {
    static getAttributeTypeMap() {
        return ContactResponse.attributeTypeMap;
    }
}
ContactResponse.discriminator = undefined;
ContactResponse.attributeTypeMap = [
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
        "type": "ContactResponseData"
    }
];
exports.ContactResponse = ContactResponse;
//# sourceMappingURL=contactResponse.js.map