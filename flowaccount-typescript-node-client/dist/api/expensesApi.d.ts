/// <reference types="node" />
import http = require('http');
import { AttachmentResponse } from '../model/attachmentResponse';
import { BusinessCategory } from '../model/businessCategory';
import { DeleteResponse } from '../model/deleteResponse';
import { ExpenseDocument } from '../model/expenseDocument';
import { ExpenseDocumentResponse } from '../model/expenseDocumentResponse';
import { ExpenseInlineDocument } from '../model/expenseInlineDocument';
import { ExpenseInlineDocumentResponse } from '../model/expenseInlineDocumentResponse';
import { PaymentDocument } from '../model/paymentDocument';
import { SendEmailResponse } from '../model/sendEmailResponse';
import { SendEmailSimple } from '../model/sendEmailSimple';
import { ShareDocument } from '../model/shareDocument';
import { ShareDocumentResponse } from '../model/shareDocumentResponse';
import { Authentication } from '../model/models';
import { RequestFile } from './apis';
export declare enum ExpensesApiApiKeys {
}
export declare class ExpensesApi {
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
    setApiKey(key: ExpensesApiApiKeys, value: string): void;
    expensesCategoriesAccountingGet(authorization: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BusinessCategory;
    }>;
    expensesCategoriesBusinessGet(authorization: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BusinessCategory;
    }>;
    expensesEmailDocumentPost(authorization: string, sendEmailSimple: SendEmailSimple, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SendEmailResponse;
    }>;
    expensesGet(currentPage: number, pageSize: number, authorization: string, sortBy?: string, filter?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ExpenseInlineDocumentResponse;
    }>;
    expensesIdAttachmentPost(authorization: string, id: string, file?: RequestFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AttachmentResponse;
    }>;
    expensesIdDelete(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteResponse;
    }>;
    expensesIdGet(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ExpenseInlineDocumentResponse;
    }>;
    expensesIdPaymentPost(authorization: string, id: string, paymentDocument: PaymentDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ExpenseDocumentResponse;
    }>;
    expensesIdStatusKeyStatusIdPost(authorization: string, id: string, statusId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ExpenseInlineDocumentResponse;
    }>;
    expensesInlinePost(authorization: string, expenseInlineDocument: ExpenseInlineDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ExpenseInlineDocumentResponse;
    }>;
    expensesPost(authorization: string, expenseDocument: ExpenseDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ExpenseDocumentResponse;
    }>;
    expensesSharedocumentPost(authorization: string, shareDocument: ShareDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ShareDocumentResponse;
    }>;
}
