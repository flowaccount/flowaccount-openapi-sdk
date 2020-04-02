"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InlineDocumentAllOf {
    static getAttributeTypeMap() {
        return InlineDocumentAllOf.attributeTypeMap;
    }
}
InlineDocumentAllOf.discriminator = undefined;
InlineDocumentAllOf.attributeTypeMap = [
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
        "name": "items",
        "baseName": "items",
        "type": "Array<InlineProductItem>"
    },
    {
        "name": "documentReference",
        "baseName": "documentReference",
        "type": "Array<UpgradeDocument>"
    }
];
exports.InlineDocumentAllOf = InlineDocumentAllOf;
//# sourceMappingURL=inlineDocumentAllOf.js.map