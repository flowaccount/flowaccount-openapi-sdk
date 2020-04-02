"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductItem {
    static getAttributeTypeMap() {
        return ProductItem.attributeTypeMap;
    }
}
ProductItem.discriminator = "documentStructureType";
ProductItem.attributeTypeMap = [
    {
        "name": "documentStructureType",
        "baseName": "documentStructureType",
        "type": "string"
    },
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
    }
];
exports.ProductItem = ProductItem;
//# sourceMappingURL=productItem.js.map