export declare class SimpleDocumentResponseAllOfDataCompany {
    'companyName'?: string;
    'companyNameEn'?: string;
    'companyAddress'?: string;
    'companyAddressEn'?: string;
    'companyTaxId'?: string;
    'companyBranch'?: string;
    'companyBranchEn'?: string;
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
