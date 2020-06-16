import { ExpenseInlineProductItem } from './expenseInlineProductItem';
export declare class ExpenseInlineDocumentAllOf {
    'items'?: Array<ExpenseInlineProductItem>;
    'discountType'?: number;
    'useInlineDiscount'?: boolean;
    'useInlineVat'?: boolean;
    'exemptAmount'?: number | null;
    'vatableAmount'?: number | null;
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
