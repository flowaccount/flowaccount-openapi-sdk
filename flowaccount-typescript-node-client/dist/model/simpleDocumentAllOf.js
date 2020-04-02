"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleDocumentAllOf {
    static getAttributeTypeMap() {
        return SimpleDocumentAllOf.attributeTypeMap;
    }
}
SimpleDocumentAllOf.discriminator = undefined;
SimpleDocumentAllOf.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<SimpleProductItem>"
    },
    {
        "name": "documentReference",
        "baseName": "documentReference",
        "type": "Array<UpgradeDocument>"
    }
];
exports.SimpleDocumentAllOf = SimpleDocumentAllOf;
//# sourceMappingURL=simpleDocumentAllOf.js.map