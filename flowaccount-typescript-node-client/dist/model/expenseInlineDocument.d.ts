import { ExpenseDocument } from './expenseDocument';
import { ExpenseInlineProductItem } from './expenseInlineProductItem';
export declare class ExpenseInlineDocument extends ExpenseDocument {
    'items'?: Array<ExpenseInlineProductItem>;
    'discountType'?: number;
    'useInlineDiscount'?: boolean;
    'useInlineVat'?: boolean;
    'exemptAmount'?: number;
    'vatableAmount'?: number;
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
