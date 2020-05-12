"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InlineDocumentWithPaymentPaidCheque {
    static getAttributeTypeMap() {
        return InlineDocumentWithPaymentPaidCheque.attributeTypeMap;
    }
}
InlineDocumentWithPaymentPaidCheque.discriminator = "documentPaymentStructureType";
InlineDocumentWithPaymentPaidCheque.attributeTypeMap = [
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
        "name": "items",
        "baseName": "items",
        "type": "Array<SimpleProductItem>"
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
        "name": "discountType",
        "baseName": "discountType",
        "type": "number"
    },
    {
        "name": "useInlineDiscount",
        "baseName": "useInlineDiscount",
        "type": "boolean"
    },
    {
        "name": "useInlineVat",
        "baseName": "useInlineVat",
        "type": "boolean"
    },
    {
        "name": "exemptAmount",
        "baseName": "exemptAmount",
        "type": "number"
    },
    {
        "name": "vatableAmount",
        "baseName": "vatableAmount",
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
        "name": "documentWithholdingTaxAmount",
        "baseName": "documentWithholdingTaxAmount",
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
        "name": "documentReference",
        "baseName": "documentReference",
        "type": "Array<UpgradeDocument>"
    },
    {
        "name": "documentPaymentStructureType",
        "baseName": "documentPaymentStructureType",
        "type": "string"
    },
    {
        "name": "paymentMethod",
        "baseName": "paymentMethod",
        "type": "number"
    },
    {
        "name": "paymentDate",
        "baseName": "paymentDate",
        "type": "string"
    },
    {
        "name": "collected",
        "baseName": "collected",
        "type": "number"
    },
    {
        "name": "withheldPercentage",
        "baseName": "withheldPercentage",
        "type": "number"
    },
    {
        "name": "withheldAmount",
        "baseName": "withheldAmount",
        "type": "number"
    },
    {
        "name": "chequeDate",
        "baseName": "chequeDate",
        "type": "string"
    },
    {
        "name": "chequeNumber",
        "baseName": "chequeNumber",
        "type": "string"
    },
    {
        "name": "chequeBankAccountId",
        "baseName": "chequeBankAccountId",
        "type": "number"
    },
    {
        "name": "bankAccountId",
        "baseName": "bankAccountId",
        "type": "number"
    },
    {
        "name": "paymentCharge",
        "baseName": "paymentCharge",
        "type": "number"
    },
    {
        "name": "paymentRemarks",
        "baseName": "paymentRemarks",
        "type": "string"
    },
    {
        "name": "remainingCollectedType",
        "baseName": "remainingCollectedType",
        "type": "number"
    },
    {
        "name": "remainingCollected",
        "baseName": "remainingCollected",
        "type": "number"
    }
];
exports.InlineDocumentWithPaymentPaidCheque = InlineDocumentWithPaymentPaidCheque;
//# sourceMappingURL=inlineDocumentWithPaymentPaidCheque.js.map