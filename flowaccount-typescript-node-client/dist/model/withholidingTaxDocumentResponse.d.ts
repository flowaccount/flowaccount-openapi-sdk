import { WithholidingTaxDocumentResponseData } from './withholidingTaxDocumentResponseData';
export declare class WithholidingTaxDocumentResponse {
    'status'?: boolean;
    'message'?: string;
    'code'?: number;
    'data'?: WithholidingTaxDocumentResponseData;
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
