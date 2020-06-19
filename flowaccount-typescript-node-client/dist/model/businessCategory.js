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
        "name": "status",
        "baseName": "status",
        "type": "boolean"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<BusinessCategoryData>"
    }
];
exports.BusinessCategory = BusinessCategory;
//# sourceMappingURL=businessCategory.js.map