import { BusinessCategoryData } from './businessCategoryData';
export declare class BusinessCategory {
    'status'?: boolean;
    'message'?: string;
    'code'?: number;
    'data'?: Array<BusinessCategoryData>;
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
