export declare class WithholidingTaxItem {
    'incomeType': number;
    'description'?: string;
    'taxRate': number;
    'taxAmount': number;
    'taxAmountNoVat': number;
    'withheld': number;
    'total'?: number;
    'vatType': number;
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
