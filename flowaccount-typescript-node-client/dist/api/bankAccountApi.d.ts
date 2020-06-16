/// <reference types="node" />
import http = require('http');
import { AllBankAccountResponse } from '../model/allBankAccountResponse';
import { BankAccount } from '../model/bankAccount';
import { BankAccountResponse } from '../model/bankAccountResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum BankAccountApiApiKeys {
}
export declare class BankAccountApi {
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
    setApiKey(key: BankAccountApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    bankAccountsGet(authorization: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AllBankAccountResponse;
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
