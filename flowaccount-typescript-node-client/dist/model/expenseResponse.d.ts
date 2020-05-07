export declare class ExpenseResponse {
    'status'?: boolean;
    'message'?: string;
    'code'?: number;
    'expenseStructureType'?: string;
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
