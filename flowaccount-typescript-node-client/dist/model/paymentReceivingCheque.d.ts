export declare class PaymentReceivingCheque {
    'paymentStructureType': string;
    'documentId': number;
    'paymentMethod': number;
    'paymentDate': string;
    'collected': number;
    'paymentDeductionType'?: number;
    'paymentDeductionAmount'?: number;
    'withheldPercentage'?: number;
    'withheldAmount'?: number;
    'chequeDate'?: string;
    'chequeNumber'?: string;
    'chequeBankAccountId'?: number;
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
