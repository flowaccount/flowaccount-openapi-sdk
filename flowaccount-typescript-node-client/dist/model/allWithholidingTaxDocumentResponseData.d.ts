import { WithholidingTaxDocumentResponseData } from './withholidingTaxDocumentResponseData';
export declare class AllWithholidingTaxDocumentResponseData {
    'list'?: Array<WithholidingTaxDocumentResponseData>;
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
