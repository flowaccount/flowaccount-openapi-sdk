export declare class UpgradeDocument {
    'recordId': number;
    'referenceDocumentSerial': string;
    'referenceDocumentType': number;
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
