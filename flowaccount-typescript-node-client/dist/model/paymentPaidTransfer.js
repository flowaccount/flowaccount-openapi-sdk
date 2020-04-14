"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentPaidTransfer {
    static getAttributeTypeMap() {
        return PaymentPaidTransfer.attributeTypeMap;
    }
}
PaymentPaidTransfer.discriminator = "paymentStructureType";
PaymentPaidTransfer.attributeTypeMap = [
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
    }
];
exports.PaymentPaidTransfer = PaymentPaidTransfer;
//# sourceMappingURL=paymentPaidTransfer.js.map