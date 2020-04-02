/// <reference types="node" />
import http = require('http');
import { Contact } from '../model/contact';
import { ContactResponse } from '../model/contactResponse';
import { DeleteResponse } from '../model/deleteResponse';
import { Authentication } from '../model/models';
export declare enum ContactsApiApiKeys {
}
export declare class ContactsApi {
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
    setApiKey(key: ContactsApiApiKeys, value: string): void;
    contactsGet(currentPage: number, pageSize: number, authorization: string, sortBy?: string, filter?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ContactResponse;
    }>;
    contactsIdDelete(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteResponse;
    }>;
    contactsIdGet(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ContactResponse;
    }>;
    contactsIdPut(authorization: string, id: string, contact: Contact, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ContactResponse;
    }>;
    contactsPost(authorization: string, contact: Contact, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ContactResponse;
    }>;
}
