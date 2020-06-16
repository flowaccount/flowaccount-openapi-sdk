export declare class PaymentReceivingCash {
    'paymentStructureType': string | null;
    'documentId': number;
    'paymentMethod': number;
    'paymentDate': string;
    'collected': number;
    'paymentDeductionType'?: number;
    'paymentDeductionAmount'?: number;
    'withheldPercentage'?: number;
    'withheldAmount'?: number;
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
