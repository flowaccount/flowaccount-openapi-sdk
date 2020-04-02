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
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
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
        "name": "contactCode",
        "baseName": "contactCode",
        "type": "string"
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
exports.ContactResponse = ContactResponse;
//# sourceMappingURL=contactResponse.js.map