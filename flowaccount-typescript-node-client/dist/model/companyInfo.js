"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CompanyInfo {
    static getAttributeTypeMap() {
        return CompanyInfo.attributeTypeMap;
    }
}
CompanyInfo.discriminator = undefined;
CompanyInfo.attributeTypeMap = [
    {
        "name": "companyType",
        "baseName": "companyType",
        "type": "string"
    },
    {
        "name": "compnayName",
        "baseName": "compnayName",
        "type": "string"
    },
    {
        "name": "companyNameEn",
        "baseName": "companyNameEn",
        "type": "string"
    },
    {
        "name": "companyAddress",
        "baseName": "companyAddress",
        "type": "string"
    },
    {
        "name": "companyAddressEn",
        "baseName": "companyAddressEn",
        "type": "string"
    },
    {
        "name": "companyZipCode",
        "baseName": "companyZipCode",
        "type": "string"
    },
    {
        "name": "companyTaxId",
        "baseName": "companyTaxId",
        "type": "string"
    },
    {
        "name": "companyBranch",
        "baseName": "companyBranch",
        "type": "string"
    },
    {
        "name": "companyBranchEn",
        "baseName": "companyBranchEn",
        "type": "string"
    },
    {
        "name": "companyBranchCode",
        "baseName": "companyBranchCode",
        "type": "string"
    },
    {
        "name": "companyPhone",
        "baseName": "companyPhone",
        "type": "string"
    },
    {
        "name": "companyMobile",
        "baseName": "companyMobile",
        "type": "string"
    },
    {
        "name": "companyFax",
        "baseName": "companyFax",
        "type": "string"
    },
    {
        "name": "companyWebsite",
        "baseName": "companyWebsite",
        "type": "string"
    }
];
exports.CompanyInfo = CompanyInfo;
//# sourceMappingURL=companyInfo.js.map