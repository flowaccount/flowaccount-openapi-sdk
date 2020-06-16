import { Product } from './product';
export declare class ProductResponseData {
    'total'?: number;
    'currentPage'?: number;
    'list'?: Array<Product>;
    'isDB'?: boolean;
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
