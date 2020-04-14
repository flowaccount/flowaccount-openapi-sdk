"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentReceivingCreditCard {
    static getAttributeTypeMap() {
        return PaymentReceivingCreditCard.attributeTypeMap;
    }
}
PaymentReceivingCreditCard.discriminator = "paymentStructureType";
PaymentReceivingCreditCard.attributeTypeMap = [
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
        "name": "paymentDeductionType",
        "baseName": "paymentDeductionType",
        "type": "number"
    },
    {
        "name": "paymentDeductionAmount",
        "baseName": "paymentDeductionAmount",
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
        "name": "creditCardBankAccountId",
        "baseName": "creditCardBankAccountId",
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
exports.PaymentReceivingCreditCard = PaymentReceivingCreditCard;
//# sourceMappingURL=paymentReceivingCreditCard.js.map