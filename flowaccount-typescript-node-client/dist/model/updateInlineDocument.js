"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateDocument_1 = require("./updateDocument");
class UpdateInlineDocument extends updateDocument_1.UpdateDocument {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(UpdateInlineDocument.attributeTypeMap);
    }
}
UpdateInlineDocument.discriminator = undefined;
UpdateInlineDocument.attributeTypeMap = [
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
exports.UpdateInlineDocument = UpdateInlineDocument;
//# sourceMappingURL=updateInlineDocument.js.map