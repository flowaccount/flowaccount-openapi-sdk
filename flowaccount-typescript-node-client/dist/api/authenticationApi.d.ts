/// <reference types="node" />
import http = require('http');
import { AuthenResponse } from '../model/authenResponse';
import { Authentication } from '../model/models';
export declare enum AuthenticationApiApiKeys {
}
export declare class AuthenticationApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: AuthenticationApiApiKeys, value: string): void;
    tokenPost(contentType: string, grantType?: string, scope?: string, clientId?: string, clientSecret?: string, guid?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AuthenResponse;
    }>;
}
