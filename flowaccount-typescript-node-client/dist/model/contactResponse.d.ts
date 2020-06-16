import { ContactResponseData } from './contactResponseData';
export declare class ContactResponse {
    'status'?: boolean;
    'message'?: string;
    'code'?: number;
    'data'?: ContactResponseData;
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
