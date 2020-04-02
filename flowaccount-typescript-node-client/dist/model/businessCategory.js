"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BusinessCategory {
    static getAttributeTypeMap() {
        return BusinessCategory.attributeTypeMap;
    }
}
BusinessCategory.discriminator = undefined;
BusinessCategory.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
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
        "name": "categoryNameLocal",
        "baseName": "categoryNameLocal",
        "type": "string"
    },
    {
        "name": "categoryNameForeign",
        "baseName": "categoryNameForeign",
        "type": "string"
    },
    {
        "name": "debitId",
        "baseName": "debitId",
        "type": "number"
    },
    {
        "name": "debitCategory",
        "baseName": "debitCategory",
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
        "name": "creditId",
        "baseName": "creditId",
        "type": "number"
    },
    {
        "name": "creditCategory",
        "baseName": "creditCategory",
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
        "name": "keywords",
        "baseName": "keywords",
        "type": "string"
    }
];
exports.BusinessCategory = BusinessCategory;
//# sourceMappingURL=businessCategory.js.map