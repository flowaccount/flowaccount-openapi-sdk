import { AllDocumentResponseData } from './allDocumentResponseData';
export declare class AllDocumentResponse {
    'status'?: boolean;
    'message'?: string;
    'code'?: number;
    'data'?: AllDocumentResponseData;
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
