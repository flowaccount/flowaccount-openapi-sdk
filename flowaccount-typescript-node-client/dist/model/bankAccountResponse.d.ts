export declare class BankAccountResponse {
    'bankAccountId'?: number;
    'bankAccountNumber'?: string;
    'bankAccountName'?: string;
    'bankAccountType'?: number;
    'bankBranch'?: string;
    'bankId'?: number;
    'bankName'?: string;
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
