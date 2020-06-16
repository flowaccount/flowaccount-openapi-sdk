"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContactResponseData {
    static getAttributeTypeMap() {
        return ContactResponseData.attributeTypeMap;
    }
}
ContactResponseData.discriminator = undefined;
ContactResponseData.attributeTypeMap = [
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    },
    {
        "name": "currentPage",
        "baseName": "currentPage",
        "type": "number"
    },
    {
        "name": "list",
        "baseName": "list",
        "type": "Array<Contact>"
    },
    {
        "name": "isDB",
        "baseName": "isDB",
        "type": "boolean"
    }
];
exports.ContactResponseData = ContactResponseData;
//# sourceMappingURL=contactResponseData.js.map