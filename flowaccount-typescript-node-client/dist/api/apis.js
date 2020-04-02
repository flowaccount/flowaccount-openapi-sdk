"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./authenticationApi"));
const authenticationApi_1 = require("./authenticationApi");
__export(require("./billingNotesApi"));
const billingNotesApi_1 = require("./billingNotesApi");
__export(require("./cashInvoiceApi"));
const cashInvoiceApi_1 = require("./cashInvoiceApi");
__export(require("./contactsApi"));
const contactsApi_1 = require("./contactsApi");
__export(require("./expensesApi"));
const expensesApi_1 = require("./expensesApi");
__export(require("./productsApi"));
const productsApi_1 = require("./productsApi");
__export(require("./purchaseOrderApi"));
const purchaseOrderApi_1 = require("./purchaseOrderApi");
__export(require("./quotationsApi"));
const quotationsApi_1 = require("./quotationsApi");
__export(require("./receiptApi"));
const receiptApi_1 = require("./receiptApi");
__export(require("./receivingInventoryApi"));
const receivingInventoryApi_1 = require("./receivingInventoryApi");
__export(require("./taxInvoiceApi"));
const taxInvoiceApi_1 = require("./taxInvoiceApi");
__export(require("./withholdingTaxApi"));
const withholdingTaxApi_1 = require("./withholdingTaxApi");
class HttpError extends Error {
    constructor(response, body, statusCode) {
        super('HTTP request failed');
        this.response = response;
        this.body = body;
        this.statusCode = statusCode;
        this.name = 'HttpError';
    }
}
exports.HttpError = HttpError;
exports.APIS = [authenticationApi_1.AuthenticationApi, billingNotesApi_1.BillingNotesApi, cashInvoiceApi_1.CashInvoiceApi, contactsApi_1.ContactsApi, expensesApi_1.ExpensesApi, productsApi_1.ProductsApi, purchaseOrderApi_1.PurchaseOrderApi, quotationsApi_1.QuotationsApi, receiptApi_1.ReceiptApi, receivingInventoryApi_1.ReceivingInventoryApi, taxInvoiceApi_1.TaxInvoiceApi, withholdingTaxApi_1.WithholdingTaxApi];
//# sourceMappingURL=apis.js.map