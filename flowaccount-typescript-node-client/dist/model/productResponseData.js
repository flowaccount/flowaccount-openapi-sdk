"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductResponseData {
    static getAttributeTypeMap() {
        return ProductResponseData.attributeTypeMap;
    }
}
ProductResponseData.discriminator = undefined;
ProductResponseData.attributeTypeMap = [
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    },
    {
        "name": "currentPage",
        "baseName": "currentPage",
        "type": "number"
    },
    {
        "name": "list",
        "baseName": "list",
        "type": "Array<Product>"
    },
    {
        "name": "isDB",
        "baseName": "isDB",
        "type": "boolean"
    }
];
exports.ProductResponseData = ProductResponseData;
//# sourceMappingURL=productResponseData.js.map