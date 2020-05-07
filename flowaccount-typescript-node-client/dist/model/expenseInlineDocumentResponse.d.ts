import { ExpenseInlineDocumentResponseAllOfData } from './expenseInlineDocumentResponseAllOfData';
import { ExpenseResponse } from './expenseResponse';
export declare class ExpenseInlineDocumentResponse extends ExpenseResponse {
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
