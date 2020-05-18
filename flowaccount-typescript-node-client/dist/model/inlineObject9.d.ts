export declare class InlineObject9 {
    'grantType'?: string;
    'scope'?: string;
    'clientId'?: string;
    'clientSecret'?: string;
    'guid'?: string;
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
