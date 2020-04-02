import { Document } from './document';
import { InlineProductItem } from './inlineProductItem';
import { UpgradeDocument } from './upgradeDocument';
export declare class InlineDocument extends Document {
    'discountType'?: number;
    'useInlineDiscount'?: boolean;
    'useInlineVat'?: boolean;
    'exemptAmount'?: number;
    'vatableAmount'?: number;
    'items'?: Array<InlineProductItem>;
    'documentReference'?: Array<UpgradeDocument>;
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
