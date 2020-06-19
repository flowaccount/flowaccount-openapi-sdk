"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CompanyInfoResponse {
    static getAttributeTypeMap() {
        return CompanyInfoResponse.attributeTypeMap;
    }
}
CompanyInfoResponse.discriminator = undefined;
CompanyInfoResponse.attributeTypeMap = [
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
        "type": "CompanyInfoResponseData"
    }
];
exports.CompanyInfoResponse = CompanyInfoResponse;
//# sourceMappingURL=companyInfoResponse.js.map