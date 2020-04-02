"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productItem_1 = require("./productItem");
class SimpleProductItem extends productItem_1.ProductItem {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SimpleProductItem.attributeTypeMap);
    }
}
SimpleProductItem.discriminator = undefined;
SimpleProductItem.attributeTypeMap = [];
exports.SimpleProductItem = SimpleProductItem;
//# sourceMappingURL=simpleProductItem.js.map