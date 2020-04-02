export declare class ReferencedToMe {
    'referenceId'?: number;
    'referenceDocumentType'?: number;
    'referenceDocumentSerial'?: string;
    'documentId'?: number;
    'documentSerial'?: number;
    'type'?: number;
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
