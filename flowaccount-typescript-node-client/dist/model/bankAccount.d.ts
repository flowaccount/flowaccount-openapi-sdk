export declare class BankAccount {
    'bankAccountNumber': number;
    'bankAccountName': string;
    'bankAccountType': number;
    'bankBranch': string;
    'bankId': number;
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
