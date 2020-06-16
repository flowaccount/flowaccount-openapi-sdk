export declare class Contact {
    'id'?: number;
    'contactGroup': number;
    'contactType': number;
    'contactName': string;
    'contactAddress'?: string;
    'contactZipCode'?: string;
    'contactTaxId'?: number;
    'contactBranchCode'?: string;
    'contactBranch'?: string;
    'contactPerson'?: string;
    'contactEmail'?: string;
    'contactMobile'?: string;
    'contactBankId'?: number;
    'contactBankAccountNumber'?: number;
    'contactBankBranch'?: string;
    'contactBankAccountType'?: number;
    'contactCreditDays'?: number;
    'contactOffice'?: string;
    'contactFax'?: string;
    'contactWebsite'?: string;
    'conatactShippingAddress'?: string;
    'contactNote'?: string;
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
