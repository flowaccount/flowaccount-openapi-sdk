"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentPaidCheque {
    static getAttributeTypeMap() {
        return PaymentPaidCheque.attributeTypeMap;
    }
}
PaymentPaidCheque.discriminator = "paymentStructureType";
PaymentPaidCheque.attributeTypeMap = [
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
exports.PaymentPaidCheque = PaymentPaidCheque;
//# sourceMappingURL=paymentPaidCheque.js.map