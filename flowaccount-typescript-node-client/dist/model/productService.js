"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductService {
    static getAttributeTypeMap() {
        return ProductService.attributeTypeMap;
    }
}
ProductService.discriminator = "productStructureType";
ProductService.attributeTypeMap = [
    {
        "name": "productStructureType",
        "baseName": "productStructureType",
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
        "name": "categoryName",
        "baseName": "categoryName",
        "type": "string"
    },
    {
        "name": "barcode",
        "baseName": "barcode",
        "type": "string"
    }
];
exports.ProductService = ProductService;
//# sourceMappingURL=productService.js.map