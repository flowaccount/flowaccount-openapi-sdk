export declare class PaymentReceivingDocument {
    'paymentStructureType': string | null;
    'documentId': number;
    'paymentMethod': number;
    'paymentDate': string;
    'collected': number;
    'paymentDeductionType'?: number;
    'paymentDeductionAmount'?: number;
    'withheldPercentage'?: number;
    'withheldAmount'?: number;
    'transferBankAccountId'?: number;
    'bankAccountId'?: number;
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
