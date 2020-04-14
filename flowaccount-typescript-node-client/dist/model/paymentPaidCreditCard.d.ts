export declare class PaymentPaidCreditCard {
    'paymentStructureType': string;
    'documentId': number;
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
