/// <reference types="node" />
import http = require('http');
import { AllExpenseDocumentResponse } from '../model/allExpenseDocumentResponse';
import { AttachmentResponse } from '../model/attachmentResponse';
import { BusinessCategory } from '../model/businessCategory';
import { DeleteResponse } from '../model/deleteResponse';
import { ExpenseInlineDocument } from '../model/expenseInlineDocument';
import { ExpenseInlineDocumentResponse } from '../model/expenseInlineDocumentResponse';
import { ExpenseInlineDocumentWithPaymentPaid } from '../model/expenseInlineDocumentWithPaymentPaid';
import { ExpenseSimpleDocument } from '../model/expenseSimpleDocument';
import { ExpenseSimpleDocumentResponse } from '../model/expenseSimpleDocumentResponse';
import { ExpenseSimpleDocumentWithPaymentPaid } from '../model/expenseSimpleDocumentWithPaymentPaid';
import { PaymentPaidDocument } from '../model/paymentPaidDocument';
import { SendEmailResponse } from '../model/sendEmailResponse';
import { SendEmailSimple } from '../model/sendEmailSimple';
import { ShareDocument } from '../model/shareDocument';
import { ShareDocumentResponse } from '../model/shareDocumentResponse';
import { UpdateExpenseDocument } from '../model/updateExpenseDocument';
import { Authentication, Interceptor } from '../model/models';
import { RequestFile } from './apis';
export declare enum ExpensesApiApiKeys {
}
export declare class ExpensesApi {
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
    setApiKey(key: ExpensesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
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
        body: AllExpenseDocumentResponse;
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
        body: AllExpenseDocumentResponse;
    }>;
    expensesIdPaymentPost(authorization: string, id: string, paymentPaidDocument: PaymentPaidDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ExpenseSimpleDocumentResponse;
    }>;
    expensesIdPut(authorization: string, id: string, updateExpenseDocument: UpdateExpenseDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ExpenseInlineDocumentResponse;
    }>;
    expensesIdStatusStatusIdPost(authorization: string, id: string, statusId: string, options?: {
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
    expensesInlineWithPaymentPost(authorization: string, expenseInlineDocumentWithPaymentPaid: ExpenseInlineDocumentWithPaymentPaid, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ExpenseInlineDocumentResponse;
    }>;
    expensesPost(authorization: string, expenseSimpleDocument: ExpenseSimpleDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ExpenseSimpleDocumentResponse;
    }>;
    expensesSharedocumentPost(authorization: string, shareDocument: ShareDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ShareDocumentResponse;
    }>;
    expensesWithPaymentPost(authorization: string, expenseSimpleDocumentWithPaymentPaid: ExpenseSimpleDocumentWithPaymentPaid, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ExpenseSimpleDocumentResponse;
    }>;
}
