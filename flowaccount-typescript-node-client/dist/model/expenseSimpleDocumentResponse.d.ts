import { ExpenseResponse } from './expenseResponse';
import { ExpenseSimpleDocumentResponseAllOfData } from './expenseSimpleDocumentResponseAllOfData';
export declare class ExpenseSimpleDocumentResponse extends ExpenseResponse {
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
