export declare class DocumentResponse {
    'status'?: boolean;
    'message'?: string;
    'code'?: number;
    'documentStructureType'?: string;
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
