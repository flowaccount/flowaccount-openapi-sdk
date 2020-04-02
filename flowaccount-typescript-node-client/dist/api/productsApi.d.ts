/// <reference types="node" />
import http = require('http');
import { DeleteResponse } from '../model/deleteResponse';
import { Product } from '../model/product';
import { ProductResponse } from '../model/productResponse';
import { Authentication } from '../model/models';
export declare enum ProductsApiApiKeys {
}
export declare class ProductsApi {
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
    setApiKey(key: ProductsApiApiKeys, value: string): void;
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
    productsIdPut(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProductResponse;
    }>;
    productsPost(authorization: string, product: Product, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProductResponse;
    }>;
}
