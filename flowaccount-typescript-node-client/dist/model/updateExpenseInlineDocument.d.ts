import { ExpenseInlineProductItem } from './expenseInlineProductItem';
import { UpdateExpenseDocument } from './updateExpenseDocument';
export declare class UpdateExpenseInlineDocument extends UpdateExpenseDocument {
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
