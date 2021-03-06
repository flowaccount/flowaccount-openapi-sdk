import { ExpenseInlineProductItem } from './expenseInlineProductItem';
import { SimpleDocumentResponseAllOfDataCompany } from './simpleDocumentResponseAllOfDataCompany';
import { SimpleDocumentResponseAllOfDataPayments } from './simpleDocumentResponseAllOfDataPayments';
export declare class ExpenseInlineDocumentResponseAllOfData {
    'recordId'?: number;
    'documentId'?: number;
    'documentSerial'?: string;
    'contactCode'?: string;
    'contactName'?: string;
    'contactAddress'?: string;
    'contactTaxId'?: string;
    'contactBranch'?: string;
    'contactPerson'?: string;
    'contactEmail'?: string;
    'contactNumber'?: string;
    'contactZipCode'?: string;
    'contactGroup'?: number;
    'publishedOn'?: string;
    'creditType'?: number;
    'creditDays'?: number;
    'dueDate'?: string;
    'salesName'?: string;
    'projectName'?: string;
    'reference'?: string;
    'isVatInclusive'?: boolean;
    'items'?: Array<ExpenseInlineProductItem>;
    'subTotal'?: number;
    'discountPercentage'?: number;
    'discountAmount'?: number;
    'totalAfterDiscount'?: number;
    'isVat'?: boolean;
    'vatAmount'?: number;
    'grandTotal'?: number;
    'remarks'?: string;
    'internalNotes'?: string;
    'showSignatureOrStamp'?: boolean;
    'discountType'?: number;
    'useInlineDiscount'?: boolean;
    'useInlineVat'?: boolean;
    'exemptAmount'?: number | null;
    'vatableAmount'?: number | null;
    'payments'?: SimpleDocumentResponseAllOfDataPayments;
    'company'?: SimpleDocumentResponseAllOfDataCompany;
    'status'?: number;
    'statusString'?: number;
    'documentType'?: number;
    'allowDelete'?: boolean;
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
