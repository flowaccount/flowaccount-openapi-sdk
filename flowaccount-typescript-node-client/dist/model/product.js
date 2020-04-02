"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    static getAttributeTypeMap() {
        return Product.attributeTypeMap;
    }
}
Product.discriminator = undefined;
Product.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "number"
    },
    {
        "name": "code",
        "baseName": "code",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "sellDescription",
        "baseName": "sellDescription",
        "type": "string"
    },
    {
        "name": "sellPrice",
        "baseName": "sellPrice",
        "type": "number"
    },
    {
        "name": "sellVatType",
        "baseName": "sellVatType",
        "type": "number"
    },
    {
        "name": "unitName",
        "baseName": "unitName",
        "type": "string"
    },
    {
        "name": "categoryName",
        "baseName": "categoryName",
        "type": "string"
    },
    {
        "name": "barcode",
        "baseName": "barcode",
        "type": "string"
    },
    {
        "name": "buyDescription",
        "baseName": "buyDescription",
        "type": "string"
    },
    {
        "name": "buyPrice",
        "baseName": "buyPrice",
        "type": "number"
    },
    {
        "name": "buyVatType",
        "baseName": "buyVatType",
        "type": "number"
    },
    {
        "name": "inventoryPublishedOn",
        "baseName": "inventoryPublishedOn",
        "type": "string"
    },
    {
        "name": "inventoryQuantity",
        "baseName": "inventoryQuantity",
        "type": "number"
    },
    {
        "name": "inventoryPrice",
        "baseName": "inventoryPrice",
        "type": "number"
    }
];
exports.Product = Product;
//# sourceMappingURL=product.js.map