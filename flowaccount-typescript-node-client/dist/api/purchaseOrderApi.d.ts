/// <reference types="node" />
import http = require('http');
import { AllDocumentResponse } from '../model/allDocumentResponse';
import { AttachmentResponse } from '../model/attachmentResponse';
import { DeleteResponse } from '../model/deleteResponse';
import { InlineDocument } from '../model/inlineDocument';
import { InlineDocumentResponse } from '../model/inlineDocumentResponse';
import { SendEmailCoppies } from '../model/sendEmailCoppies';
import { SendEmailResponse } from '../model/sendEmailResponse';
import { ShareDocument } from '../model/shareDocument';
import { ShareDocumentResponse } from '../model/shareDocumentResponse';
import { SimpleDocument } from '../model/simpleDocument';
import { SimpleDocumentResponse } from '../model/simpleDocumentResponse';
import { UpdateInlineDocument } from '../model/updateInlineDocument';
import { Authentication, Interceptor } from '../model/models';
import { RequestFile } from './apis';
export declare enum PurchaseOrderApiApiKeys {
}
export declare class PurchaseOrderApi {
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
    setApiKey(key: PurchaseOrderApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    purchasesOrdersEmailDocumentPost(authorization: string, sendEmailCoppies: SendEmailCoppies, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SendEmailResponse;
    }>;
    purchasesOrdersGet(currentPage: number, pageSize: number, authorization: string, sortBy?: string, filter?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AllDocumentResponse;
    }>;
    purchasesOrdersIdAttachmentPost(authorization: string, id: string, file?: RequestFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AttachmentResponse;
    }>;
    purchasesOrdersIdDelete(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteResponse;
    }>;
    purchasesOrdersIdGet(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    purchasesOrdersIdPut(authorization: string, id: string, updateInlineDocument: UpdateInlineDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    purchasesOrdersIdStatusStatusIdPost(authorization: string, id: string, statusId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    purchasesOrdersInlinePost(authorization: string, inlineDocument: InlineDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    purchasesOrdersPost(authorization: string, simpleDocument: SimpleDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SimpleDocumentResponse;
    }>;
    purchasesOrdersSharedocumentPost(authorization: string, shareDocument: ShareDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ShareDocumentResponse;
    }>;
}
