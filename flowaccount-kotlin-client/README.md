# org.openapitools.client - Kotlin client library for FlowAccount Open API

## Requires

* Kotlin 1.3.41
* Gradle 4.9

## Build

First, create the gradle wrapper script:

```
gradle wrapper
```

Then, run:

```
./gradlew check assemble
```

This runs all tests and packages the library.

## Features/Implementation Notes

* Supports JSON inputs/outputs, File inputs, and Form inputs.
* Supports collection formats for query parameters: csv, tsv, ssv, pipes.
* Some Kotlin and Java types are fully qualified to avoid conflicts with types defined in OpenAPI definitions.
* Implementation of ApiClient is intended to reduce method counts, specifically to benefit Android targets.

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://openapi.flowaccount.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthenticationApi* | [**tokenPost**](docs/AuthenticationApi.md#tokenpost) | **POST** /token | Generate Access Token
*BankAccountApi* | [**bankAccountsGet**](docs/BankAccountApi.md#bankaccountsget) | **GET** /bank-accounts | Get list all My Bank Account
*BankAccountApi* | [**bankAccountsPost**](docs/BankAccountApi.md#bankaccountspost) | **POST** /bank-accounts | Create bank account.
*BillingNotesApi* | [**billingNotesEmailDocumentPost**](docs/BillingNotesApi.md#billingnotesemaildocumentpost) | **POST** /billing-notes/email-document | Send email billing notes document.
*BillingNotesApi* | [**billingNotesGet**](docs/BillingNotesApi.md#billingnotesget) | **GET** /billing-notes | Get all billing notes documents.
*BillingNotesApi* | [**billingNotesIdAttachmentPost**](docs/BillingNotesApi.md#billingnotesidattachmentpost) | **POST** /billing-notes/{id}/attachment | Attachment billing notes document.
*BillingNotesApi* | [**billingNotesIdDelete**](docs/BillingNotesApi.md#billingnotesiddelete) | **DELETE** /billing-notes/{id} | Delete billing notes document.
*BillingNotesApi* | [**billingNotesIdGet**](docs/BillingNotesApi.md#billingnotesidget) | **GET** /billing-notes/{id} | Get billing notes document.
*BillingNotesApi* | [**billingNotesIdPut**](docs/BillingNotesApi.md#billingnotesidput) | **PUT** /billing-notes/{id} | Edit billing notes document.
*BillingNotesApi* | [**billingNotesIdStatusStatusIdPost**](docs/BillingNotesApi.md#billingnotesidstatusstatusidpost) | **POST** /billing-notes/{id}/status/{statusId} | Change status billing notes document.
*BillingNotesApi* | [**billingNotesInlinePost**](docs/BillingNotesApi.md#billingnotesinlinepost) | **POST** /billing-notes/inline | Create billing notes document inline discount or inline vat.
*BillingNotesApi* | [**billingNotesPost**](docs/BillingNotesApi.md#billingnotespost) | **POST** /billing-notes | Create billing notes document.
*BillingNotesApi* | [**billingNotesSharedocumentPost**](docs/BillingNotesApi.md#billingnotessharedocumentpost) | **POST** /billing-notes/sharedocument | Share link billing notes document.
*BusinessInfomationApi* | [**companyInfoGet**](docs/BusinessInfomationApi.md#companyinfoget) | **GET** /company/info | Get business infomation
*BusinessInfomationApi* | [**companyInfoPut**](docs/BusinessInfomationApi.md#companyinfoput) | **PUT** /company/info | Edit business infomation
*CashInvoiceApi* | [**cashInvoicesEmailDocumentPost**](docs/CashInvoiceApi.md#cashinvoicesemaildocumentpost) | **POST** /cash-invoices/email-document | Send email cash invoices document.
*CashInvoiceApi* | [**cashInvoicesGet**](docs/CashInvoiceApi.md#cashinvoicesget) | **GET** /cash-invoices | Get all cash invoices documents
*CashInvoiceApi* | [**cashInvoicesIdAttachmentPost**](docs/CashInvoiceApi.md#cashinvoicesidattachmentpost) | **POST** /cash-invoices/{id}/attachment | Attachment cash invoices document.
*CashInvoiceApi* | [**cashInvoicesIdDelete**](docs/CashInvoiceApi.md#cashinvoicesiddelete) | **DELETE** /cash-invoices/{id} | Delete cash invoices document.
*CashInvoiceApi* | [**cashInvoicesIdGet**](docs/CashInvoiceApi.md#cashinvoicesidget) | **GET** /cash-invoices/{id} | Get cash invoices document.
*CashInvoiceApi* | [**cashInvoicesIdPaymentPost**](docs/CashInvoiceApi.md#cashinvoicesidpaymentpost) | **POST** /cash-invoices/{id}/payment | Change status is paid cash invoices document.
*CashInvoiceApi* | [**cashInvoicesIdPut**](docs/CashInvoiceApi.md#cashinvoicesidput) | **PUT** /cash-invoices/{id} | Edit cash invoices document.
*CashInvoiceApi* | [**cashInvoicesIdStatusStatusIdPost**](docs/CashInvoiceApi.md#cashinvoicesidstatusstatusidpost) | **POST** /cash-invoices/{id}/status/{statusId} | Change status cash invoices document.
*CashInvoiceApi* | [**cashInvoicesInlinePost**](docs/CashInvoiceApi.md#cashinvoicesinlinepost) | **POST** /cash-invoices/inline | Create cash invoices document inline discount or inline vat.
*CashInvoiceApi* | [**cashInvoicesInlineWithPaymentPost**](docs/CashInvoiceApi.md#cashinvoicesinlinewithpaymentpost) | **POST** /cash-invoices/inline/with-payment | Create cash invoices document inline discount or inline vat with payment.
*CashInvoiceApi* | [**cashInvoicesPost**](docs/CashInvoiceApi.md#cashinvoicespost) | **POST** /cash-invoices | Create cash invoices document.
*CashInvoiceApi* | [**cashInvoicesSharedocumentPost**](docs/CashInvoiceApi.md#cashinvoicessharedocumentpost) | **POST** /cash-invoices/sharedocument | Share link cash invoices document.
*CashInvoiceApi* | [**cashInvoicesWithPaymentPost**](docs/CashInvoiceApi.md#cashinvoiceswithpaymentpost) | **POST** /cash-invoices/with-payment | Create cash invoices document with payment.
*ContactsApi* | [**contactsGet**](docs/ContactsApi.md#contactsget) | **GET** /contacts | Get list all contacts.
*ContactsApi* | [**contactsIdDelete**](docs/ContactsApi.md#contactsiddelete) | **DELETE** /contacts/{id} | Delete contacts.
*ContactsApi* | [**contactsIdGet**](docs/ContactsApi.md#contactsidget) | **GET** /contacts/{id} | Get contacts.
*ContactsApi* | [**contactsIdPut**](docs/ContactsApi.md#contactsidput) | **PUT** /contacts/{id} | Update contacts.
*ContactsApi* | [**contactsPost**](docs/ContactsApi.md#contactspost) | **POST** /contacts | Create contacts
*ExpensesApi* | [**expensesCategoriesAccountingGet**](docs/ExpensesApi.md#expensescategoriesaccountingget) | **GET** /expenses/categories/accounting | Accounting categories expenses document.
*ExpensesApi* | [**expensesCategoriesBusinessGet**](docs/ExpensesApi.md#expensescategoriesbusinessget) | **GET** /expenses/categories/business | Business categories expenses document.
*ExpensesApi* | [**expensesEmailDocumentPost**](docs/ExpensesApi.md#expensesemaildocumentpost) | **POST** /expenses/email-document | Send email expenses document.
*ExpensesApi* | [**expensesGet**](docs/ExpensesApi.md#expensesget) | **GET** /expenses | Get list all expenses documents.
*ExpensesApi* | [**expensesIdAttachmentPost**](docs/ExpensesApi.md#expensesidattachmentpost) | **POST** /expenses/{id}/attachment | Attachment to expenses document.
*ExpensesApi* | [**expensesIdDelete**](docs/ExpensesApi.md#expensesiddelete) | **DELETE** /expenses/{id} | Delete expenses document.
*ExpensesApi* | [**expensesIdGet**](docs/ExpensesApi.md#expensesidget) | **GET** /expenses/{id} | Get expenses document.
*ExpensesApi* | [**expensesIdPaymentPost**](docs/ExpensesApi.md#expensesidpaymentpost) | **POST** /expenses/{id}/payment | Change status is paid expenses document.
*ExpensesApi* | [**expensesIdPut**](docs/ExpensesApi.md#expensesidput) | **PUT** /expenses/{id} | Edit expenses document.
*ExpensesApi* | [**expensesIdStatusStatusIdPost**](docs/ExpensesApi.md#expensesidstatusstatusidpost) | **POST** /expenses/{id}/status/{statusId} | Change status expenses document.
*ExpensesApi* | [**expensesInlinePost**](docs/ExpensesApi.md#expensesinlinepost) | **POST** /expenses/inline | Create expenses document inline discount or inline vat.
*ExpensesApi* | [**expensesInlineWithPaymentPost**](docs/ExpensesApi.md#expensesinlinewithpaymentpost) | **POST** /expenses/inline/with-payment | Create expenses document inline discount or inline vat with payment.
*ExpensesApi* | [**expensesPost**](docs/ExpensesApi.md#expensespost) | **POST** /expenses | Create expenses document.
*ExpensesApi* | [**expensesSharedocumentPost**](docs/ExpensesApi.md#expensessharedocumentpost) | **POST** /expenses/sharedocument | Share link expenses document.
*ExpensesApi* | [**expensesWithPaymentPost**](docs/ExpensesApi.md#expenseswithpaymentpost) | **POST** /expenses/with-payment | Create expenses document with payment.
*ProductsApi* | [**productsGet**](docs/ProductsApi.md#productsget) | **GET** /products | Get list all products.
*ProductsApi* | [**productsIdDelete**](docs/ProductsApi.md#productsiddelete) | **DELETE** /products/{id} | Delete products.
*ProductsApi* | [**productsIdGet**](docs/ProductsApi.md#productsidget) | **GET** /products/{id} | Get products.
*ProductsApi* | [**productsIdPut**](docs/ProductsApi.md#productsidput) | **PUT** /products/{id} | Update products.
*ProductsApi* | [**productsPost**](docs/ProductsApi.md#productspost) | **POST** /products | Create products.
*PurchaseOrderApi* | [**purchasesOrdersEmailDocumentPost**](docs/PurchaseOrderApi.md#purchasesordersemaildocumentpost) | **POST** /purchases-orders/email-document | Send email purchase order document.
*PurchaseOrderApi* | [**purchasesOrdersGet**](docs/PurchaseOrderApi.md#purchasesordersget) | **GET** /purchases-orders | Get all purchase order documents.
*PurchaseOrderApi* | [**purchasesOrdersIdAttachmentPost**](docs/PurchaseOrderApi.md#purchasesordersidattachmentpost) | **POST** /purchases-orders/{id}/attachment | Attachment purchase order document.
*PurchaseOrderApi* | [**purchasesOrdersIdDelete**](docs/PurchaseOrderApi.md#purchasesordersiddelete) | **DELETE** /purchases-orders/{id} | Delete purchase order document.
*PurchaseOrderApi* | [**purchasesOrdersIdGet**](docs/PurchaseOrderApi.md#purchasesordersidget) | **GET** /purchases-orders/{id} | Get purchase order document.
*PurchaseOrderApi* | [**purchasesOrdersIdPut**](docs/PurchaseOrderApi.md#purchasesordersidput) | **PUT** /purchases-orders/{id} | Edit purchase order document.
*PurchaseOrderApi* | [**purchasesOrdersIdStatusStatusIdPost**](docs/PurchaseOrderApi.md#purchasesordersidstatusstatusidpost) | **POST** /purchases-orders/{id}/status/{statusId} | Change status purchase order document.
*PurchaseOrderApi* | [**purchasesOrdersInlinePost**](docs/PurchaseOrderApi.md#purchasesordersinlinepost) | **POST** /purchases-orders/inline | Create purchase order document inline discount or inline vat.
*PurchaseOrderApi* | [**purchasesOrdersPost**](docs/PurchaseOrderApi.md#purchasesorderspost) | **POST** /purchases-orders | Create purchase order document.
*PurchaseOrderApi* | [**purchasesOrdersSharedocumentPost**](docs/PurchaseOrderApi.md#purchasesorderssharedocumentpost) | **POST** /purchases-orders/sharedocument | Share link purchase order document.
*QuotationsApi* | [**quotationsEmailDocumentPost**](docs/QuotationsApi.md#quotationsemaildocumentpost) | **POST** /quotations/email-document | Send email quotations document.
*QuotationsApi* | [**quotationsGet**](docs/QuotationsApi.md#quotationsget) | **GET** /quotations | Get all quotations documents.
*QuotationsApi* | [**quotationsIdAttachmentPost**](docs/QuotationsApi.md#quotationsidattachmentpost) | **POST** /quotations/{id}/attachment | Attachment quotations document.
*QuotationsApi* | [**quotationsIdDelete**](docs/QuotationsApi.md#quotationsiddelete) | **DELETE** /quotations/{id} | Delete quotations document.
*QuotationsApi* | [**quotationsIdGet**](docs/QuotationsApi.md#quotationsidget) | **GET** /quotations/{id} | Get quotations document.
*QuotationsApi* | [**quotationsIdPut**](docs/QuotationsApi.md#quotationsidput) | **PUT** /quotations/{id} | Edit quotations document.
*QuotationsApi* | [**quotationsIdStatusStatusIdPost**](docs/QuotationsApi.md#quotationsidstatusstatusidpost) | **POST** /quotations/{id}/status/{statusId} | Change status quotations document.
*QuotationsApi* | [**quotationsInlinePost**](docs/QuotationsApi.md#quotationsinlinepost) | **POST** /quotations/inline | Create quotations document inline discount or inline vat.
*QuotationsApi* | [**quotationsPost**](docs/QuotationsApi.md#quotationspost) | **POST** /quotations | Create quotations document.
*QuotationsApi* | [**quotationsSharedocumentPost**](docs/QuotationsApi.md#quotationssharedocumentpost) | **POST** /quotations/sharedocument | Share link quotations document.
*ReceiptApi* | [**receiptsEmailDocumentPost**](docs/ReceiptApi.md#receiptsemaildocumentpost) | **POST** /receipts/email-document | Send email receipt document.
*ReceiptApi* | [**receiptsGet**](docs/ReceiptApi.md#receiptsget) | **GET** /receipts | Get all receipt documents
*ReceiptApi* | [**receiptsIdAttachmentPost**](docs/ReceiptApi.md#receiptsidattachmentpost) | **POST** /receipts/{id}/attachment | Attachment receipt document.
*ReceiptApi* | [**receiptsIdDelete**](docs/ReceiptApi.md#receiptsiddelete) | **DELETE** /receipts/{id} | Delete receipt document.
*ReceiptApi* | [**receiptsIdGet**](docs/ReceiptApi.md#receiptsidget) | **GET** /receipts/{id} | Get receipt document.
*ReceiptApi* | [**receiptsIdPaymentPost**](docs/ReceiptApi.md#receiptsidpaymentpost) | **POST** /receipts/{id}/payment | Change status is paid receipt document.
*ReceiptApi* | [**receiptsIdPut**](docs/ReceiptApi.md#receiptsidput) | **PUT** /receipts/{id} | Edit receipt document.
*ReceiptApi* | [**receiptsIdStatusStatusIdPost**](docs/ReceiptApi.md#receiptsidstatusstatusidpost) | **POST** /receipts/{id}/status/{statusId} | Change status receipt document.
*ReceiptApi* | [**receiptsInlinePost**](docs/ReceiptApi.md#receiptsinlinepost) | **POST** /receipts/inline | Create receipt document inline discount or inline vat.
*ReceiptApi* | [**receiptsInlineWithPaymentPost**](docs/ReceiptApi.md#receiptsinlinewithpaymentpost) | **POST** /receipts/inline/with-payment | Create receipt document inline discount or inline vat with payment.
*ReceiptApi* | [**receiptsPost**](docs/ReceiptApi.md#receiptspost) | **POST** /receipts | Create receipt document.
*ReceiptApi* | [**receiptsSharedocumentPost**](docs/ReceiptApi.md#receiptssharedocumentpost) | **POST** /receipts/sharedocument | Share link receipt document.
*ReceiptApi* | [**receiptsWithPaymentPost**](docs/ReceiptApi.md#receiptswithpaymentpost) | **POST** /receipts/with-payment | Create receipt document with payment.
*ReceivingInventoryApi* | [**purchasesEmailDocumentPost**](docs/ReceivingInventoryApi.md#purchasesemaildocumentpost) | **POST** /purchases/email-document | Send email receiving inventory document.
*ReceivingInventoryApi* | [**purchasesGet**](docs/ReceivingInventoryApi.md#purchasesget) | **GET** /purchases | Get all receiving inventory documents.
*ReceivingInventoryApi* | [**purchasesIdAttachmentPost**](docs/ReceivingInventoryApi.md#purchasesidattachmentpost) | **POST** /purchases/{id}/attachment | Attachment receiving inventory document.
*ReceivingInventoryApi* | [**purchasesIdDelete**](docs/ReceivingInventoryApi.md#purchasesiddelete) | **DELETE** /purchases/{id} | Delete receiving inventory document.
*ReceivingInventoryApi* | [**purchasesIdGet**](docs/ReceivingInventoryApi.md#purchasesidget) | **GET** /purchases/{id} | Get receiving inventory document.
*ReceivingInventoryApi* | [**purchasesIdPaymentPost**](docs/ReceivingInventoryApi.md#purchasesidpaymentpost) | **POST** /purchases/{id}/payment | Change status is paid receiving inventory document.
*ReceivingInventoryApi* | [**purchasesIdPut**](docs/ReceivingInventoryApi.md#purchasesidput) | **PUT** /purchases/{id} | Edit receiving inventory document.
*ReceivingInventoryApi* | [**purchasesIdStatusStatusIdPost**](docs/ReceivingInventoryApi.md#purchasesidstatusstatusidpost) | **POST** /purchases/{id}/status/{statusId} | Change status receiving inventory document.
*ReceivingInventoryApi* | [**purchasesInlinePost**](docs/ReceivingInventoryApi.md#purchasesinlinepost) | **POST** /purchases/inline | Create receiving inventory document inline discount or inline vat.
*ReceivingInventoryApi* | [**purchasesInlineWithPaymentPost**](docs/ReceivingInventoryApi.md#purchasesinlinewithpaymentpost) | **POST** /purchases/inline/with-payment | Create receiving inventory document inline discount or inline vat with payment.
*ReceivingInventoryApi* | [**purchasesPost**](docs/ReceivingInventoryApi.md#purchasespost) | **POST** /purchases | Create receiving inventory document.
*ReceivingInventoryApi* | [**purchasesSharedocumentPost**](docs/ReceivingInventoryApi.md#purchasessharedocumentpost) | **POST** /purchases/sharedocument | Share link receiving inventory document.
*ReceivingInventoryApi* | [**purchasesWithPaymentPost**](docs/ReceivingInventoryApi.md#purchaseswithpaymentpost) | **POST** /purchases/with-payment | Create receiving inventory document with payment.
*TaxInvoiceApi* | [**taxInvoicesEmailDocumentPost**](docs/TaxInvoiceApi.md#taxinvoicesemaildocumentpost) | **POST** /tax-invoices/email-document | Send Email tax invoice document
*TaxInvoiceApi* | [**taxInvoicesGet**](docs/TaxInvoiceApi.md#taxinvoicesget) | **GET** /tax-invoices | Get all tax invocie documents.
*TaxInvoiceApi* | [**taxInvoicesIdAttachmentPost**](docs/TaxInvoiceApi.md#taxinvoicesidattachmentpost) | **POST** /tax-invoices/{id}/attachment | Attachment tax Invoices document.
*TaxInvoiceApi* | [**taxInvoicesIdDelete**](docs/TaxInvoiceApi.md#taxinvoicesiddelete) | **DELETE** /tax-invoices/{id} | Delete tax invoices document.
*TaxInvoiceApi* | [**taxInvoicesIdGet**](docs/TaxInvoiceApi.md#taxinvoicesidget) | **GET** /tax-invoices/{id} | Get tax invoices document.
*TaxInvoiceApi* | [**taxInvoicesIdPaymentPost**](docs/TaxInvoiceApi.md#taxinvoicesidpaymentpost) | **POST** /tax-invoices/{id}/payment | Change status is paid tax-invoice document.
*TaxInvoiceApi* | [**taxInvoicesIdPut**](docs/TaxInvoiceApi.md#taxinvoicesidput) | **PUT** /tax-invoices/{id} | Edit tax invoices document.
*TaxInvoiceApi* | [**taxInvoicesIdStatusStatusIdPost**](docs/TaxInvoiceApi.md#taxinvoicesidstatusstatusidpost) | **POST** /tax-invoices/{id}/status/{statusId} | Change status tax invoices document.
*TaxInvoiceApi* | [**taxInvoicesInlinePost**](docs/TaxInvoiceApi.md#taxinvoicesinlinepost) | **POST** /tax-invoices/inline | Create tax invocie document inline discount or inline vat.
*TaxInvoiceApi* | [**taxInvoicesInlineWithPaymentPost**](docs/TaxInvoiceApi.md#taxinvoicesinlinewithpaymentpost) | **POST** /tax-invoices/inline/with-payment | Create tax invocie document inline discount or inline vat with payment.
*TaxInvoiceApi* | [**taxInvoicesPost**](docs/TaxInvoiceApi.md#taxinvoicespost) | **POST** /tax-invoices | Create tax invocie document.
*TaxInvoiceApi* | [**taxInvoicesSharedocumentPost**](docs/TaxInvoiceApi.md#taxinvoicessharedocumentpost) | **POST** /tax-invoices/sharedocument | Share link tax invoice document.
*TaxInvoiceApi* | [**taxInvoicesWithPaymentPost**](docs/TaxInvoiceApi.md#taxinvoiceswithpaymentpost) | **POST** /tax-invoices/with-payment | Create tax invocie document with payment.
*WithholdingTaxApi* | [**withholdingTaxesEmailDocumentPost**](docs/WithholdingTaxApi.md#withholdingtaxesemaildocumentpost) | **POST** /withholding-taxes/email-document | Send email withholding tax.
*WithholdingTaxApi* | [**withholdingTaxesGet**](docs/WithholdingTaxApi.md#withholdingtaxesget) | **GET** /withholding-taxes | Get all withholding tax documents.
*WithholdingTaxApi* | [**withholdingTaxesIdAttachmentPost**](docs/WithholdingTaxApi.md#withholdingtaxesidattachmentpost) | **POST** /withholding-taxes/{id}/attachment | Attachment withholding tax.
*WithholdingTaxApi* | [**withholdingTaxesIdDelete**](docs/WithholdingTaxApi.md#withholdingtaxesiddelete) | **DELETE** /withholding-taxes/{id} | Delete withholding tax document.
*WithholdingTaxApi* | [**withholdingTaxesIdGet**](docs/WithholdingTaxApi.md#withholdingtaxesidget) | **GET** /withholding-taxes/{id} | Get withholding tax document.
*WithholdingTaxApi* | [**withholdingTaxesIdPut**](docs/WithholdingTaxApi.md#withholdingtaxesidput) | **PUT** /withholding-taxes/{id} | Edit withholding tax document.
*WithholdingTaxApi* | [**withholdingTaxesIdStatusStatusIdPost**](docs/WithholdingTaxApi.md#withholdingtaxesidstatusstatusidpost) | **POST** /withholding-taxes/{id}/status/{statusId} | Change status withholding tax document.
*WithholdingTaxApi* | [**withholdingTaxesPost**](docs/WithholdingTaxApi.md#withholdingtaxespost) | **POST** /withholding-taxes | Create withholding tax document.
*WithholdingTaxApi* | [**withholdingTaxesSharedocumentPost**](docs/WithholdingTaxApi.md#withholdingtaxessharedocumentpost) | **POST** /withholding-taxes/sharedocument | Share link withholding tax.


<a name="documentation-for-models"></a>
## Documentation for Models

 - [org.openapitools.client.models.AllBankAccountResponse](docs/AllBankAccountResponse.md)
 - [org.openapitools.client.models.AllDocumentResponse](docs/AllDocumentResponse.md)
 - [org.openapitools.client.models.AllDocumentResponseData](docs/AllDocumentResponseData.md)
 - [org.openapitools.client.models.AllExpenseDocumentResponse](docs/AllExpenseDocumentResponse.md)
 - [org.openapitools.client.models.AllExpenseDocumentResponseData](docs/AllExpenseDocumentResponseData.md)
 - [org.openapitools.client.models.AllWithholidingTaxDocumentResponse](docs/AllWithholidingTaxDocumentResponse.md)
 - [org.openapitools.client.models.AllWithholidingTaxDocumentResponseData](docs/AllWithholidingTaxDocumentResponseData.md)
 - [org.openapitools.client.models.AttachmentResponse](docs/AttachmentResponse.md)
 - [org.openapitools.client.models.AttachmentResponseData](docs/AttachmentResponseData.md)
 - [org.openapitools.client.models.AuthenResponse](docs/AuthenResponse.md)
 - [org.openapitools.client.models.BankAccount](docs/BankAccount.md)
 - [org.openapitools.client.models.BankAccountResponse](docs/BankAccountResponse.md)
 - [org.openapitools.client.models.BankAccountResponseData](docs/BankAccountResponseData.md)
 - [org.openapitools.client.models.BusinessCategory](docs/BusinessCategory.md)
 - [org.openapitools.client.models.BusinessCategoryData](docs/BusinessCategoryData.md)
 - [org.openapitools.client.models.CompanyInfo](docs/CompanyInfo.md)
 - [org.openapitools.client.models.CompanyInfoResponse](docs/CompanyInfoResponse.md)
 - [org.openapitools.client.models.CompanyInfoResponseData](docs/CompanyInfoResponseData.md)
 - [org.openapitools.client.models.Contact](docs/Contact.md)
 - [org.openapitools.client.models.ContactResponse](docs/ContactResponse.md)
 - [org.openapitools.client.models.ContactResponseData](docs/ContactResponseData.md)
 - [org.openapitools.client.models.DeleteResponse](docs/DeleteResponse.md)
 - [org.openapitools.client.models.DeleteResponseData](docs/DeleteResponseData.md)
 - [org.openapitools.client.models.Document](docs/Document.md)
 - [org.openapitools.client.models.DocumentResponse](docs/DocumentResponse.md)
 - [org.openapitools.client.models.ExpenseDocument](docs/ExpenseDocument.md)
 - [org.openapitools.client.models.ExpenseInlineDocument](docs/ExpenseInlineDocument.md)
 - [org.openapitools.client.models.ExpenseInlineDocumentAllOf](docs/ExpenseInlineDocumentAllOf.md)
 - [org.openapitools.client.models.ExpenseInlineDocumentResponse](docs/ExpenseInlineDocumentResponse.md)
 - [org.openapitools.client.models.ExpenseInlineDocumentResponseAllOf](docs/ExpenseInlineDocumentResponseAllOf.md)
 - [org.openapitools.client.models.ExpenseInlineDocumentResponseAllOfData](docs/ExpenseInlineDocumentResponseAllOfData.md)
 - [org.openapitools.client.models.ExpenseInlineDocumentWithPaymentPaid](docs/ExpenseInlineDocumentWithPaymentPaid.md)
 - [org.openapitools.client.models.ExpenseInlineDocumentWithPaymentPaidCash](docs/ExpenseInlineDocumentWithPaymentPaidCash.md)
 - [org.openapitools.client.models.ExpenseInlineDocumentWithPaymentPaidCheque](docs/ExpenseInlineDocumentWithPaymentPaidCheque.md)
 - [org.openapitools.client.models.ExpenseInlineDocumentWithPaymentPaidCreditCard](docs/ExpenseInlineDocumentWithPaymentPaidCreditCard.md)
 - [org.openapitools.client.models.ExpenseInlineDocumentWithPaymentPaidTransfer](docs/ExpenseInlineDocumentWithPaymentPaidTransfer.md)
 - [org.openapitools.client.models.ExpenseInlineProductItem](docs/ExpenseInlineProductItem.md)
 - [org.openapitools.client.models.ExpenseResponse](docs/ExpenseResponse.md)
 - [org.openapitools.client.models.ExpenseSimpleDocument](docs/ExpenseSimpleDocument.md)
 - [org.openapitools.client.models.ExpenseSimpleDocumentAllOf](docs/ExpenseSimpleDocumentAllOf.md)
 - [org.openapitools.client.models.ExpenseSimpleDocumentResponse](docs/ExpenseSimpleDocumentResponse.md)
 - [org.openapitools.client.models.ExpenseSimpleDocumentResponseAllOf](docs/ExpenseSimpleDocumentResponseAllOf.md)
 - [org.openapitools.client.models.ExpenseSimpleDocumentResponseAllOfData](docs/ExpenseSimpleDocumentResponseAllOfData.md)
 - [org.openapitools.client.models.ExpenseSimpleDocumentWithPaymentPaid](docs/ExpenseSimpleDocumentWithPaymentPaid.md)
 - [org.openapitools.client.models.ExpenseSimpleDocumentWithPaymentPaidCash](docs/ExpenseSimpleDocumentWithPaymentPaidCash.md)
 - [org.openapitools.client.models.ExpenseSimpleDocumentWithPaymentPaidCheque](docs/ExpenseSimpleDocumentWithPaymentPaidCheque.md)
 - [org.openapitools.client.models.ExpenseSimpleDocumentWithPaymentPaidCreditCard](docs/ExpenseSimpleDocumentWithPaymentPaidCreditCard.md)
 - [org.openapitools.client.models.ExpenseSimpleDocumentWithPaymentPaidTransfer](docs/ExpenseSimpleDocumentWithPaymentPaidTransfer.md)
 - [org.openapitools.client.models.ExpenseSimpleProductItem](docs/ExpenseSimpleProductItem.md)
 - [org.openapitools.client.models.InlineDocument](docs/InlineDocument.md)
 - [org.openapitools.client.models.InlineDocumentAllOf](docs/InlineDocumentAllOf.md)
 - [org.openapitools.client.models.InlineDocumentResponse](docs/InlineDocumentResponse.md)
 - [org.openapitools.client.models.InlineDocumentResponseAllOf](docs/InlineDocumentResponseAllOf.md)
 - [org.openapitools.client.models.InlineDocumentResponseAllOfData](docs/InlineDocumentResponseAllOfData.md)
 - [org.openapitools.client.models.InlineDocumentWithPaymentPaid](docs/InlineDocumentWithPaymentPaid.md)
 - [org.openapitools.client.models.InlineDocumentWithPaymentPaidCash](docs/InlineDocumentWithPaymentPaidCash.md)
 - [org.openapitools.client.models.InlineDocumentWithPaymentPaidCheque](docs/InlineDocumentWithPaymentPaidCheque.md)
 - [org.openapitools.client.models.InlineDocumentWithPaymentPaidCreditCard](docs/InlineDocumentWithPaymentPaidCreditCard.md)
 - [org.openapitools.client.models.InlineDocumentWithPaymentPaidTransfer](docs/InlineDocumentWithPaymentPaidTransfer.md)
 - [org.openapitools.client.models.InlineDocumentWithPaymentReceiving](docs/InlineDocumentWithPaymentReceiving.md)
 - [org.openapitools.client.models.InlineDocumentWithPaymentReceivingCash](docs/InlineDocumentWithPaymentReceivingCash.md)
 - [org.openapitools.client.models.InlineDocumentWithPaymentReceivingCheque](docs/InlineDocumentWithPaymentReceivingCheque.md)
 - [org.openapitools.client.models.InlineDocumentWithPaymentReceivingCreditCard](docs/InlineDocumentWithPaymentReceivingCreditCard.md)
 - [org.openapitools.client.models.InlineDocumentWithPaymentReceivingTransfer](docs/InlineDocumentWithPaymentReceivingTransfer.md)
 - [org.openapitools.client.models.InlineObject](docs/InlineObject.md)
 - [org.openapitools.client.models.InlineObject1](docs/InlineObject1.md)
 - [org.openapitools.client.models.InlineObject2](docs/InlineObject2.md)
 - [org.openapitools.client.models.InlineObject3](docs/InlineObject3.md)
 - [org.openapitools.client.models.InlineObject4](docs/InlineObject4.md)
 - [org.openapitools.client.models.InlineObject5](docs/InlineObject5.md)
 - [org.openapitools.client.models.InlineObject6](docs/InlineObject6.md)
 - [org.openapitools.client.models.InlineObject7](docs/InlineObject7.md)
 - [org.openapitools.client.models.InlineObject8](docs/InlineObject8.md)
 - [org.openapitools.client.models.InlineObject9](docs/InlineObject9.md)
 - [org.openapitools.client.models.InlineProductItem](docs/InlineProductItem.md)
 - [org.openapitools.client.models.InlineProductItemAllOf](docs/InlineProductItemAllOf.md)
 - [org.openapitools.client.models.PaymentPaidCash](docs/PaymentPaidCash.md)
 - [org.openapitools.client.models.PaymentPaidCheque](docs/PaymentPaidCheque.md)
 - [org.openapitools.client.models.PaymentPaidCreditCard](docs/PaymentPaidCreditCard.md)
 - [org.openapitools.client.models.PaymentPaidDocument](docs/PaymentPaidDocument.md)
 - [org.openapitools.client.models.PaymentPaidTransfer](docs/PaymentPaidTransfer.md)
 - [org.openapitools.client.models.PaymentReceivingCash](docs/PaymentReceivingCash.md)
 - [org.openapitools.client.models.PaymentReceivingCheque](docs/PaymentReceivingCheque.md)
 - [org.openapitools.client.models.PaymentReceivingCreditCard](docs/PaymentReceivingCreditCard.md)
 - [org.openapitools.client.models.PaymentReceivingDocument](docs/PaymentReceivingDocument.md)
 - [org.openapitools.client.models.PaymentReceivingTransfer](docs/PaymentReceivingTransfer.md)
 - [org.openapitools.client.models.Product](docs/Product.md)
 - [org.openapitools.client.models.ProductInventory](docs/ProductInventory.md)
 - [org.openapitools.client.models.ProductInventoryBalance](docs/ProductInventoryBalance.md)
 - [org.openapitools.client.models.ProductItem](docs/ProductItem.md)
 - [org.openapitools.client.models.ProductNonInventory](docs/ProductNonInventory.md)
 - [org.openapitools.client.models.ProductResponse](docs/ProductResponse.md)
 - [org.openapitools.client.models.ProductResponseData](docs/ProductResponseData.md)
 - [org.openapitools.client.models.ProductService](docs/ProductService.md)
 - [org.openapitools.client.models.ProductType](docs/ProductType.md)
 - [org.openapitools.client.models.ReferencedByMe](docs/ReferencedByMe.md)
 - [org.openapitools.client.models.ReferencedToMe](docs/ReferencedToMe.md)
 - [org.openapitools.client.models.SendEmail](docs/SendEmail.md)
 - [org.openapitools.client.models.SendEmailCoppies](docs/SendEmailCoppies.md)
 - [org.openapitools.client.models.SendEmailCoppiesAllOf](docs/SendEmailCoppiesAllOf.md)
 - [org.openapitools.client.models.SendEmailResponse](docs/SendEmailResponse.md)
 - [org.openapitools.client.models.SendEmailResponseData](docs/SendEmailResponseData.md)
 - [org.openapitools.client.models.SendEmailSimple](docs/SendEmailSimple.md)
 - [org.openapitools.client.models.ShareDocument](docs/ShareDocument.md)
 - [org.openapitools.client.models.ShareDocumentResponse](docs/ShareDocumentResponse.md)
 - [org.openapitools.client.models.ShareDocumentResponseData](docs/ShareDocumentResponseData.md)
 - [org.openapitools.client.models.SimpleDocument](docs/SimpleDocument.md)
 - [org.openapitools.client.models.SimpleDocumentAllOf](docs/SimpleDocumentAllOf.md)
 - [org.openapitools.client.models.SimpleDocumentResponse](docs/SimpleDocumentResponse.md)
 - [org.openapitools.client.models.SimpleDocumentResponseAllOf](docs/SimpleDocumentResponseAllOf.md)
 - [org.openapitools.client.models.SimpleDocumentResponseAllOfData](docs/SimpleDocumentResponseAllOfData.md)
 - [org.openapitools.client.models.SimpleDocumentResponseAllOfDataCompany](docs/SimpleDocumentResponseAllOfDataCompany.md)
 - [org.openapitools.client.models.SimpleDocumentResponseAllOfDataPayments](docs/SimpleDocumentResponseAllOfDataPayments.md)
 - [org.openapitools.client.models.SimpleDocumentWithPaymentPaid](docs/SimpleDocumentWithPaymentPaid.md)
 - [org.openapitools.client.models.SimpleDocumentWithPaymentPaidCash](docs/SimpleDocumentWithPaymentPaidCash.md)
 - [org.openapitools.client.models.SimpleDocumentWithPaymentPaidCheque](docs/SimpleDocumentWithPaymentPaidCheque.md)
 - [org.openapitools.client.models.SimpleDocumentWithPaymentPaidCreditCard](docs/SimpleDocumentWithPaymentPaidCreditCard.md)
 - [org.openapitools.client.models.SimpleDocumentWithPaymentPaidTransfer](docs/SimpleDocumentWithPaymentPaidTransfer.md)
 - [org.openapitools.client.models.SimpleDocumentWithPaymentReceiving](docs/SimpleDocumentWithPaymentReceiving.md)
 - [org.openapitools.client.models.SimpleDocumentWithPaymentReceivingCash](docs/SimpleDocumentWithPaymentReceivingCash.md)
 - [org.openapitools.client.models.SimpleDocumentWithPaymentReceivingCheque](docs/SimpleDocumentWithPaymentReceivingCheque.md)
 - [org.openapitools.client.models.SimpleDocumentWithPaymentReceivingCreditCard](docs/SimpleDocumentWithPaymentReceivingCreditCard.md)
 - [org.openapitools.client.models.SimpleDocumentWithPaymentReceivingTransfer](docs/SimpleDocumentWithPaymentReceivingTransfer.md)
 - [org.openapitools.client.models.SimpleProductItem](docs/SimpleProductItem.md)
 - [org.openapitools.client.models.StatusDocument](docs/StatusDocument.md)
 - [org.openapitools.client.models.UpdateDocument](docs/UpdateDocument.md)
 - [org.openapitools.client.models.UpdateExpenseDocument](docs/UpdateExpenseDocument.md)
 - [org.openapitools.client.models.UpdateExpenseInlineDocument](docs/UpdateExpenseInlineDocument.md)
 - [org.openapitools.client.models.UpdateExpenseSimpleDocument](docs/UpdateExpenseSimpleDocument.md)
 - [org.openapitools.client.models.UpdateInlineDocument](docs/UpdateInlineDocument.md)
 - [org.openapitools.client.models.UpdateSimpleDocument](docs/UpdateSimpleDocument.md)
 - [org.openapitools.client.models.UpdateWithholidingTaxDocument](docs/UpdateWithholidingTaxDocument.md)
 - [org.openapitools.client.models.UpgradeDocument](docs/UpgradeDocument.md)
 - [org.openapitools.client.models.WithholidingTaxDocument](docs/WithholidingTaxDocument.md)
 - [org.openapitools.client.models.WithholidingTaxDocumentResponse](docs/WithholidingTaxDocumentResponse.md)
 - [org.openapitools.client.models.WithholidingTaxDocumentResponseData](docs/WithholidingTaxDocumentResponseData.md)
 - [org.openapitools.client.models.WithholidingTaxItem](docs/WithholidingTaxItem.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

All endpoints do not require authorization.
