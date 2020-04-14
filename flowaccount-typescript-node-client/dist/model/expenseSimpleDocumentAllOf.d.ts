import { ExpenseSimpleProductItem } from './expenseSimpleProductItem';
export declare class ExpenseSimpleDocumentAllOf {
    'items'?: Array<ExpenseSimpleProductItem>;
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
