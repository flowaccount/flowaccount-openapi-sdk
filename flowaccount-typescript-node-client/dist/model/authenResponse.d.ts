export declare class AuthenResponse {
    'accessToken'?: string;
    'expiresIn'?: number;
    'tokenType'?: string;
    'refreshToken'?: string;
    'error'?: string;
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
