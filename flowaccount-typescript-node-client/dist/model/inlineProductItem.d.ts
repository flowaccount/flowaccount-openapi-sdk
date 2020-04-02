import { ProductItem } from './productItem';
export declare class InlineProductItem extends ProductItem {
    'discountAmount'?: number;
    'vatRate'?: number;
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
