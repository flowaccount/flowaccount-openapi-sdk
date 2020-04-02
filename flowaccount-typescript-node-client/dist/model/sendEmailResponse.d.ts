import { SendEmailResponseData } from './sendEmailResponseData';
export declare class SendEmailResponse {
    'status'?: boolean;
    'message'?: string;
    'code'?: number;
    'data'?: SendEmailResponseData;
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
