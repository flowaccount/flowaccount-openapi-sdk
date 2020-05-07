import { ExpenseInlineDocumentResponseAllOfData } from './expenseInlineDocumentResponseAllOfData';
export declare class ExpenseInlineDocumentResponseAllOf {
    'data'?: ExpenseInlineDocumentResponseAllOfData;
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
