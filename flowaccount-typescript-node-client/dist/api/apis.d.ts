/// <reference types="node" />
export * from './authenticationApi';
import { AuthenticationApi } from './authenticationApi';
export * from './billingNotesApi';
import { BillingNotesApi } from './billingNotesApi';
export * from './cashInvoiceApi';
import { CashInvoiceApi } from './cashInvoiceApi';
export * from './contactsApi';
import { ContactsApi } from './contactsApi';
export * from './expensesApi';
import { ExpensesApi } from './expensesApi';
export * from './productsApi';
import { ProductsApi } from './productsApi';
export * from './purchaseOrderApi';
import { PurchaseOrderApi } from './purchaseOrderApi';
export * from './quotationsApi';
import { QuotationsApi } from './quotationsApi';
export * from './receiptApi';
import { ReceiptApi } from './receiptApi';
export * from './receivingInventoryApi';
import { ReceivingInventoryApi } from './receivingInventoryApi';
export * from './taxInvoiceApi';
import { TaxInvoiceApi } from './taxInvoiceApi';
export * from './withholdingTaxApi';
import { WithholdingTaxApi } from './withholdingTaxApi';
import * as fs from 'fs';
import * as http from 'http';
export declare class HttpError extends Error {
    response: http.IncomingMessage;
    body: any;
    statusCode?: number | undefined;
    constructor(response: http.IncomingMessage, body: any, statusCode?: number | undefined);
}
export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    };
}
export declare type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;
export declare const APIS: (typeof AuthenticationApi | typeof BillingNotesApi | typeof CashInvoiceApi | typeof ContactsApi | typeof ExpensesApi | typeof ProductsApi | typeof PurchaseOrderApi | typeof QuotationsApi | typeof ReceiptApi | typeof ReceivingInventoryApi | typeof TaxInvoiceApi | typeof WithholdingTaxApi)[];
