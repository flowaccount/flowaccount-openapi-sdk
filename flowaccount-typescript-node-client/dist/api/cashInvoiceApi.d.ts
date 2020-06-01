/// <reference types="node" />
import http = require('http');
import { AttachmentResponse } from '../model/attachmentResponse';
import { DeleteResponse } from '../model/deleteResponse';
import { InlineDocument } from '../model/inlineDocument';
import { InlineDocumentResponse } from '../model/inlineDocumentResponse';
import { InlineDocumentWithPaymentReceivingCash } from '../model/inlineDocumentWithPaymentReceivingCash';
import { InlineDocumentWithPaymentReceivingCheque } from '../model/inlineDocumentWithPaymentReceivingCheque';
import { InlineDocumentWithPaymentReceivingCreditCard } from '../model/inlineDocumentWithPaymentReceivingCreditCard';
import { InlineDocumentWithPaymentReceivingTransfer } from '../model/inlineDocumentWithPaymentReceivingTransfer';
import { PaymentReceivingCash } from '../model/paymentReceivingCash';
import { PaymentReceivingCheque } from '../model/paymentReceivingCheque';
import { PaymentReceivingCreditCard } from '../model/paymentReceivingCreditCard';
import { PaymentReceivingTransfer } from '../model/paymentReceivingTransfer';
import { SendEmailCoppies } from '../model/sendEmailCoppies';
import { SendEmailResponse } from '../model/sendEmailResponse';
import { ShareDocument } from '../model/shareDocument';
import { ShareDocumentResponse } from '../model/shareDocumentResponse';
import { SimpleDocument } from '../model/simpleDocument';
import { SimpleDocumentResponse } from '../model/simpleDocumentResponse';
import { SimpleDocumentWithPaymentReceivingCash } from '../model/simpleDocumentWithPaymentReceivingCash';
import { SimpleDocumentWithPaymentReceivingCheque } from '../model/simpleDocumentWithPaymentReceivingCheque';
import { SimpleDocumentWithPaymentReceivingCreditCard } from '../model/simpleDocumentWithPaymentReceivingCreditCard';
import { SimpleDocumentWithPaymentReceivingTransfer } from '../model/simpleDocumentWithPaymentReceivingTransfer';
import { UpdateInlineDocument } from '../model/updateInlineDocument';
import { Authentication } from '../model/models';
import { RequestFile } from './apis';
export declare enum CashInvoiceApiApiKeys {
}
export declare class CashInvoiceApi {
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
    setApiKey(key: CashInvoiceApiApiKeys, value: string): void;
    cashInvoicesEmailDocumentPost(authorization: string, sendEmailCoppies: SendEmailCoppies, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SendEmailResponse;
    }>;
    cashInvoicesGet(currentPage: number, pageSize: number, authorization: string, sortBy?: string, filter?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    cashInvoicesIdAttachmentPost(authorization: string, id: string, file?: RequestFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AttachmentResponse;
    }>;
    cashInvoicesIdDelete(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteResponse;
    }>;
    cashInvoicesIdGet(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    cashInvoicesIdPaymentPost(authorization: string, id: string, paymentReceivingCashPaymentReceivingTransferPaymentReceivingChequePaymentReceivingCreditCard: PaymentReceivingCash | PaymentReceivingTransfer | PaymentReceivingCheque | PaymentReceivingCreditCard, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    cashInvoicesIdPut(authorization: string, id: string, updateInlineDocument: UpdateInlineDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    cashInvoicesIdStatusStatusIdPost(authorization: string, id: string, statusId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    cashInvoicesInlinePost(authorization: string, inlineDocument: InlineDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    cashInvoicesInlineWithPaymentPost(authorization: string, inlineDocumentWithPaymentReceivingCashInlineDocumentWithPaymentReceivingTransferInlineDocumentWithPaymentReceivingChequeInlineDocumentWithPaymentReceivingCreditCard: InlineDocumentWithPaymentReceivingCash | InlineDocumentWithPaymentReceivingTransfer | InlineDocumentWithPaymentReceivingCheque | InlineDocumentWithPaymentReceivingCreditCard, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    cashInvoicesPost(authorization: string, simpleDocument: SimpleDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SimpleDocumentResponse;
    }>;
    cashInvoicesSharedocumentPost(authorization: string, shareDocument: ShareDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ShareDocumentResponse;
    }>;
    cashInvoicesWithPaymentPost(authorization: string, simpleDocumentWithPaymentReceivingCashSimpleDocumentWithPaymentReceivingTransferSimpleDocumentWithPaymentReceivingChequeSimpleDocumentWithPaymentReceivingCreditCard: SimpleDocumentWithPaymentReceivingCash | SimpleDocumentWithPaymentReceivingTransfer | SimpleDocumentWithPaymentReceivingCheque | SimpleDocumentWithPaymentReceivingCreditCard, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SimpleDocumentResponse;
    }>;
}
