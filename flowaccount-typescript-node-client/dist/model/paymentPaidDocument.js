"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentPaidDocument {
    static getAttributeTypeMap() {
        return PaymentPaidDocument.attributeTypeMap;
    }
}
PaymentPaidDocument.discriminator = "paymentStructureType";
PaymentPaidDocument.attributeTypeMap = [
    {
        "name": "paymentStructureType",
        "baseName": "paymentStructureType",
        "type": "string"
    },
    {
        "name": "documentId",
        "baseName": "documentId",
        "type": "number"
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
        "name": "transferBankAccountId",
        "baseName": "transferBankAccountId",
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
        "name": "creditCardBankAccountId",
        "baseName": "creditCardBankAccountId",
        "type": "number"
    }
];
exports.PaymentPaidDocument = PaymentPaidDocument;
//# sourceMappingURL=paymentPaidDocument.js.map