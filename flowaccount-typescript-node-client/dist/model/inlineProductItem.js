"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InlineProductItem {
    static getAttributeTypeMap() {
        return InlineProductItem.attributeTypeMap;
    }
}
InlineProductItem.discriminator = undefined;
InlineProductItem.attributeTypeMap = [
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
    },
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