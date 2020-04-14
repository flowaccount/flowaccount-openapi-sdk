export declare class PaymentPaidCheque {
    'paymentStructureType': string;
    'documentId': number;
    'paymentMethod': number;
    'paymentDate': string;
    'collected': number;
    'withheldPercentage'?: number;
    'withheldAmount'?: number;
    'chequeDate'?: string;
    'chequeNumber'?: string;
    'chequeBankAccountId'?: number;
    'bankAccountId'?: number;
    'paymentCharge'?: number;
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
