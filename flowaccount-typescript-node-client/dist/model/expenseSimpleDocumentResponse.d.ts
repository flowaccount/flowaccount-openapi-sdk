import { ExpenseDocument } from './expenseDocument';
export declare class ExpenseSimpleDocumentResponse {
    'status'?: boolean;
    'message'?: string;
    'code'?: number;
    'data'?: object & ExpenseDocument;
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
