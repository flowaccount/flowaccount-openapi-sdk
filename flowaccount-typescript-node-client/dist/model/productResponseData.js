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
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
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
        "name": "categoryId",
        "baseName": "categoryId",
        "type": "number"
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
        "name": "averageBuyPrice",
        "baseName": "averageBuyPrice",
        "type": "number"
    },
    {
        "name": "averageSellPrice",
        "baseName": "averageSellPrice",
        "type": "number"
    },
    {
        "name": "remainingStock",
        "baseName": "remainingStock",
        "type": "number"
    },
    {
        "name": "totalValueInHand",
        "baseName": "totalValueInHand",
        "type": "number"
    }
];
exports.ProductResponseData = ProductResponseData;
//# sourceMappingURL=productResponseData.js.map