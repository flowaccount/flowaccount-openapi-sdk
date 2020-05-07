"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateDocument_1 = require("./updateDocument");
class UpdateSimpleDocument extends updateDocument_1.UpdateDocument {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(UpdateSimpleDocument.attributeTypeMap);
    }
}
UpdateSimpleDocument.discriminator = undefined;
UpdateSimpleDocument.attributeTypeMap = [
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
exports.UpdateSimpleDocument = UpdateSimpleDocument;
//# sourceMappingURL=updateSimpleDocument.js.map