"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateWithholidingTaxDocument {
    static getAttributeTypeMap() {
        return UpdateWithholidingTaxDocument.attributeTypeMap;
    }
}
UpdateWithholidingTaxDocument.discriminator = undefined;
UpdateWithholidingTaxDocument.attributeTypeMap = [
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "string"
    },
    {
        "name": "companyNameEn",
        "baseName": "companyNameEn",
        "type": "string"
    },
    {
        "name": "companyAddress",
        "baseName": "companyAddress",
        "type": "string"
    },
    {
        "name": "companyAddressEn",
        "baseName": "companyAddressEn",
        "type": "string"
    },
    {
        "name": "companyTaxId",
        "baseName": "companyTaxId",
        "type": "string"
    },
    {
        "name": "companyBranch",
        "baseName": "companyBranch",
        "type": "string"
    },
    {
        "name": "companyBranchEn",
        "baseName": "companyBranchEn",
        "type": "string"
    },
    {
        "name": "companyPhone",
        "baseName": "companyPhone",
        "type": "string"
    },
    {
        "name": "companyMobile",
        "baseName": "companyMobile",
        "type": "string"
    },
    {
        "name": "companyFax",
        "baseName": "companyFax",
        "type": "string"
    },
    {
        "name": "companyWebsite",
        "baseName": "companyWebsite",
        "type": "string"
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
        "name": "contactNumber",
        "baseName": "contactNumber",
        "type": "string"
    },
    {
        "name": "contactZipCode",
        "baseName": "contactZipCode",
        "type": "string"
    },
    {
        "name": "contactGroup",
        "baseName": "contactGroup",
        "type": "number"
    },
    {
        "name": "publishedOn",
        "baseName": "publishedOn",
        "type": "string"
    },
    {
        "name": "entity",
        "baseName": "entity",
        "type": "number"
    },
    {
        "name": "textOther",
        "baseName": "textOther",
        "type": "string"
    },
    {
        "name": "withholdingTaxItems",
        "baseName": "withholdingTaxItems",
        "type": "Array<WithholidingTaxItem>"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    },
    {
        "name": "totalTaxWithheld",
        "baseName": "totalTaxWithheld",
        "type": "number"
    },
    {
        "name": "taxPayment",
        "baseName": "taxPayment",
        "type": "number"
    },
    {
        "name": "taxPaymentOthers",
        "baseName": "taxPaymentOthers",
        "type": "string"
    },
    {
        "name": "providentFundNumber",
        "baseName": "providentFundNumber",
        "type": "string"
    },
    {
        "name": "providentFundAmount",
        "baseName": "providentFundAmount",
        "type": "string"
    },
    {
        "name": "socialSecurityAmount",
        "baseName": "socialSecurityAmount",
        "type": "string"
    },
    {
        "name": "remarks",
        "baseName": "remarks",
        "type": "string"
    },
    {
        "name": "internalNotes",
        "baseName": "internalNotes",
        "type": "string"
    },
    {
        "name": "showSignatureOrStamp",
        "baseName": "showSignatureOrStamp",
        "type": "boolean"
    }
];
exports.UpdateWithholidingTaxDocument = UpdateWithholidingTaxDocument;
//# sourceMappingURL=updateWithholidingTaxDocument.js.map