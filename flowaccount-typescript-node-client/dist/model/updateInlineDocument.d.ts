import { InlineProductItem } from './inlineProductItem';
import { UpdateDocument } from './updateDocument';
import { UpgradeDocument } from './upgradeDocument';
export declare class UpdateInlineDocument extends UpdateDocument {
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
