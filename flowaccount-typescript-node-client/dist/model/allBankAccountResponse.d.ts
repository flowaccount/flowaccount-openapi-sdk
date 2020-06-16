import { BankAccountResponseData } from './bankAccountResponseData';
export declare class AllBankAccountResponse {
    'status'?: boolean;
    'message'?: string;
    'code'?: number;
    'data'?: Array<BankAccountResponseData>;
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
