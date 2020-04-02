export declare class PaymentDocumentResponse {
    'paymentDate'?: string;
    'collected'?: number;
    'paymentDeductionType'?: number;
    'paymentDeductionAmount'?: number;
    'withheldPercentage'?: number;
    'withheldAmount'?: number;
    'paymentCharge'?: number;
    'paymentMethod'?: number;
    'paymentChannel'?: string;
    'bankAccountType'?: number;
    'bankAccountName'?: string;
    'bankAccountNumber'?: string;
    'chequeDate'?: string;
    'chequeNumber'?: string;
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
