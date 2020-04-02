"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InlineProductItemAllOf {
    static getAttributeTypeMap() {
        return InlineProductItemAllOf.attributeTypeMap;
    }
}
InlineProductItemAllOf.discriminator = undefined;
InlineProductItemAllOf.attributeTypeMap = [
    {
        "name": "discountAmount",
        "baseName": "discountAmount",
        "type": "number"
    },
    {
        "name": "vatRate",
        "baseName": "vatRate",
        "type": "number"
    }
];
exports.InlineProductItemAllOf = InlineProductItemAllOf;
//# sourceMappingURL=inlineProductItemAllOf.js.map