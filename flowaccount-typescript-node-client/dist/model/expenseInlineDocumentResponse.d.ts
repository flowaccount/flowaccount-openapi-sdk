import { ExpenseInlineDocument } from './expenseInlineDocument';
export declare class ExpenseInlineDocumentResponse {
    'status'?: boolean;
    'message'?: string;
    'code'?: number;
    'data'?: object & ExpenseInlineDocument;
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
