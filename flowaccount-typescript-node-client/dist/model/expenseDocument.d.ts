import { ExpenseSimpleProductItem } from './expenseSimpleProductItem';
export declare class ExpenseDocument {
    'documentSerial'?: string;
    'contactCode'?: string;
    'contactName': string;
    'contactAddress'?: string;
    'contactTaxId'?: string;
    'contactBranch'?: string;
    'contactPerson'?: string;
    'contactEmail'?: string;
    'contactNumber'?: string;
    'contactZipCode'?: string;
    'contactGroup'?: number;
    'publishedOn': string;
    'creditType'?: number;
    'creditDays'?: number;
    'dueDate'?: string;
    'salesName'?: string;
    'projectName'?: string;
    'reference'?: string;
    'isVatInclusive'?: boolean;
    'items'?: Array<ExpenseSimpleProductItem>;
    'subTotal': number;
    'discountPercentage'?: number;
    'discountAmount'?: number;
    'totalAfterDiscount': number;
    'isVat'?: boolean;
    'vatAmount'?: number;
    'grandTotal': number;
    'remarks'?: string;
    'internalNotes'?: string;
    'showSignatureOrStamp'?: boolean;
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
