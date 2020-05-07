import { SimpleProductItem } from './simpleProductItem';
import { UpdateDocument } from './updateDocument';
import { UpgradeDocument } from './upgradeDocument';
export declare class UpdateSimpleDocument extends UpdateDocument {
    'items'?: Array<SimpleProductItem>;
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
