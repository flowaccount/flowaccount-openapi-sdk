/// <reference types="node" />
import http = require('http');
import { CompanyInfo } from '../model/companyInfo';
import { CompanyInfoResponse } from '../model/companyInfoResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum BusinessInfomationApiApiKeys {
}
export declare class BusinessInfomationApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    defaultHeaders: any;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: BusinessInfomationApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    companyInfoGet(authorization: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CompanyInfoResponse;
    }>;
    companyInfoPut(authorization: string, companyInfo: CompanyInfo, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CompanyInfoResponse;
    }>;
}
