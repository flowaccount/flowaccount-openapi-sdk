import { SimpleProductItem } from './simpleProductItem';
import { UpgradeDocument } from './upgradeDocument';
export declare class InlineDocumentWithPaymentPaid {
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
    'useReceiptDeduction'?: boolean;
    'items'?: Array<SimpleProductItem>;
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
    'vatableAmount'?: number | null;
    'documentShowWithholdingTax'?: boolean;
    'documentWithholdingTaxPercentage'?: number;
    'documentWithholdingTaxAmount'?: number;
    'documentDeductionType'?: number;
    'documentDeductionAmount'?: number;
    'remarks'?: string;
    'internalNotes'?: string;
    'showSignatureOrStamp'?: boolean;
    'documentReference'?: Array<UpgradeDocument>;
    'documentPaymentStructureType': string | null;
    'paymentMethod': number;
    'paymentDate': string;
    'collected': number;
    'withheldPercentage'?: number;
    'withheldAmount'?: number;
    'transferBankAccountId'?: number;
    'bankAccountId'?: number;
    'paymentCharge'?: number;
    'paymentRemarks'?: string;
    'remainingCollectedType'?: number;
    'remainingCollected'?: number;
    'chequeDate'?: string;
    'chequeNumber'?: string;
    'chequeBankAccountId'?: number;
    'creditCardBankAccountId'?: number;
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
