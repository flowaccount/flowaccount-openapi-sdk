export * from './authenticationApi';
import { AuthenticationApi } from './authenticationApi';
export * from './bankAccountApi';
import { BankAccountApi } from './bankAccountApi';
export * from './billingNotesApi';
import { BillingNotesApi } from './billingNotesApi';
export * from './businessInfomationApi';
import { BusinessInfomationApi } from './businessInfomationApi';
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

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [AuthenticationApi, BankAccountApi, BillingNotesApi, BusinessInfomationApi, CashInvoiceApi, ContactsApi, ExpensesApi, ProductsApi, PurchaseOrderApi, QuotationsApi, ReceiptApi, ReceivingInventoryApi, TaxInvoiceApi, WithholdingTaxApi];
