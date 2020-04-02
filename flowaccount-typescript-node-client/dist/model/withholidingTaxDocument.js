"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WithholidingTaxDocument {
    static getAttributeTypeMap() {
        return WithholidingTaxDocument.attributeTypeMap;
    }
}
WithholidingTaxDocument.discriminator = undefined;
WithholidingTaxDocument.attributeTypeMap = [
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
exports.WithholidingTaxDocument = WithholidingTaxDocument;
//# sourceMappingURL=withholidingTaxDocument.js.map