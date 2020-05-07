import { ExpenseSimpleDocumentResponseAllOfData } from './expenseSimpleDocumentResponseAllOfData';
export declare class ExpenseSimpleDocumentResponseAllOf {
    'data'?: ExpenseSimpleDocumentResponseAllOfData;
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
