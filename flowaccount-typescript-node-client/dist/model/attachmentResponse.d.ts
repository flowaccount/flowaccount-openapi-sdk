import { AttachmentResponseData } from './attachmentResponseData';
export declare class AttachmentResponse {
    'status'?: boolean;
    'message'?: string;
    'code'?: number;
    'data'?: AttachmentResponseData;
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
