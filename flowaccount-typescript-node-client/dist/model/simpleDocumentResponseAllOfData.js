"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleDocumentResponseAllOfData {
    static getAttributeTypeMap() {
        return SimpleDocumentResponseAllOfData.attributeTypeMap;
    }
}
SimpleDocumentResponseAllOfData.discriminator = undefined;
SimpleDocumentResponseAllOfData.attributeTypeMap = [
    {
        "name": "recordId",
        "baseName": "recordId",
        "type": "number"
    },
    {
        "name": "documentId",
        "baseName": "documentId",
        "type": "number"
    },
    {
        "name": "documentSerial",
        "baseName": "documentSerial",
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
        "name": "creditType",
        "baseName": "creditType",
        "type": "number"
    },
    {
        "name": "creditDays",
        "baseName": "creditDays",
        "type": "number"
    },
    {
        "name": "dueDate",
        "baseName": "dueDate",
        "type": "string"
    },
    {
        "name": "salesName",
        "baseName": "salesName",
        "type": "string"
    },
    {
        "name": "projectName",
        "baseName": "projectName",
        "type": "string"
    },
    {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
    },
    {
        "name": "isVatInclusive",
        "baseName": "isVatInclusive",
        "type": "boolean"
    },
    {
        "name": "useReceiptDeduction",
        "baseName": "useReceiptDeduction",
        "type": "boolean"
    },
    {
        "name": "subTotal",
        "baseName": "subTotal",
        "type": "number"
    },
    {
        "name": "discountPercentage",
        "baseName": "discountPercentage",
        "type": "number"
    },
    {
        "name": "discountAmount",
        "baseName": "discountAmount",
        "type": "number"
    },
    {
        "name": "totalAfterDiscount",
        "baseName": "totalAfterDiscount",
        "type": "number"
    },
    {
        "name": "totalWithoutVat",
        "baseName": "totalWithoutVat",
        "type": "number"
    },
    {
        "name": "isVat",
        "baseName": "isVat",
        "type": "boolean"
    },
    {
        "name": "vatAmount",
        "baseName": "vatAmount",
        "type": "number"
    },
    {
        "name": "grandTotal",
        "baseName": "grandTotal",
        "type": "number"
    },
    {
        "name": "documentShowWithholdingTax",
        "baseName": "documentShowWithholdingTax",
        "type": "boolean"
    },
    {
        "name": "documentWithholdingTaxPercentage",
        "baseName": "documentWithholdingTaxPercentage",
        "type": "number"
    },
    {
        "name": "documentDeductionType",
        "baseName": "documentDeductionType",
        "type": "number"
    },
    {
        "name": "documentDeductionAmount",
        "baseName": "documentDeductionAmount",
        "type": "number"
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
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<SimpleProductItem>"
    },
    {
        "name": "referencedToMe",
        "baseName": "referencedToMe",
        "type": "Array<ReferencedToMe>"
    },
    {
        "name": "referencedByMe",
        "baseName": "referencedByMe",
        "type": "Array<ReferencedByMe>"
    },
    {
        "name": "payments",
        "baseName": "payments",
        "type": "SimpleDocumentResponseAllOfDataPayments"
    },
    {
        "name": "company",
        "baseName": "company",
        "type": "SimpleDocumentResponseAllOfDataCompany"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "number"
    },
    {
        "name": "statusString",
        "baseName": "statusString",
        "type": "number"
    },
    {
        "name": "documentType",
        "baseName": "documentType",
        "type": "number"
    },
    {
        "name": "allowDelete",
        "baseName": "allowDelete",
        "type": "boolean"
    }
];
exports.SimpleDocumentResponseAllOfData = SimpleDocumentResponseAllOfData;
//# sourceMappingURL=simpleDocumentResponseAllOfData.js.map