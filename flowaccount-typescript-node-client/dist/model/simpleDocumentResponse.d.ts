import { DocumentResponse } from './documentResponse';
import { SimpleDocumentResponseAllOfData } from './simpleDocumentResponseAllOfData';
export declare class SimpleDocumentResponse extends DocumentResponse {
    'data'?: SimpleDocumentResponseAllOfData;
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
