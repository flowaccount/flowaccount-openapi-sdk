export declare class AttachmentResponseData {
    'attachmentId'?: number;
    'createdOn'?: string;
    'attachmentName'?: string;
    'orderNumber'?: number;
    'isDisplay'?: boolean;
    'attachmentPath'?: string;
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
