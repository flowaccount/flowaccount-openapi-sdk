"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExpenseResponse {
    static getAttributeTypeMap() {
        return ExpenseResponse.attributeTypeMap;
    }
}
ExpenseResponse.discriminator = "expenseStructureType";
ExpenseResponse.attributeTypeMap = [
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
        "name": "expenseStructureType",
        "baseName": "expenseStructureType",
        "type": "string"
    }
];
exports.ExpenseResponse = ExpenseResponse;
//# sourceMappingURL=expenseResponse.js.map