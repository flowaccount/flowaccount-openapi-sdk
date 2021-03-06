import { ExpenseInlineProductItem } from './expenseInlineProductItem';
export declare class ExpenseInlineDocumentWithPaymentPaidCreditCard {
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
    'dueDate': string;
    'salesName'?: string;
    'projectName'?: string;
    'reference'?: string;
    'isVatInclusive'?: boolean;
    'items'?: Array<ExpenseInlineProductItem>;
    'subTotal'?: number;
    'discountPercentage'?: number;
    'discountAmount'?: number;
    'totalAfterDiscount': number;
    'isVat'?: boolean;
    'vatAmount'?: number;
    'grandTotal': number;
    'discountType'?: number;
    'useInlineDiscount'?: boolean;
    'useInlineVat'?: boolean;
    'exemptAmount'?: number | null;
    'remarks'?: string;
    'internalNotes'?: string;
    'showSignatureOrStamp'?: boolean;
    'expensePaymentStructureType': string | null;
    'paymentMethod': number;
    'paymentDate': string;
    'collected': number;
    'withheldPercentage'?: number;
    'withheldAmount'?: number;
    'creditCardBankAccountId'?: number;
    'paymentRemarks'?: string;
    'remainingCollectedType'?: number;
    'remainingCollected'?: number;
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
