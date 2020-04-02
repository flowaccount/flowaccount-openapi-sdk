export declare class ProductItem {
    'documentStructureType': string;
    'type'?: number;
    'name': string;
    'description'?: string;
    'quantity': number;
    'unitName'?: string;
    'pricePerUnit': number;
    'total': number;
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
