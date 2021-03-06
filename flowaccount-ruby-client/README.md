# openapi_client

OpenapiClient - the Ruby gem for the FlowAccount Open API

# Introduction 
**Servers Production** 

 <site>Site:</site> https://www.flowaccount.com 

 <site>Api url:</site> https://openapi.flowaccount.com/v1 

 **Beta test**

 <site>Site:</site> http://sandbox-new.flowaccount.com/ 

 <site>Api url:</site> https://openapi.flowaccount.com/test 

 **PostMan Collection**

 <site>Link:</site> https://www.getpostman.com/collections/01e7c68d7093e2092a64


## Overview
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2-oas3
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.RubyClientCodegen
For more information, please visit [https://www.flowaccount.com](https://www.flowaccount.com)

## Installation

### Build a gem

To build the Ruby code into a gem:

```shell
gem build openapi_client.gemspec
```

Then either install the gem locally:

```shell
gem install ./openapi_client-1.0.0.gem
```

(for development, run `gem install --dev ./openapi_client-1.0.0.gem` to install the development dependencies)

or publish the gem to a gem hosting service, e.g. [RubyGems](https://rubygems.org/).

Finally add this to the Gemfile:

    gem 'openapi_client', '~> 1.0.0'

### Install from Git

If the Ruby gem is hosted at a git repository: https://github.com/GIT_USER_ID/GIT_REPO_ID, then add the following in the Gemfile:

    gem 'openapi_client', :git => 'https://github.com/GIT_USER_ID/GIT_REPO_ID.git'

### Include the Ruby code directly

Include the Ruby code directly using `-I` as follows:

```shell
ruby -Ilib script.rb
```

## Getting Started

Please follow the [installation](#installation) procedure and then run the following code:

```ruby
# Load the gem
require 'openapi_client'

api_instance = OpenapiClient::AuthenticationApi.new
content_type = 'application/x-www-form-urlencoded' # String | 
opts = {
  grant_type: 'grant_type_example', # String | 
  scope: 'scope_example', # String | 
  client_id: 'client_id_example', # String | 
  client_secret: 'client_secret_example', # String | 
  guid: 'guid_example' # String | 
}

begin
  #Generate Access Token
  result = api_instance.token_post(content_type, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling AuthenticationApi->token_post: #{e}"
end

```

## Documentation for API Endpoints

All URIs are relative to *https://openapi.flowaccount.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OpenapiClient::AuthenticationApi* | [**token_post**](docs/AuthenticationApi.md#token_post) | **POST** /token | Generate Access Token
*OpenapiClient::BankAccountApi* | [**bank_accounts_get**](docs/BankAccountApi.md#bank_accounts_get) | **GET** /bank-accounts | Get list all My Bank Account
*OpenapiClient::BankAccountApi* | [**bank_accounts_post**](docs/BankAccountApi.md#bank_accounts_post) | **POST** /bank-accounts | Create bank account.
*OpenapiClient::BillingNotesApi* | [**billing_notes_email_document_post**](docs/BillingNotesApi.md#billing_notes_email_document_post) | **POST** /billing-notes/email-document | Send email billing notes document.
*OpenapiClient::BillingNotesApi* | [**billing_notes_get**](docs/BillingNotesApi.md#billing_notes_get) | **GET** /billing-notes | Get all billing notes documents.
*OpenapiClient::BillingNotesApi* | [**billing_notes_id_attachment_post**](docs/BillingNotesApi.md#billing_notes_id_attachment_post) | **POST** /billing-notes/{id}/attachment | Attachment billing notes document.
*OpenapiClient::BillingNotesApi* | [**billing_notes_id_delete**](docs/BillingNotesApi.md#billing_notes_id_delete) | **DELETE** /billing-notes/{id} | Delete billing notes document.
*OpenapiClient::BillingNotesApi* | [**billing_notes_id_get**](docs/BillingNotesApi.md#billing_notes_id_get) | **GET** /billing-notes/{id} | Get billing notes document.
*OpenapiClient::BillingNotesApi* | [**billing_notes_id_put**](docs/BillingNotesApi.md#billing_notes_id_put) | **PUT** /billing-notes/{id} | Edit billing notes document.
*OpenapiClient::BillingNotesApi* | [**billing_notes_id_status_status_id_post**](docs/BillingNotesApi.md#billing_notes_id_status_status_id_post) | **POST** /billing-notes/{id}/status/{statusId} | Change status billing notes document.
*OpenapiClient::BillingNotesApi* | [**billing_notes_inline_post**](docs/BillingNotesApi.md#billing_notes_inline_post) | **POST** /billing-notes/inline | Create billing notes document inline discount or inline vat.
*OpenapiClient::BillingNotesApi* | [**billing_notes_post**](docs/BillingNotesApi.md#billing_notes_post) | **POST** /billing-notes | Create billing notes document.
*OpenapiClient::BillingNotesApi* | [**billing_notes_sharedocument_post**](docs/BillingNotesApi.md#billing_notes_sharedocument_post) | **POST** /billing-notes/sharedocument | Share link billing notes document.
*OpenapiClient::BusinessInfomationApi* | [**company_info_get**](docs/BusinessInfomationApi.md#company_info_get) | **GET** /company/info | Get business infomation
*OpenapiClient::BusinessInfomationApi* | [**company_info_put**](docs/BusinessInfomationApi.md#company_info_put) | **PUT** /company/info | Edit business infomation
*OpenapiClient::CashInvoiceApi* | [**cash_invoices_email_document_post**](docs/CashInvoiceApi.md#cash_invoices_email_document_post) | **POST** /cash-invoices/email-document | Send email cash invoices document.
*OpenapiClient::CashInvoiceApi* | [**cash_invoices_get**](docs/CashInvoiceApi.md#cash_invoices_get) | **GET** /cash-invoices | Get all cash invoices documents
*OpenapiClient::CashInvoiceApi* | [**cash_invoices_id_attachment_post**](docs/CashInvoiceApi.md#cash_invoices_id_attachment_post) | **POST** /cash-invoices/{id}/attachment | Attachment cash invoices document.
*OpenapiClient::CashInvoiceApi* | [**cash_invoices_id_delete**](docs/CashInvoiceApi.md#cash_invoices_id_delete) | **DELETE** /cash-invoices/{id} | Delete cash invoices document.
*OpenapiClient::CashInvoiceApi* | [**cash_invoices_id_get**](docs/CashInvoiceApi.md#cash_invoices_id_get) | **GET** /cash-invoices/{id} | Get cash invoices document.
*OpenapiClient::CashInvoiceApi* | [**cash_invoices_id_payment_post**](docs/CashInvoiceApi.md#cash_invoices_id_payment_post) | **POST** /cash-invoices/{id}/payment | Change status is paid cash invoices document.
*OpenapiClient::CashInvoiceApi* | [**cash_invoices_id_put**](docs/CashInvoiceApi.md#cash_invoices_id_put) | **PUT** /cash-invoices/{id} | Edit cash invoices document.
*OpenapiClient::CashInvoiceApi* | [**cash_invoices_id_status_status_id_post**](docs/CashInvoiceApi.md#cash_invoices_id_status_status_id_post) | **POST** /cash-invoices/{id}/status/{statusId} | Change status cash invoices document.
*OpenapiClient::CashInvoiceApi* | [**cash_invoices_inline_post**](docs/CashInvoiceApi.md#cash_invoices_inline_post) | **POST** /cash-invoices/inline | Create cash invoices document inline discount or inline vat.
*OpenapiClient::CashInvoiceApi* | [**cash_invoices_inline_with_payment_post**](docs/CashInvoiceApi.md#cash_invoices_inline_with_payment_post) | **POST** /cash-invoices/inline/with-payment | Create cash invoices document inline discount or inline vat with payment.
*OpenapiClient::CashInvoiceApi* | [**cash_invoices_post**](docs/CashInvoiceApi.md#cash_invoices_post) | **POST** /cash-invoices | Create cash invoices document.
*OpenapiClient::CashInvoiceApi* | [**cash_invoices_sharedocument_post**](docs/CashInvoiceApi.md#cash_invoices_sharedocument_post) | **POST** /cash-invoices/sharedocument | Share link cash invoices document.
*OpenapiClient::CashInvoiceApi* | [**cash_invoices_with_payment_post**](docs/CashInvoiceApi.md#cash_invoices_with_payment_post) | **POST** /cash-invoices/with-payment | Create cash invoices document with payment.
*OpenapiClient::ContactsApi* | [**contacts_get**](docs/ContactsApi.md#contacts_get) | **GET** /contacts | Get list all contacts.
*OpenapiClient::ContactsApi* | [**contacts_id_delete**](docs/ContactsApi.md#contacts_id_delete) | **DELETE** /contacts/{id} | Delete contacts.
*OpenapiClient::ContactsApi* | [**contacts_id_get**](docs/ContactsApi.md#contacts_id_get) | **GET** /contacts/{id} | Get contacts.
*OpenapiClient::ContactsApi* | [**contacts_id_put**](docs/ContactsApi.md#contacts_id_put) | **PUT** /contacts/{id} | Update contacts.
*OpenapiClient::ContactsApi* | [**contacts_post**](docs/ContactsApi.md#contacts_post) | **POST** /contacts | Create contacts
*OpenapiClient::ExpensesApi* | [**expenses_categories_accounting_get**](docs/ExpensesApi.md#expenses_categories_accounting_get) | **GET** /expenses/categories/accounting | Accounting categories expenses document.
*OpenapiClient::ExpensesApi* | [**expenses_categories_business_get**](docs/ExpensesApi.md#expenses_categories_business_get) | **GET** /expenses/categories/business | Business categories expenses document.
*OpenapiClient::ExpensesApi* | [**expenses_email_document_post**](docs/ExpensesApi.md#expenses_email_document_post) | **POST** /expenses/email-document | Send email expenses document.
*OpenapiClient::ExpensesApi* | [**expenses_get**](docs/ExpensesApi.md#expenses_get) | **GET** /expenses | Get list all expenses documents.
*OpenapiClient::ExpensesApi* | [**expenses_id_attachment_post**](docs/ExpensesApi.md#expenses_id_attachment_post) | **POST** /expenses/{id}/attachment | Attachment to expenses document.
*OpenapiClient::ExpensesApi* | [**expenses_id_delete**](docs/ExpensesApi.md#expenses_id_delete) | **DELETE** /expenses/{id} | Delete expenses document.
*OpenapiClient::ExpensesApi* | [**expenses_id_get**](docs/ExpensesApi.md#expenses_id_get) | **GET** /expenses/{id} | Get expenses document.
*OpenapiClient::ExpensesApi* | [**expenses_id_payment_post**](docs/ExpensesApi.md#expenses_id_payment_post) | **POST** /expenses/{id}/payment | Change status is paid expenses document.
*OpenapiClient::ExpensesApi* | [**expenses_id_put**](docs/ExpensesApi.md#expenses_id_put) | **PUT** /expenses/{id} | Edit expenses document.
*OpenapiClient::ExpensesApi* | [**expenses_id_status_status_id_post**](docs/ExpensesApi.md#expenses_id_status_status_id_post) | **POST** /expenses/{id}/status/{statusId} | Change status expenses document.
*OpenapiClient::ExpensesApi* | [**expenses_inline_post**](docs/ExpensesApi.md#expenses_inline_post) | **POST** /expenses/inline | Create expenses document inline discount or inline vat.
*OpenapiClient::ExpensesApi* | [**expenses_inline_with_payment_post**](docs/ExpensesApi.md#expenses_inline_with_payment_post) | **POST** /expenses/inline/with-payment | Create expenses document inline discount or inline vat with payment.
*OpenapiClient::ExpensesApi* | [**expenses_post**](docs/ExpensesApi.md#expenses_post) | **POST** /expenses | Create expenses document.
*OpenapiClient::ExpensesApi* | [**expenses_sharedocument_post**](docs/ExpensesApi.md#expenses_sharedocument_post) | **POST** /expenses/sharedocument | Share link expenses document.
*OpenapiClient::ExpensesApi* | [**expenses_with_payment_post**](docs/ExpensesApi.md#expenses_with_payment_post) | **POST** /expenses/with-payment | Create expenses document with payment.
*OpenapiClient::ProductsApi* | [**products_get**](docs/ProductsApi.md#products_get) | **GET** /products | Get list all products.
*OpenapiClient::ProductsApi* | [**products_id_delete**](docs/ProductsApi.md#products_id_delete) | **DELETE** /products/{id} | Delete products.
*OpenapiClient::ProductsApi* | [**products_id_get**](docs/ProductsApi.md#products_id_get) | **GET** /products/{id} | Get products.
*OpenapiClient::ProductsApi* | [**products_id_put**](docs/ProductsApi.md#products_id_put) | **PUT** /products/{id} | Update products.
*OpenapiClient::ProductsApi* | [**products_post**](docs/ProductsApi.md#products_post) | **POST** /products | Create products.
*OpenapiClient::PurchaseOrderApi* | [**purchases_orders_email_document_post**](docs/PurchaseOrderApi.md#purchases_orders_email_document_post) | **POST** /purchases-orders/email-document | Send email purchase order document.
*OpenapiClient::PurchaseOrderApi* | [**purchases_orders_get**](docs/PurchaseOrderApi.md#purchases_orders_get) | **GET** /purchases-orders | Get all purchase order documents.
*OpenapiClient::PurchaseOrderApi* | [**purchases_orders_id_attachment_post**](docs/PurchaseOrderApi.md#purchases_orders_id_attachment_post) | **POST** /purchases-orders/{id}/attachment | Attachment purchase order document.
*OpenapiClient::PurchaseOrderApi* | [**purchases_orders_id_delete**](docs/PurchaseOrderApi.md#purchases_orders_id_delete) | **DELETE** /purchases-orders/{id} | Delete purchase order document.
*OpenapiClient::PurchaseOrderApi* | [**purchases_orders_id_get**](docs/PurchaseOrderApi.md#purchases_orders_id_get) | **GET** /purchases-orders/{id} | Get purchase order document.
*OpenapiClient::PurchaseOrderApi* | [**purchases_orders_id_put**](docs/PurchaseOrderApi.md#purchases_orders_id_put) | **PUT** /purchases-orders/{id} | Edit purchase order document.
*OpenapiClient::PurchaseOrderApi* | [**purchases_orders_id_status_status_id_post**](docs/PurchaseOrderApi.md#purchases_orders_id_status_status_id_post) | **POST** /purchases-orders/{id}/status/{statusId} | Change status purchase order document.
*OpenapiClient::PurchaseOrderApi* | [**purchases_orders_inline_post**](docs/PurchaseOrderApi.md#purchases_orders_inline_post) | **POST** /purchases-orders/inline | Create purchase order document inline discount or inline vat.
*OpenapiClient::PurchaseOrderApi* | [**purchases_orders_post**](docs/PurchaseOrderApi.md#purchases_orders_post) | **POST** /purchases-orders | Create purchase order document.
*OpenapiClient::PurchaseOrderApi* | [**purchases_orders_sharedocument_post**](docs/PurchaseOrderApi.md#purchases_orders_sharedocument_post) | **POST** /purchases-orders/sharedocument | Share link purchase order document.
*OpenapiClient::QuotationsApi* | [**quotations_email_document_post**](docs/QuotationsApi.md#quotations_email_document_post) | **POST** /quotations/email-document | Send email quotations document.
*OpenapiClient::QuotationsApi* | [**quotations_get**](docs/QuotationsApi.md#quotations_get) | **GET** /quotations | Get all quotations documents.
*OpenapiClient::QuotationsApi* | [**quotations_id_attachment_post**](docs/QuotationsApi.md#quotations_id_attachment_post) | **POST** /quotations/{id}/attachment | Attachment quotations document.
*OpenapiClient::QuotationsApi* | [**quotations_id_delete**](docs/QuotationsApi.md#quotations_id_delete) | **DELETE** /quotations/{id} | Delete quotations document.
*OpenapiClient::QuotationsApi* | [**quotations_id_get**](docs/QuotationsApi.md#quotations_id_get) | **GET** /quotations/{id} | Get quotations document.
*OpenapiClient::QuotationsApi* | [**quotations_id_put**](docs/QuotationsApi.md#quotations_id_put) | **PUT** /quotations/{id} | Edit quotations document.
*OpenapiClient::QuotationsApi* | [**quotations_id_status_status_id_post**](docs/QuotationsApi.md#quotations_id_status_status_id_post) | **POST** /quotations/{id}/status/{statusId} | Change status quotations document.
*OpenapiClient::QuotationsApi* | [**quotations_inline_post**](docs/QuotationsApi.md#quotations_inline_post) | **POST** /quotations/inline | Create quotations document inline discount or inline vat.
*OpenapiClient::QuotationsApi* | [**quotations_post**](docs/QuotationsApi.md#quotations_post) | **POST** /quotations | Create quotations document.
*OpenapiClient::QuotationsApi* | [**quotations_sharedocument_post**](docs/QuotationsApi.md#quotations_sharedocument_post) | **POST** /quotations/sharedocument | Share link quotations document.
*OpenapiClient::ReceiptApi* | [**receipts_email_document_post**](docs/ReceiptApi.md#receipts_email_document_post) | **POST** /receipts/email-document | Send email receipt document.
*OpenapiClient::ReceiptApi* | [**receipts_get**](docs/ReceiptApi.md#receipts_get) | **GET** /receipts | Get all receipt documents
*OpenapiClient::ReceiptApi* | [**receipts_id_attachment_post**](docs/ReceiptApi.md#receipts_id_attachment_post) | **POST** /receipts/{id}/attachment | Attachment receipt document.
*OpenapiClient::ReceiptApi* | [**receipts_id_delete**](docs/ReceiptApi.md#receipts_id_delete) | **DELETE** /receipts/{id} | Delete receipt document.
*OpenapiClient::ReceiptApi* | [**receipts_id_get**](docs/ReceiptApi.md#receipts_id_get) | **GET** /receipts/{id} | Get receipt document.
*OpenapiClient::ReceiptApi* | [**receipts_id_payment_post**](docs/ReceiptApi.md#receipts_id_payment_post) | **POST** /receipts/{id}/payment | Change status is paid receipt document.
*OpenapiClient::ReceiptApi* | [**receipts_id_put**](docs/ReceiptApi.md#receipts_id_put) | **PUT** /receipts/{id} | Edit receipt document.
*OpenapiClient::ReceiptApi* | [**receipts_id_status_status_id_post**](docs/ReceiptApi.md#receipts_id_status_status_id_post) | **POST** /receipts/{id}/status/{statusId} | Change status receipt document.
*OpenapiClient::ReceiptApi* | [**receipts_inline_post**](docs/ReceiptApi.md#receipts_inline_post) | **POST** /receipts/inline | Create receipt document inline discount or inline vat.
*OpenapiClient::ReceiptApi* | [**receipts_inline_with_payment_post**](docs/ReceiptApi.md#receipts_inline_with_payment_post) | **POST** /receipts/inline/with-payment | Create receipt document inline discount or inline vat with payment.
*OpenapiClient::ReceiptApi* | [**receipts_post**](docs/ReceiptApi.md#receipts_post) | **POST** /receipts | Create receipt document.
*OpenapiClient::ReceiptApi* | [**receipts_sharedocument_post**](docs/ReceiptApi.md#receipts_sharedocument_post) | **POST** /receipts/sharedocument | Share link receipt document.
*OpenapiClient::ReceiptApi* | [**receipts_with_payment_post**](docs/ReceiptApi.md#receipts_with_payment_post) | **POST** /receipts/with-payment | Create receipt document with payment.
*OpenapiClient::ReceivingInventoryApi* | [**purchases_email_document_post**](docs/ReceivingInventoryApi.md#purchases_email_document_post) | **POST** /purchases/email-document | Send email receiving inventory document.
*OpenapiClient::ReceivingInventoryApi* | [**purchases_get**](docs/ReceivingInventoryApi.md#purchases_get) | **GET** /purchases | Get all receiving inventory documents.
*OpenapiClient::ReceivingInventoryApi* | [**purchases_id_attachment_post**](docs/ReceivingInventoryApi.md#purchases_id_attachment_post) | **POST** /purchases/{id}/attachment | Attachment receiving inventory document.
*OpenapiClient::ReceivingInventoryApi* | [**purchases_id_delete**](docs/ReceivingInventoryApi.md#purchases_id_delete) | **DELETE** /purchases/{id} | Delete receiving inventory document.
*OpenapiClient::ReceivingInventoryApi* | [**purchases_id_get**](docs/ReceivingInventoryApi.md#purchases_id_get) | **GET** /purchases/{id} | Get receiving inventory document.
*OpenapiClient::ReceivingInventoryApi* | [**purchases_id_payment_post**](docs/ReceivingInventoryApi.md#purchases_id_payment_post) | **POST** /purchases/{id}/payment | Change status is paid receiving inventory document.
*OpenapiClient::ReceivingInventoryApi* | [**purchases_id_put**](docs/ReceivingInventoryApi.md#purchases_id_put) | **PUT** /purchases/{id} | Edit receiving inventory document.
*OpenapiClient::ReceivingInventoryApi* | [**purchases_id_status_status_id_post**](docs/ReceivingInventoryApi.md#purchases_id_status_status_id_post) | **POST** /purchases/{id}/status/{statusId} | Change status receiving inventory document.
*OpenapiClient::ReceivingInventoryApi* | [**purchases_inline_post**](docs/ReceivingInventoryApi.md#purchases_inline_post) | **POST** /purchases/inline | Create receiving inventory document inline discount or inline vat.
*OpenapiClient::ReceivingInventoryApi* | [**purchases_inline_with_payment_post**](docs/ReceivingInventoryApi.md#purchases_inline_with_payment_post) | **POST** /purchases/inline/with-payment | Create receiving inventory document inline discount or inline vat with payment.
*OpenapiClient::ReceivingInventoryApi* | [**purchases_post**](docs/ReceivingInventoryApi.md#purchases_post) | **POST** /purchases | Create receiving inventory document.
*OpenapiClient::ReceivingInventoryApi* | [**purchases_sharedocument_post**](docs/ReceivingInventoryApi.md#purchases_sharedocument_post) | **POST** /purchases/sharedocument | Share link receiving inventory document.
*OpenapiClient::ReceivingInventoryApi* | [**purchases_with_payment_post**](docs/ReceivingInventoryApi.md#purchases_with_payment_post) | **POST** /purchases/with-payment | Create receiving inventory document with payment.
*OpenapiClient::TaxInvoiceApi* | [**tax_invoices_email_document_post**](docs/TaxInvoiceApi.md#tax_invoices_email_document_post) | **POST** /tax-invoices/email-document | Send Email tax invoice document
*OpenapiClient::TaxInvoiceApi* | [**tax_invoices_get**](docs/TaxInvoiceApi.md#tax_invoices_get) | **GET** /tax-invoices | Get all tax invocie documents.
*OpenapiClient::TaxInvoiceApi* | [**tax_invoices_id_attachment_post**](docs/TaxInvoiceApi.md#tax_invoices_id_attachment_post) | **POST** /tax-invoices/{id}/attachment | Attachment tax Invoices document.
*OpenapiClient::TaxInvoiceApi* | [**tax_invoices_id_delete**](docs/TaxInvoiceApi.md#tax_invoices_id_delete) | **DELETE** /tax-invoices/{id} | Delete tax invoices document.
*OpenapiClient::TaxInvoiceApi* | [**tax_invoices_id_get**](docs/TaxInvoiceApi.md#tax_invoices_id_get) | **GET** /tax-invoices/{id} | Get tax invoices document.
*OpenapiClient::TaxInvoiceApi* | [**tax_invoices_id_payment_post**](docs/TaxInvoiceApi.md#tax_invoices_id_payment_post) | **POST** /tax-invoices/{id}/payment | Change status is paid tax-invoice document.
*OpenapiClient::TaxInvoiceApi* | [**tax_invoices_id_put**](docs/TaxInvoiceApi.md#tax_invoices_id_put) | **PUT** /tax-invoices/{id} | Edit tax invoices document.
*OpenapiClient::TaxInvoiceApi* | [**tax_invoices_id_status_status_id_post**](docs/TaxInvoiceApi.md#tax_invoices_id_status_status_id_post) | **POST** /tax-invoices/{id}/status/{statusId} | Change status tax invoices document.
*OpenapiClient::TaxInvoiceApi* | [**tax_invoices_inline_post**](docs/TaxInvoiceApi.md#tax_invoices_inline_post) | **POST** /tax-invoices/inline | Create tax invocie document inline discount or inline vat.
*OpenapiClient::TaxInvoiceApi* | [**tax_invoices_inline_with_payment_post**](docs/TaxInvoiceApi.md#tax_invoices_inline_with_payment_post) | **POST** /tax-invoices/inline/with-payment | Create tax invocie document inline discount or inline vat with payment.
*OpenapiClient::TaxInvoiceApi* | [**tax_invoices_post**](docs/TaxInvoiceApi.md#tax_invoices_post) | **POST** /tax-invoices | Create tax invocie document.
*OpenapiClient::TaxInvoiceApi* | [**tax_invoices_sharedocument_post**](docs/TaxInvoiceApi.md#tax_invoices_sharedocument_post) | **POST** /tax-invoices/sharedocument | Share link tax invoice document.
*OpenapiClient::TaxInvoiceApi* | [**tax_invoices_with_payment_post**](docs/TaxInvoiceApi.md#tax_invoices_with_payment_post) | **POST** /tax-invoices/with-payment | Create tax invocie document with payment.
*OpenapiClient::WithholdingTaxApi* | [**withholding_taxes_email_document_post**](docs/WithholdingTaxApi.md#withholding_taxes_email_document_post) | **POST** /withholding-taxes/email-document | Send email withholding tax.
*OpenapiClient::WithholdingTaxApi* | [**withholding_taxes_get**](docs/WithholdingTaxApi.md#withholding_taxes_get) | **GET** /withholding-taxes | Get all withholding tax documents.
*OpenapiClient::WithholdingTaxApi* | [**withholding_taxes_id_attachment_post**](docs/WithholdingTaxApi.md#withholding_taxes_id_attachment_post) | **POST** /withholding-taxes/{id}/attachment | Attachment withholding tax.
*OpenapiClient::WithholdingTaxApi* | [**withholding_taxes_id_delete**](docs/WithholdingTaxApi.md#withholding_taxes_id_delete) | **DELETE** /withholding-taxes/{id} | Delete withholding tax document.
*OpenapiClient::WithholdingTaxApi* | [**withholding_taxes_id_get**](docs/WithholdingTaxApi.md#withholding_taxes_id_get) | **GET** /withholding-taxes/{id} | Get withholding tax document.
*OpenapiClient::WithholdingTaxApi* | [**withholding_taxes_id_put**](docs/WithholdingTaxApi.md#withholding_taxes_id_put) | **PUT** /withholding-taxes/{id} | Edit withholding tax document.
*OpenapiClient::WithholdingTaxApi* | [**withholding_taxes_id_status_status_id_post**](docs/WithholdingTaxApi.md#withholding_taxes_id_status_status_id_post) | **POST** /withholding-taxes/{id}/status/{statusId} | Change status withholding tax document.
*OpenapiClient::WithholdingTaxApi* | [**withholding_taxes_post**](docs/WithholdingTaxApi.md#withholding_taxes_post) | **POST** /withholding-taxes | Create withholding tax document.
*OpenapiClient::WithholdingTaxApi* | [**withholding_taxes_sharedocument_post**](docs/WithholdingTaxApi.md#withholding_taxes_sharedocument_post) | **POST** /withholding-taxes/sharedocument | Share link withholding tax.


## Documentation for Models

 - [OpenapiClient::AllBankAccountResponse](docs/AllBankAccountResponse.md)
 - [OpenapiClient::AllDocumentResponse](docs/AllDocumentResponse.md)
 - [OpenapiClient::AllDocumentResponseData](docs/AllDocumentResponseData.md)
 - [OpenapiClient::AllExpenseDocumentResponse](docs/AllExpenseDocumentResponse.md)
 - [OpenapiClient::AllExpenseDocumentResponseData](docs/AllExpenseDocumentResponseData.md)
 - [OpenapiClient::AllWithholidingTaxDocumentResponse](docs/AllWithholidingTaxDocumentResponse.md)
 - [OpenapiClient::AllWithholidingTaxDocumentResponseData](docs/AllWithholidingTaxDocumentResponseData.md)
 - [OpenapiClient::AttachmentResponse](docs/AttachmentResponse.md)
 - [OpenapiClient::AttachmentResponseData](docs/AttachmentResponseData.md)
 - [OpenapiClient::AuthenResponse](docs/AuthenResponse.md)
 - [OpenapiClient::BankAccount](docs/BankAccount.md)
 - [OpenapiClient::BankAccountResponse](docs/BankAccountResponse.md)
 - [OpenapiClient::BankAccountResponseData](docs/BankAccountResponseData.md)
 - [OpenapiClient::BusinessCategory](docs/BusinessCategory.md)
 - [OpenapiClient::BusinessCategoryData](docs/BusinessCategoryData.md)
 - [OpenapiClient::CompanyInfo](docs/CompanyInfo.md)
 - [OpenapiClient::CompanyInfoResponse](docs/CompanyInfoResponse.md)
 - [OpenapiClient::CompanyInfoResponseData](docs/CompanyInfoResponseData.md)
 - [OpenapiClient::Contact](docs/Contact.md)
 - [OpenapiClient::ContactResponse](docs/ContactResponse.md)
 - [OpenapiClient::ContactResponseData](docs/ContactResponseData.md)
 - [OpenapiClient::DeleteResponse](docs/DeleteResponse.md)
 - [OpenapiClient::DeleteResponseData](docs/DeleteResponseData.md)
 - [OpenapiClient::Document](docs/Document.md)
 - [OpenapiClient::DocumentResponse](docs/DocumentResponse.md)
 - [OpenapiClient::ExpenseDocument](docs/ExpenseDocument.md)
 - [OpenapiClient::ExpenseInlineDocument](docs/ExpenseInlineDocument.md)
 - [OpenapiClient::ExpenseInlineDocumentAllOf](docs/ExpenseInlineDocumentAllOf.md)
 - [OpenapiClient::ExpenseInlineDocumentResponse](docs/ExpenseInlineDocumentResponse.md)
 - [OpenapiClient::ExpenseInlineDocumentResponseAllOf](docs/ExpenseInlineDocumentResponseAllOf.md)
 - [OpenapiClient::ExpenseInlineDocumentResponseAllOfData](docs/ExpenseInlineDocumentResponseAllOfData.md)
 - [OpenapiClient::ExpenseInlineDocumentWithPaymentPaid](docs/ExpenseInlineDocumentWithPaymentPaid.md)
 - [OpenapiClient::ExpenseInlineDocumentWithPaymentPaidCash](docs/ExpenseInlineDocumentWithPaymentPaidCash.md)
 - [OpenapiClient::ExpenseInlineDocumentWithPaymentPaidCheque](docs/ExpenseInlineDocumentWithPaymentPaidCheque.md)
 - [OpenapiClient::ExpenseInlineDocumentWithPaymentPaidCreditCard](docs/ExpenseInlineDocumentWithPaymentPaidCreditCard.md)
 - [OpenapiClient::ExpenseInlineDocumentWithPaymentPaidTransfer](docs/ExpenseInlineDocumentWithPaymentPaidTransfer.md)
 - [OpenapiClient::ExpenseInlineProductItem](docs/ExpenseInlineProductItem.md)
 - [OpenapiClient::ExpenseResponse](docs/ExpenseResponse.md)
 - [OpenapiClient::ExpenseSimpleDocument](docs/ExpenseSimpleDocument.md)
 - [OpenapiClient::ExpenseSimpleDocumentAllOf](docs/ExpenseSimpleDocumentAllOf.md)
 - [OpenapiClient::ExpenseSimpleDocumentResponse](docs/ExpenseSimpleDocumentResponse.md)
 - [OpenapiClient::ExpenseSimpleDocumentResponseAllOf](docs/ExpenseSimpleDocumentResponseAllOf.md)
 - [OpenapiClient::ExpenseSimpleDocumentResponseAllOfData](docs/ExpenseSimpleDocumentResponseAllOfData.md)
 - [OpenapiClient::ExpenseSimpleDocumentWithPaymentPaid](docs/ExpenseSimpleDocumentWithPaymentPaid.md)
 - [OpenapiClient::ExpenseSimpleDocumentWithPaymentPaidCash](docs/ExpenseSimpleDocumentWithPaymentPaidCash.md)
 - [OpenapiClient::ExpenseSimpleDocumentWithPaymentPaidCheque](docs/ExpenseSimpleDocumentWithPaymentPaidCheque.md)
 - [OpenapiClient::ExpenseSimpleDocumentWithPaymentPaidCreditCard](docs/ExpenseSimpleDocumentWithPaymentPaidCreditCard.md)
 - [OpenapiClient::ExpenseSimpleDocumentWithPaymentPaidTransfer](docs/ExpenseSimpleDocumentWithPaymentPaidTransfer.md)
 - [OpenapiClient::ExpenseSimpleProductItem](docs/ExpenseSimpleProductItem.md)
 - [OpenapiClient::InlineDocument](docs/InlineDocument.md)
 - [OpenapiClient::InlineDocumentAllOf](docs/InlineDocumentAllOf.md)
 - [OpenapiClient::InlineDocumentResponse](docs/InlineDocumentResponse.md)
 - [OpenapiClient::InlineDocumentResponseAllOf](docs/InlineDocumentResponseAllOf.md)
 - [OpenapiClient::InlineDocumentResponseAllOfData](docs/InlineDocumentResponseAllOfData.md)
 - [OpenapiClient::InlineDocumentWithPaymentPaid](docs/InlineDocumentWithPaymentPaid.md)
 - [OpenapiClient::InlineDocumentWithPaymentPaidCash](docs/InlineDocumentWithPaymentPaidCash.md)
 - [OpenapiClient::InlineDocumentWithPaymentPaidCheque](docs/InlineDocumentWithPaymentPaidCheque.md)
 - [OpenapiClient::InlineDocumentWithPaymentPaidCreditCard](docs/InlineDocumentWithPaymentPaidCreditCard.md)
 - [OpenapiClient::InlineDocumentWithPaymentPaidTransfer](docs/InlineDocumentWithPaymentPaidTransfer.md)
 - [OpenapiClient::InlineDocumentWithPaymentReceiving](docs/InlineDocumentWithPaymentReceiving.md)
 - [OpenapiClient::InlineDocumentWithPaymentReceivingCash](docs/InlineDocumentWithPaymentReceivingCash.md)
 - [OpenapiClient::InlineDocumentWithPaymentReceivingCheque](docs/InlineDocumentWithPaymentReceivingCheque.md)
 - [OpenapiClient::InlineDocumentWithPaymentReceivingCreditCard](docs/InlineDocumentWithPaymentReceivingCreditCard.md)
 - [OpenapiClient::InlineDocumentWithPaymentReceivingTransfer](docs/InlineDocumentWithPaymentReceivingTransfer.md)
 - [OpenapiClient::InlineObject](docs/InlineObject.md)
 - [OpenapiClient::InlineObject1](docs/InlineObject1.md)
 - [OpenapiClient::InlineObject2](docs/InlineObject2.md)
 - [OpenapiClient::InlineObject3](docs/InlineObject3.md)
 - [OpenapiClient::InlineObject4](docs/InlineObject4.md)
 - [OpenapiClient::InlineObject5](docs/InlineObject5.md)
 - [OpenapiClient::InlineObject6](docs/InlineObject6.md)
 - [OpenapiClient::InlineObject7](docs/InlineObject7.md)
 - [OpenapiClient::InlineObject8](docs/InlineObject8.md)
 - [OpenapiClient::InlineObject9](docs/InlineObject9.md)
 - [OpenapiClient::InlineProductItem](docs/InlineProductItem.md)
 - [OpenapiClient::InlineProductItemAllOf](docs/InlineProductItemAllOf.md)
 - [OpenapiClient::PaymentPaidCash](docs/PaymentPaidCash.md)
 - [OpenapiClient::PaymentPaidCheque](docs/PaymentPaidCheque.md)
 - [OpenapiClient::PaymentPaidCreditCard](docs/PaymentPaidCreditCard.md)
 - [OpenapiClient::PaymentPaidDocument](docs/PaymentPaidDocument.md)
 - [OpenapiClient::PaymentPaidTransfer](docs/PaymentPaidTransfer.md)
 - [OpenapiClient::PaymentReceivingCash](docs/PaymentReceivingCash.md)
 - [OpenapiClient::PaymentReceivingCheque](docs/PaymentReceivingCheque.md)
 - [OpenapiClient::PaymentReceivingCreditCard](docs/PaymentReceivingCreditCard.md)
 - [OpenapiClient::PaymentReceivingDocument](docs/PaymentReceivingDocument.md)
 - [OpenapiClient::PaymentReceivingTransfer](docs/PaymentReceivingTransfer.md)
 - [OpenapiClient::Product](docs/Product.md)
 - [OpenapiClient::ProductInventory](docs/ProductInventory.md)
 - [OpenapiClient::ProductInventoryBalance](docs/ProductInventoryBalance.md)
 - [OpenapiClient::ProductItem](docs/ProductItem.md)
 - [OpenapiClient::ProductNonInventory](docs/ProductNonInventory.md)
 - [OpenapiClient::ProductResponse](docs/ProductResponse.md)
 - [OpenapiClient::ProductResponseData](docs/ProductResponseData.md)
 - [OpenapiClient::ProductService](docs/ProductService.md)
 - [OpenapiClient::ProductType](docs/ProductType.md)
 - [OpenapiClient::ReferencedByMe](docs/ReferencedByMe.md)
 - [OpenapiClient::ReferencedToMe](docs/ReferencedToMe.md)
 - [OpenapiClient::SendEmail](docs/SendEmail.md)
 - [OpenapiClient::SendEmailCoppies](docs/SendEmailCoppies.md)
 - [OpenapiClient::SendEmailCoppiesAllOf](docs/SendEmailCoppiesAllOf.md)
 - [OpenapiClient::SendEmailResponse](docs/SendEmailResponse.md)
 - [OpenapiClient::SendEmailResponseData](docs/SendEmailResponseData.md)
 - [OpenapiClient::SendEmailSimple](docs/SendEmailSimple.md)
 - [OpenapiClient::ShareDocument](docs/ShareDocument.md)
 - [OpenapiClient::ShareDocumentResponse](docs/ShareDocumentResponse.md)
 - [OpenapiClient::ShareDocumentResponseData](docs/ShareDocumentResponseData.md)
 - [OpenapiClient::SimpleDocument](docs/SimpleDocument.md)
 - [OpenapiClient::SimpleDocumentAllOf](docs/SimpleDocumentAllOf.md)
 - [OpenapiClient::SimpleDocumentResponse](docs/SimpleDocumentResponse.md)
 - [OpenapiClient::SimpleDocumentResponseAllOf](docs/SimpleDocumentResponseAllOf.md)
 - [OpenapiClient::SimpleDocumentResponseAllOfData](docs/SimpleDocumentResponseAllOfData.md)
 - [OpenapiClient::SimpleDocumentResponseAllOfDataCompany](docs/SimpleDocumentResponseAllOfDataCompany.md)
 - [OpenapiClient::SimpleDocumentResponseAllOfDataPayments](docs/SimpleDocumentResponseAllOfDataPayments.md)
 - [OpenapiClient::SimpleDocumentWithPaymentPaid](docs/SimpleDocumentWithPaymentPaid.md)
 - [OpenapiClient::SimpleDocumentWithPaymentPaidCash](docs/SimpleDocumentWithPaymentPaidCash.md)
 - [OpenapiClient::SimpleDocumentWithPaymentPaidCheque](docs/SimpleDocumentWithPaymentPaidCheque.md)
 - [OpenapiClient::SimpleDocumentWithPaymentPaidCreditCard](docs/SimpleDocumentWithPaymentPaidCreditCard.md)
 - [OpenapiClient::SimpleDocumentWithPaymentPaidTransfer](docs/SimpleDocumentWithPaymentPaidTransfer.md)
 - [OpenapiClient::SimpleDocumentWithPaymentReceiving](docs/SimpleDocumentWithPaymentReceiving.md)
 - [OpenapiClient::SimpleDocumentWithPaymentReceivingCash](docs/SimpleDocumentWithPaymentReceivingCash.md)
 - [OpenapiClient::SimpleDocumentWithPaymentReceivingCheque](docs/SimpleDocumentWithPaymentReceivingCheque.md)
 - [OpenapiClient::SimpleDocumentWithPaymentReceivingCreditCard](docs/SimpleDocumentWithPaymentReceivingCreditCard.md)
 - [OpenapiClient::SimpleDocumentWithPaymentReceivingTransfer](docs/SimpleDocumentWithPaymentReceivingTransfer.md)
 - [OpenapiClient::SimpleProductItem](docs/SimpleProductItem.md)
 - [OpenapiClient::StatusDocument](docs/StatusDocument.md)
 - [OpenapiClient::UpdateDocument](docs/UpdateDocument.md)
 - [OpenapiClient::UpdateExpenseDocument](docs/UpdateExpenseDocument.md)
 - [OpenapiClient::UpdateExpenseInlineDocument](docs/UpdateExpenseInlineDocument.md)
 - [OpenapiClient::UpdateExpenseSimpleDocument](docs/UpdateExpenseSimpleDocument.md)
 - [OpenapiClient::UpdateInlineDocument](docs/UpdateInlineDocument.md)
 - [OpenapiClient::UpdateSimpleDocument](docs/UpdateSimpleDocument.md)
 - [OpenapiClient::UpdateWithholidingTaxDocument](docs/UpdateWithholidingTaxDocument.md)
 - [OpenapiClient::UpgradeDocument](docs/UpgradeDocument.md)
 - [OpenapiClient::WithholidingTaxDocument](docs/WithholidingTaxDocument.md)
 - [OpenapiClient::WithholidingTaxDocumentResponse](docs/WithholidingTaxDocumentResponse.md)
 - [OpenapiClient::WithholidingTaxDocumentResponseData](docs/WithholidingTaxDocumentResponseData.md)
 - [OpenapiClient::WithholidingTaxItem](docs/WithholidingTaxItem.md)


## Documentation for Authorization

 All endpoints do not require authorization.

