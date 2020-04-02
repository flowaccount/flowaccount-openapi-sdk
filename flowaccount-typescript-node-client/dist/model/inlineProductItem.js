"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productItem_1 = require("./productItem");
class InlineProductItem extends productItem_1.ProductItem {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(InlineProductItem.attributeTypeMap);
    }
}
InlineProductItem.discriminator = undefined;
InlineProductItem.attributeTypeMap = [
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
exports.InlineProductItem = InlineProductItem;
//# sourceMappingURL=inlineProductItem.js.map