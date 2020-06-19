export declare class BusinessCategoryData {
    'id'?: number;
    'systemCode'?: number;
    'categoryId'?: number;
    'categoryNameLocal'?: string;
    'categoryNameForeign'?: string;
    'debitId'?: number;
    'debitCategory'?: number;
    'debitCode'?: string;
    'debitNameLocal'?: string;
    'debitNameForeign'?: string;
    'creditId'?: number;
    'creditCategory'?: number;
    'creditCode'?: string;
    'creditNameLocal'?: string;
    'creditNameForeign'?: string;
    'keywords'?: string;
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
