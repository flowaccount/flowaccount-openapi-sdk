import { AllWithholidingTaxDocumentResponseData } from './allWithholidingTaxDocumentResponseData';
export declare class AllWithholidingTaxDocumentResponse {
    'status'?: boolean;
    'message'?: string;
    'code'?: number;
    'data'?: AllWithholidingTaxDocumentResponseData;
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
