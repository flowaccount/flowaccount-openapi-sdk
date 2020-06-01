/// <reference types="node" />
import http = require('http');
import { AttachmentResponse } from '../model/attachmentResponse';
import { DeleteResponse } from '../model/deleteResponse';
import { InlineDocument } from '../model/inlineDocument';
import { InlineDocumentResponse } from '../model/inlineDocumentResponse';
import { InlineDocumentWithPaymentPaidCash } from '../model/inlineDocumentWithPaymentPaidCash';
import { InlineDocumentWithPaymentPaidCheque } from '../model/inlineDocumentWithPaymentPaidCheque';
import { InlineDocumentWithPaymentPaidCreditCard } from '../model/inlineDocumentWithPaymentPaidCreditCard';
import { InlineDocumentWithPaymentPaidTransfer } from '../model/inlineDocumentWithPaymentPaidTransfer';
import { PaymentPaidCash } from '../model/paymentPaidCash';
import { PaymentPaidCheque } from '../model/paymentPaidCheque';
import { PaymentPaidCreditCard } from '../model/paymentPaidCreditCard';
import { PaymentPaidTransfer } from '../model/paymentPaidTransfer';
import { SendEmailCoppies } from '../model/sendEmailCoppies';
import { SendEmailResponse } from '../model/sendEmailResponse';
import { ShareDocument } from '../model/shareDocument';
import { ShareDocumentResponse } from '../model/shareDocumentResponse';
import { SimpleDocument } from '../model/simpleDocument';
import { SimpleDocumentResponse } from '../model/simpleDocumentResponse';
import { SimpleDocumentWithPaymentPaidCash } from '../model/simpleDocumentWithPaymentPaidCash';
import { SimpleDocumentWithPaymentPaidCheque } from '../model/simpleDocumentWithPaymentPaidCheque';
import { SimpleDocumentWithPaymentPaidCreditCard } from '../model/simpleDocumentWithPaymentPaidCreditCard';
import { SimpleDocumentWithPaymentPaidTransfer } from '../model/simpleDocumentWithPaymentPaidTransfer';
import { UpdateInlineDocument } from '../model/updateInlineDocument';
import { Authentication } from '../model/models';
import { RequestFile } from './apis';
export declare enum ReceivingInventoryApiApiKeys {
}
export declare class ReceivingInventoryApi {
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
    setApiKey(key: ReceivingInventoryApiApiKeys, value: string): void;
    purchasesEmailDocumentPost(authorization: string, sendEmailCoppies: SendEmailCoppies, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SendEmailResponse;
    }>;
    purchasesGet(currentPage: number, pageSize: number, authorization: string, sortBy?: string, filter?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    purchasesIdAttachmentPost(authorization: string, id: string, file?: RequestFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AttachmentResponse;
    }>;
    purchasesIdDelete(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteResponse;
    }>;
    purchasesIdGet(authorization: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    purchasesIdPaymentPost(authorization: string, id: string, paymentPaidCashPaymentPaidTransferPaymentPaidChequePaymentPaidCreditCard: PaymentPaidCash | PaymentPaidTransfer | PaymentPaidCheque | PaymentPaidCreditCard, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    purchasesIdPut(authorization: string, id: string, updateInlineDocument: UpdateInlineDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    purchasesIdStatusStatusIdPost(authorization: string, id: string, statusId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    purchasesInlinePost(authorization: string, inlineDocument: InlineDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    purchasesInlineWithPaymentPost(authorization: string, inlineDocumentWithPaymentPaidCashInlineDocumentWithPaymentPaidTransferInlineDocumentWithPaymentPaidChequeInlineDocumentWithPaymentPaidCreditCard: InlineDocumentWithPaymentPaidCash | InlineDocumentWithPaymentPaidTransfer | InlineDocumentWithPaymentPaidCheque | InlineDocumentWithPaymentPaidCreditCard, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineDocumentResponse;
    }>;
    purchasesPost(authorization: string, simpleDocument: SimpleDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SimpleDocumentResponse;
    }>;
    purchasesSharedocumentPost(authorization: string, shareDocument: ShareDocument, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ShareDocumentResponse;
    }>;
    purchasesWithPaymentPost(authorization: string, simpleDocumentWithPaymentPaidCashSimpleDocumentWithPaymentPaidTransferSimpleDocumentWithPaymentPaidChequeSimpleDocumentWithPaymentPaidCreditCard: SimpleDocumentWithPaymentPaidCash | SimpleDocumentWithPaymentPaidTransfer | SimpleDocumentWithPaymentPaidCheque | SimpleDocumentWithPaymentPaidCreditCard, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SimpleDocumentResponse;
    }>;
}
