"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExpenseInlineProductItem {
    static getAttributeTypeMap() {
        return ExpenseInlineProductItem.attributeTypeMap;
    }
}
ExpenseInlineProductItem.discriminator = undefined;
ExpenseInlineProductItem.attributeTypeMap = [
    {
        "name": "systemCode",
        "baseName": "systemCode",
        "type": "number"
    },
    {
        "name": "categoryId",
        "baseName": "categoryId",
        "type": "number"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "nameLocal",
        "baseName": "nameLocal",
        "type": "string"
    },
    {
        "name": "nameForeign",
        "baseName": "nameForeign",
        "type": "string"
    },
    {
        "name": "creditCategory",
        "baseName": "creditCategory",
        "type": "number"
    },
    {
        "name": "creditId",
        "baseName": "creditId",
        "type": "number"
    },
    {
        "name": "creditCode",
        "baseName": "creditCode",
        "type": "string"
    },
    {
        "name": "creditNameLocal",
        "baseName": "creditNameLocal",
        "type": "string"
    },
    {
        "name": "creditNameForeign",
        "baseName": "creditNameForeign",
        "type": "string"
    },
    {
        "name": "debitCategory",
        "baseName": "debitCategory",
        "type": "number"
    },
    {
        "name": "debitId",
        "baseName": "debitId",
        "type": "number"
    },
    {
        "name": "debitCode",
        "baseName": "debitCode",
        "type": "string"
    },
    {
        "name": "debitNameLocal",
        "baseName": "debitNameLocal",
        "type": "string"
    },
    {
        "name": "debitNameForeign",
        "baseName": "debitNameForeign",
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
        "name": "discountAmount",
        "baseName": "discountAmount",
        "type": "number"
    },
    {
        "name": "vatRate",
        "baseName": "vatRate",
        "type": "number"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    }
];
exports.ExpenseInlineProductItem = ExpenseInlineProductItem;
//# sourceMappingURL=expenseInlineProductItem.js.map