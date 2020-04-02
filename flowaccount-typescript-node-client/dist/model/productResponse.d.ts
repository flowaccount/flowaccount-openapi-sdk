import { ProductResponseData } from './productResponseData';
export declare class ProductResponse {
    'status'?: boolean;
    'message'?: string;
    'code'?: number;
    'data'?: ProductResponseData;
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
