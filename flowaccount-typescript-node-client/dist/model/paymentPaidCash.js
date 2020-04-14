"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentPaidCash {
    static getAttributeTypeMap() {
        return PaymentPaidCash.attributeTypeMap;
    }
}
PaymentPaidCash.discriminator = "paymentStructureType";
PaymentPaidCash.attributeTypeMap = [
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
exports.PaymentPaidCash = PaymentPaidCash;
//# sourceMappingURL=paymentPaidCash.js.map