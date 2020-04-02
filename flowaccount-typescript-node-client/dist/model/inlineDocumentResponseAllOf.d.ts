import { InlineDocumentResponseAllOfData } from './inlineDocumentResponseAllOfData';
export declare class InlineDocumentResponseAllOf {
    'data'?: InlineDocumentResponseAllOfData;
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
