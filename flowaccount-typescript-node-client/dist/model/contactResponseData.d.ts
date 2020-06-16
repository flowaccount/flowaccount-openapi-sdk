import { Contact } from './contact';
export declare class ContactResponseData {
    'total'?: number;
    'currentPage'?: number;
    'list'?: Array<Contact>;
    'isDB'?: boolean;
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
