import { ShareDocumentResponseData } from './shareDocumentResponseData';
export declare class ShareDocumentResponse {
    'status'?: boolean;
    'message'?: string;
    'code'?: number;
    'data'?: ShareDocumentResponseData;
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
