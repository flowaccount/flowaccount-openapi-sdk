export declare class SendEmail {
    'documentId': number;
    'fromemail': string;
    'toemail': string;
    'cCMyself'?: boolean;
    'ccEmail'?: string;
    'bccEmail'?: string;
    'subject': string;
    'message'?: string;
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
