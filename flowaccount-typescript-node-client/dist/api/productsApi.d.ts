/// <reference types="node" />
import http = require('http');
import { DeleteResponse } from '../model/deleteResponse';
import { ProductResponse } from '../model/productResponse';
import { ProductType } from '../model/productType';
import { Authentication, Interceptor } from '../model/models';
export declare enum ProductsApiApiKeys {
}
export declare class ProductsApi {
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
    setApiKey(key: ProductsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    productsGet(currentPage: number, pageSize: number, authorization: string, sortBy?: string, filter?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProductResponse;
    }>;
    productsIdDelete(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteResponse;
    }>;
    productsIdGet(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProductResponse;
    }>;
    productsIdPut(authorization: string, id: string, productType: ProductType, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProductResponse;
    }>;
    productsPost(authorization: string, productType: ProductType, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProductResponse;
    }>;
}
