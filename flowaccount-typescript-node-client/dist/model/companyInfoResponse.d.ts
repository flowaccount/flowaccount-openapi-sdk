import { CompanyInfoResponseData } from './companyInfoResponseData';
export declare class CompanyInfoResponse {
    'status'?: boolean;
    'message'?: string;
    'code'?: number;
    'data'?: CompanyInfoResponseData;
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
