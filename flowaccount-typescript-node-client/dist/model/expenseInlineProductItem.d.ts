export declare class ExpenseInlineProductItem {
    'systemCode': number;
    'categoryId': number;
    'description': string;
    'nameLocal': string;
    'nameForeign': string;
    'creditCategory': number;
    'creditId': number;
    'creditCode': string;
    'creditNameLocal': string;
    'creditNameForeign': string;
    'debitCategory': number;
    'debitId': number;
    'debitCode': string;
    'debitNameLocal': string;
    'debitNameForeign': string;
    'quantity': number;
    'unitName'?: string;
    'pricePerUnit': number;
    'discountAmount': number;
    'vatRate': number;
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
