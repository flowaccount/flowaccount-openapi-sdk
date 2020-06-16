/// <reference types="node" />
import http = require('http');
import { AllDocumentResponse } from '../model/allDocumentResponse';
import { AttachmentResponse } from '../model/attachmentResponse';
import { DeleteResponse } from '../model/deleteResponse';
import { InlineDocument } from '../model/inlineDocument';
import { InlineDocumentResponse } from '../model/inlineDocumentResponse';
import { SendEmailResponse } from '../model/sendEmailResponse';
import { SendEmailSimple } from '../model/sendEmailSimple';
import { ShareDocument } from '../model/shareDocument';
import { ShareDocumentResponse } from '../model/shareDocumentResponse';
import { SimpleDocument } from '../model/simpleDocument';
import { UpdateInlineDocument } from '../model/updateInlineDocument';
import { Authentication, Interceptor } from '../model/models';
import { RequestFile } from './apis';
export declare enum QuotationsApiApiKeys {
}
export declare class QuotationsApi {
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
    setApiKey(key: QuotationsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    quotationsEmailDocumentPost(authorization: string, sendEmailSimple: SendEmailSimple, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SendEmailResponse;
    }>;
    quotationsGet(currentPage: number, pageSize: number, authorization: string, sortBy?: string, filter?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AllDocumentResponse;
    }>;
    quotationsIdAttachmentPost(authorization: string, id: string, file?: RequestFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AttachmentResponse;
    }>;
    quotationsIdDelete(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteResponse;
    }>;
    quotationsIdGet(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    quotationsIdPut(authorization: string, id: string, updateInlineDocument: UpdateInlineDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    quotationsIdStatusStatusIdPost(authorization: string, id: string, statusId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    quotationsInlinePost(authorization: string, inlineDocument: InlineDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    quotationsPost(authorization: string, simpleDocument: SimpleDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    quotationsSharedocumentPost(authorization: string, shareDocument: ShareDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ShareDocumentResponse;
    }>;
}
