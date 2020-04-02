import { DocumentResponse } from './documentResponse';
import { InlineDocumentResponseAllOfData } from './inlineDocumentResponseAllOfData';
export declare class InlineDocumentResponse extends DocumentResponse {
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
