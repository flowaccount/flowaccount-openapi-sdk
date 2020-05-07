import { ExpenseSimpleProductItem } from './expenseSimpleProductItem';
import { UpdateExpenseDocument } from './updateExpenseDocument';
export declare class UpdateExpenseSimpleDocument extends UpdateExpenseDocument {
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
