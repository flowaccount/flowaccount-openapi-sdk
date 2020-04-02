export declare class PaymentDocument {
    'documentId': number;
    'paymentDate': string;
    'collected': number;
    'paymentDeductionType'?: number;
    'paymentDeductionAmount'?: number;
    'withheldPercentage'?: number;
    'withheldAmount'?: number;
    'paymentCharge'?: number;
    'paymentMethod': number;
    'transferBankAccountId'?: number;
    'bankAccountId'?: number;
    'chequeDate'?: string;
    'chequeNumber'?: string;
    'chequeBankAccountId'?: number;
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
