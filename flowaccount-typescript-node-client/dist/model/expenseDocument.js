"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExpenseDocument {
    static getAttributeTypeMap() {
        return ExpenseDocument.attributeTypeMap;
    }
}
ExpenseDocument.discriminator = "expenseStructureType";
ExpenseDocument.attributeTypeMap = [
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
        "name": "expenseStructureType",
        "baseName": "expenseStructureType",
        "type": "string"
    }
];
exports.ExpenseDocument = ExpenseDocument;
//# sourceMappingURL=expenseDocument.js.map