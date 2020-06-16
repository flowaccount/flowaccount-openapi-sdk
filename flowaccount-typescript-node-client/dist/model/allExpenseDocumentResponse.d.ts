import { AllExpenseDocumentResponseData } from './allExpenseDocumentResponseData';
export declare class AllExpenseDocumentResponse {
    'status'?: boolean;
    'message'?: string;
    'code'?: number;
    'data'?: AllExpenseDocumentResponseData;
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
