"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Contact {
    static getAttributeTypeMap() {
        return Contact.attributeTypeMap;
    }
}
Contact.discriminator = undefined;
Contact.attributeTypeMap = [
    {
        "name": "contactGroup",
        "baseName": "contactGroup",
        "type": "number"
    },
    {
        "name": "contactType",
        "baseName": "contactType",
        "type": "number"
    },
    {
        "name": "contactName",
        "baseName": "contactName",
        "type": "string"
    },
    {
        "name": "contactAddress",
        "baseName": "contactAddress",
        "type": "string"
    },
    {
        "name": "contactZipCode",
        "baseName": "contactZipCode",
        "type": "string"
    },
    {
        "name": "contactTaxId",
        "baseName": "contactTaxId",
        "type": "number"
    },
    {
        "name": "contactBranchCode",
        "baseName": "contactBranchCode",
        "type": "string"
    },
    {
        "name": "contactBranch",
        "baseName": "contactBranch",
        "type": "string"
    },
    {
        "name": "contactPerson",
        "baseName": "contactPerson",
        "type": "string"
    },
    {
        "name": "contactEmail",
        "baseName": "contactEmail",
        "type": "string"
    },
    {
        "name": "contactMobile",
        "baseName": "contactMobile",
        "type": "string"
    },
    {
        "name": "contactBankId",
        "baseName": "contactBankId",
        "type": "number"
    },
    {
        "name": "contactBankAccountNumber",
        "baseName": "contactBankAccountNumber",
        "type": "number"
    },
    {
        "name": "contactBankBranch",
        "baseName": "contactBankBranch",
        "type": "string"
    },
    {
        "name": "contactBankAccountType",
        "baseName": "contactBankAccountType",
        "type": "number"
    },
    {
        "name": "contactCreditDays",
        "baseName": "contactCreditDays",
        "type": "number"
    },
    {
        "name": "contactOffice",
        "baseName": "contactOffice",
        "type": "string"
    },
    {
        "name": "contactFax",
        "baseName": "contactFax",
        "type": "string"
    },
    {
        "name": "contactWebsite",
        "baseName": "contactWebsite",
        "type": "string"
    },
    {
        "name": "conatactShippingAddress",
        "baseName": "conatactShippingAddress",
        "type": "string"
    },
    {
        "name": "contactNote",
        "baseName": "contactNote",
        "type": "string"
    }
];
exports.Contact = Contact;
//# sourceMappingURL=contact.js.map