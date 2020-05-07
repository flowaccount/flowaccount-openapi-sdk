import { PaymentDocumentResponse } from './paymentDocumentResponse';
import { ReferencedByMe } from './referencedByMe';
import { ReferencedToMe } from './referencedToMe';
import { SimpleProductItem } from './simpleProductItem';
export declare class SimpleDocumentResponseAllOfData {
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
    'useReceiptDeduction'?: boolean;
    'subTotal'?: number;
    'discountPercentage'?: number;
    'discountAmount'?: number;
    'totalAfterDiscount'?: number;
    'totalWithoutVat'?: number;
    'isVat'?: boolean;
    'vatAmount'?: number;
    'grandTotal'?: number;
    'documentShowWithholdingTax'?: boolean;
    'documentWithholdingTaxPercentage'?: number;
    'documentDeductionType'?: number;
    'documentDeductionAmount'?: number;
    'remarks'?: string;
    'internalNotes'?: string;
    'showSignatureOrStamp'?: boolean;
    'items'?: Array<SimpleProductItem>;
    'referencedToMe'?: Array<ReferencedToMe>;
    'referencedByMe'?: Array<ReferencedByMe>;
    'payments'?: Array<PaymentDocumentResponse>;
    'company'?: Array<object>;
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
