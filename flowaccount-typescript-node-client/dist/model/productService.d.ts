export declare class ProductService {
    'productStructureType'?: string;
    'type': number;
    'code'?: string;
    'name': string;
    'sellDescription'?: string;
    'sellPrice'?: number;
    'sellVatType'?: number;
    'unitName'?: string;
    'categoryName'?: string;
    'barcode'?: string;
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
