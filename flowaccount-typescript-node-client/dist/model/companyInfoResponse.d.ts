export declare class CompanyInfoResponse {
    'companyId'?: number;
    'companyType'?: string;
    'compnayName': string;
    'companyNameEn'?: string;
    'companyAddress'?: string;
    'companyAddressEn'?: string;
    'companyZipCode'?: string;
    'companyTaxId'?: string;
    'companyBranch'?: string;
    'companyBranchEn'?: string;
    'companyBranchCode'?: string;
    'companyPhone'?: string;
    'companyMobile'?: string;
    'companyFax'?: string;
    'companyWebsite'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
