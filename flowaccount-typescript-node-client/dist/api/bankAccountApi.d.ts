/// <reference types="node" />
import http = require('http');
import { BankAccount } from '../model/bankAccount';
import { BankAccountResponse } from '../model/bankAccountResponse';
import { Authentication } from '../model/models';
export declare enum BankAccountApiApiKeys {
}
export declare class BankAccountApi {
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
    setApiKey(key: BankAccountApiApiKeys, value: string): void;
    bankAccountsGet(authorization: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BankAccountResponse;
    }>;
    bankAccountsPost(authorization: string, bankAccount: BankAccount, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BankAccountResponse;
    }>;
}
