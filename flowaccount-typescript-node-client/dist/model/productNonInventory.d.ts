export declare class ProductNonInventory {
    'productStructureType'?: string | null;
    'type': number;
    'code'?: string;
    'name': string;
    'sellDescription'?: string;
    'sellPrice'?: number;
    'sellVatType'?: number;
    'unitName'?: string;
    'categoryName'?: string;
    'barcode'?: string;
    'buyDescription'?: string;
    'buyPrice'?: number;
    'buyVatType'?: number;
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
