"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductItem {
    static getAttributeTypeMap() {
        return ProductItem.attributeTypeMap;
    }
}
ProductItem.discriminator = undefined;
ProductItem.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
    },
    {
        "name": "unitName",
        "baseName": "unitName",
        "type": "string"
    },
    {
        "name": "pricePerUnit",
        "baseName": "pricePerUnit",
        "type": "number"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    },
    {
        "name": "sellChartOfAccountCode",
        "baseName": "sellChartOfAccountCode",
        "type": "string"
    },
    {
        "name": "buyChartOfAccountCode",
        "baseName": "buyChartOfAccountCode",
        "type": "string"
    }
];
exports.ProductItem = ProductItem;
//# sourceMappingURL=productItem.js.map