export declare class Product {
    'id'?: string;
    'type'?: number;
    'code'?: string;
    'name'?: string;
    'sellDescription'?: string;
    'sellPrice'?: number;
    'sellPriceWithVat'?: number;
    'sellVatType'?: number;
    'unitName'?: string;
    'categoryId'?: number;
    'categoryName'?: string;
    'barcode'?: string;
    'buyDescription'?: string;
    'buyPrice'?: number;
    'buyVatType'?: number;
    'buyVatTypeWithVat'?: number;
    'inventoryPublishedOn'?: string;
    'inventoryQuantity'?: number;
    'inventoryPrice'?: number;
    'inventoryTotal'?: number;
    'averageBuyPrice'?: number;
    'averageSellPrice'?: number;
    'remainingStock'?: number;
    'totalValueInHand'?: number;
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
