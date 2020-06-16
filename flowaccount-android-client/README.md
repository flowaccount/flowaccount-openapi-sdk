# openapi-android-client

## Requirements

Building the API client library requires [Maven](https://maven.apache.org/) to be installed.

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn deploy
```

Refer to the [official documentation](https://maven.apache.org/plugins/maven-deploy-plugin/usage.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
    <groupId>org.openapitools</groupId>
    <artifactId>openapi-android-client</artifactId>
    <version>1.0.0</version>
    <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
compile "org.openapitools:openapi-android-client:1.0.0"
```

### Others

At first generate the JAR by executing:

    mvn package

Then manually install the following JARs:

- target/openapi-android-client-1.0.0.jar
- target/lib/*.jar

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

import org.openapitools.client.api.AuthenticationApi;

public class AuthenticationApiExample {

    public static void main(String[] args) {
        AuthenticationApi apiInstance = new AuthenticationApi();
        String contentType = application/x-www-form-urlencoded; // String | 
        String grantType = null; // String | 
        String scope = null; // String | 
        String clientId = null; // String | 
        String clientSecret = null; // String | 
        String guid = null; // String | 
        try {
            AuthenResponse result = apiInstance.tokenPost(contentType, grantType, scope, clientId, clientSecret, guid);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AuthenticationApi#tokenPost");
            e.printStackTrace();
        }
    }
}

```

## Documentation for API Endpoints

All URIs are relative to *https://openapi.flowaccount.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthenticationApi* | [**tokenPost**](docs/AuthenticationApi.md#tokenPost) | **POST** /token | Generate Access Token
*BankAccountApi* | [**bankAccountsGet**](docs/BankAccountApi.md#bankAccountsGet) | **GET** /bank-accounts | Get list all My Bank Account
*BankAccountApi* | [**bankAccountsPost**](docs/BankAccountApi.md#bankAccountsPost) | **POST** /bank-accounts | Create bank account.
*BillingNotesApi* | [**billingNotesEmailDocumentPost**](docs/BillingNotesApi.md#billingNotesEmailDocumentPost) | **POST** /billing-notes/email-document | Send email billing notes document.
*BillingNotesApi* | [**billingNotesGet**](docs/BillingNotesApi.md#billingNotesGet) | **GET** /billing-notes | Get list all billing notes documents.
*BillingNotesApi* | [**billingNotesIdAttachmentPost**](docs/BillingNotesApi.md#billingNotesIdAttachmentPost) | **POST** /billing-notes/{id}/attachment | Add Attachment to billing notes document.
*BillingNotesApi* | [**billingNotesIdDelete**](docs/BillingNotesApi.md#billingNotesIdDelete) | **DELETE** /billing-notes/{id} | Delete billing notes document.
*BillingNotesApi* | [**billingNotesIdGet**](docs/BillingNotesApi.md#billingNotesIdGet) | **GET** /billing-notes/{id} | Get billing notes document.
*BillingNotesApi* | [**billingNotesIdPut**](docs/BillingNotesApi.md#billingNotesIdPut) | **PUT** /billing-notes/{id} | Edit billing notes document.
*BillingNotesApi* | [**billingNotesIdStatusStatusIdPost**](docs/BillingNotesApi.md#billingNotesIdStatusStatusIdPost) | **POST** /billing-notes/{id}/status/{statusId} | Change status of billing notes document.
*BillingNotesApi* | [**billingNotesInlinePost**](docs/BillingNotesApi.md#billingNotesInlinePost) | **POST** /billing-notes/inline | Create billing notes document with discount and tax inline.
*BillingNotesApi* | [**billingNotesPost**](docs/BillingNotesApi.md#billingNotesPost) | **POST** /billing-notes | Create billing notes document.
*BillingNotesApi* | [**billingNotesSharedocumentPost**](docs/BillingNotesApi.md#billingNotesSharedocumentPost) | **POST** /billing-notes/sharedocument | Share link billing notes document.
*BusinessInfomationApi* | [**companyInfoGet**](docs/BusinessInfomationApi.md#companyInfoGet) | **GET** /company/info | Get business infomation
*BusinessInfomationApi* | [**companyInfoPut**](docs/BusinessInfomationApi.md#companyInfoPut) | **PUT** /company/info | Edit business infomation
*CashInvoiceApi* | [**cashInvoicesEmailDocumentPost**](docs/CashInvoiceApi.md#cashInvoicesEmailDocumentPost) | **POST** /cash-invoices/email-document | Send email cash invoices document.
*CashInvoiceApi* | [**cashInvoicesGet**](docs/CashInvoiceApi.md#cashInvoicesGet) | **GET** /cash-invoices | Get list all cash invoices documents
*CashInvoiceApi* | [**cashInvoicesIdAttachmentPost**](docs/CashInvoiceApi.md#cashInvoicesIdAttachmentPost) | **POST** /cash-invoices/{id}/attachment | Add Attachment to cash invoices document.
*CashInvoiceApi* | [**cashInvoicesIdDelete**](docs/CashInvoiceApi.md#cashInvoicesIdDelete) | **DELETE** /cash-invoices/{id} | Delete cash invoices document.
*CashInvoiceApi* | [**cashInvoicesIdGet**](docs/CashInvoiceApi.md#cashInvoicesIdGet) | **GET** /cash-invoices/{id} | Get cash invoices document.
*CashInvoiceApi* | [**cashInvoicesIdPaymentPost**](docs/CashInvoiceApi.md#cashInvoicesIdPaymentPost) | **POST** /cash-invoices/{id}/payment | Change paid status of cash invoices document.
*CashInvoiceApi* | [**cashInvoicesIdPut**](docs/CashInvoiceApi.md#cashInvoicesIdPut) | **PUT** /cash-invoices/{id} | Edit cash invoices document.
*CashInvoiceApi* | [**cashInvoicesIdStatusStatusIdPost**](docs/CashInvoiceApi.md#cashInvoicesIdStatusStatusIdPost) | **POST** /cash-invoices/{id}/status/{statusId} | Change status of cash invoices document.
*CashInvoiceApi* | [**cashInvoicesInlinePost**](docs/CashInvoiceApi.md#cashInvoicesInlinePost) | **POST** /cash-invoices/inline | Create cash invoices document with discount and tax inline.
*CashInvoiceApi* | [**cashInvoicesInlineWithPaymentPost**](docs/CashInvoiceApi.md#cashInvoicesInlineWithPaymentPost) | **POST** /cash-invoices/inline/with-payment | Create cash invoices document with discount and tax inline with payment.
*CashInvoiceApi* | [**cashInvoicesPost**](docs/CashInvoiceApi.md#cashInvoicesPost) | **POST** /cash-invoices | Create cash invoices document.
*CashInvoiceApi* | [**cashInvoicesSharedocumentPost**](docs/CashInvoiceApi.md#cashInvoicesSharedocumentPost) | **POST** /cash-invoices/sharedocument | Share link cash invoices document.
*CashInvoiceApi* | [**cashInvoicesWithPaymentPost**](docs/CashInvoiceApi.md#cashInvoicesWithPaymentPost) | **POST** /cash-invoices/with-payment | Create cash invoices document with payment.
*ContactsApi* | [**contactsGet**](docs/ContactsApi.md#contactsGet) | **GET** /contacts | Get list all contacts.
*ContactsApi* | [**contactsIdDelete**](docs/ContactsApi.md#contactsIdDelete) | **DELETE** /contacts/{id} | Delete contacts.
*ContactsApi* | [**contactsIdGet**](docs/ContactsApi.md#contactsIdGet) | **GET** /contacts/{id} | Get contacts.
*ContactsApi* | [**contactsIdPut**](docs/ContactsApi.md#contactsIdPut) | **PUT** /contacts/{id} | Update contacts.
*ContactsApi* | [**contactsPost**](docs/ContactsApi.md#contactsPost) | **POST** /contacts | Create contacts
*ExpensesApi* | [**expensesCategoriesAccountingGet**](docs/ExpensesApi.md#expensesCategoriesAccountingGet) | **GET** /expenses/categories/accounting | Accounting categorys expenses document.
*ExpensesApi* | [**expensesCategoriesBusinessGet**](docs/ExpensesApi.md#expensesCategoriesBusinessGet) | **GET** /expenses/categories/business | Business categorys expenses document.
*ExpensesApi* | [**expensesEmailDocumentPost**](docs/ExpensesApi.md#expensesEmailDocumentPost) | **POST** /expenses/email-document | Send email expenses document.
*ExpensesApi* | [**expensesGet**](docs/ExpensesApi.md#expensesGet) | **GET** /expenses | Get list all expenses documents.
*ExpensesApi* | [**expensesIdAttachmentPost**](docs/ExpensesApi.md#expensesIdAttachmentPost) | **POST** /expenses/{id}/attachment | Add Attachment to expenses.
*ExpensesApi* | [**expensesIdDelete**](docs/ExpensesApi.md#expensesIdDelete) | **DELETE** /expenses/{id} | Delete expenses document.
*ExpensesApi* | [**expensesIdGet**](docs/ExpensesApi.md#expensesIdGet) | **GET** /expenses/{id} | Get expenses document.
*ExpensesApi* | [**expensesIdPaymentPost**](docs/ExpensesApi.md#expensesIdPaymentPost) | **POST** /expenses/{id}/payment | Change paid status of expenses document.
*ExpensesApi* | [**expensesIdPut**](docs/ExpensesApi.md#expensesIdPut) | **PUT** /expenses/{id} | Edit expenses document.
*ExpensesApi* | [**expensesIdStatusStatusIdPost**](docs/ExpensesApi.md#expensesIdStatusStatusIdPost) | **POST** /expenses/{id}/status/{statusId} | Change status of expenses document.
*ExpensesApi* | [**expensesInlinePost**](docs/ExpensesApi.md#expensesInlinePost) | **POST** /expenses/inline | Create expenses document with discount and tax inline.
*ExpensesApi* | [**expensesInlineWithPaymentPost**](docs/ExpensesApi.md#expensesInlineWithPaymentPost) | **POST** /expenses/inline/with-payment | Create expenses document with discount and tax inline with payment.
*ExpensesApi* | [**expensesPost**](docs/ExpensesApi.md#expensesPost) | **POST** /expenses | Create expenses document.
*ExpensesApi* | [**expensesSharedocumentPost**](docs/ExpensesApi.md#expensesSharedocumentPost) | **POST** /expenses/sharedocument | Share link expenses documents.
*ExpensesApi* | [**expensesWithPaymentPost**](docs/ExpensesApi.md#expensesWithPaymentPost) | **POST** /expenses/with-payment | Create expenses document with-payment.
*ProductsApi* | [**productsGet**](docs/ProductsApi.md#productsGet) | **GET** /products | Get list all products.
*ProductsApi* | [**productsIdDelete**](docs/ProductsApi.md#productsIdDelete) | **DELETE** /products/{id} | Delete products.
*ProductsApi* | [**productsIdGet**](docs/ProductsApi.md#productsIdGet) | **GET** /products/{id} | Get products.
*ProductsApi* | [**productsIdPut**](docs/ProductsApi.md#productsIdPut) | **PUT** /products/{id} | Update products.
*ProductsApi* | [**productsPost**](docs/ProductsApi.md#productsPost) | **POST** /products | Create products.
*PurchaseOrderApi* | [**purchasesOrdersEmailDocumentPost**](docs/PurchaseOrderApi.md#purchasesOrdersEmailDocumentPost) | **POST** /purchases-orders/email-document | Send email purchase order document.
*PurchaseOrderApi* | [**purchasesOrdersGet**](docs/PurchaseOrderApi.md#purchasesOrdersGet) | **GET** /purchases-orders | Get list all purchase order documents.
*PurchaseOrderApi* | [**purchasesOrdersIdAttachmentPost**](docs/PurchaseOrderApi.md#purchasesOrdersIdAttachmentPost) | **POST** /purchases-orders/{id}/attachment | Add Attachment to purchase order document.
*PurchaseOrderApi* | [**purchasesOrdersIdDelete**](docs/PurchaseOrderApi.md#purchasesOrdersIdDelete) | **DELETE** /purchases-orders/{id} | Delete purchase order document.
*PurchaseOrderApi* | [**purchasesOrdersIdGet**](docs/PurchaseOrderApi.md#purchasesOrdersIdGet) | **GET** /purchases-orders/{id} | Get purchase order document.
*PurchaseOrderApi* | [**purchasesOrdersIdPut**](docs/PurchaseOrderApi.md#purchasesOrdersIdPut) | **PUT** /purchases-orders/{id} | Edit purchase order document.
*PurchaseOrderApi* | [**purchasesOrdersIdStatusStatusIdPost**](docs/PurchaseOrderApi.md#purchasesOrdersIdStatusStatusIdPost) | **POST** /purchases-orders/{id}/status/{statusId} | Change status of purchase order document.
*PurchaseOrderApi* | [**purchasesOrdersInlinePost**](docs/PurchaseOrderApi.md#purchasesOrdersInlinePost) | **POST** /purchases-orders/inline | Create purchase order document with discount and tax inline.
*PurchaseOrderApi* | [**purchasesOrdersPost**](docs/PurchaseOrderApi.md#purchasesOrdersPost) | **POST** /purchases-orders | Create purchase order document.
*PurchaseOrderApi* | [**purchasesOrdersSharedocumentPost**](docs/PurchaseOrderApi.md#purchasesOrdersSharedocumentPost) | **POST** /purchases-orders/sharedocument | Share link purchase order document.
*QuotationsApi* | [**quotationsEmailDocumentPost**](docs/QuotationsApi.md#quotationsEmailDocumentPost) | **POST** /quotations/email-document | Send email quotations document.
*QuotationsApi* | [**quotationsGet**](docs/QuotationsApi.md#quotationsGet) | **GET** /quotations | Get list all quotations documents.
*QuotationsApi* | [**quotationsIdAttachmentPost**](docs/QuotationsApi.md#quotationsIdAttachmentPost) | **POST** /quotations/{id}/attachment | Add Attachment to quotations document.
*QuotationsApi* | [**quotationsIdDelete**](docs/QuotationsApi.md#quotationsIdDelete) | **DELETE** /quotations/{id} | Delete quotations document.
*QuotationsApi* | [**quotationsIdGet**](docs/QuotationsApi.md#quotationsIdGet) | **GET** /quotations/{id} | Get quotations document.
*QuotationsApi* | [**quotationsIdPut**](docs/QuotationsApi.md#quotationsIdPut) | **PUT** /quotations/{id} | Edit quotations document.
*QuotationsApi* | [**quotationsIdStatusStatusIdPost**](docs/QuotationsApi.md#quotationsIdStatusStatusIdPost) | **POST** /quotations/{id}/status/{statusId} | Change status of quotations document.
*QuotationsApi* | [**quotationsInlinePost**](docs/QuotationsApi.md#quotationsInlinePost) | **POST** /quotations/inline | Create quotations document with discount and tax inline.
*QuotationsApi* | [**quotationsPost**](docs/QuotationsApi.md#quotationsPost) | **POST** /quotations | Create quotations document.
*QuotationsApi* | [**quotationsSharedocumentPost**](docs/QuotationsApi.md#quotationsSharedocumentPost) | **POST** /quotations/sharedocument | Share link quotations document.
*ReceiptApi* | [**receiptsEmailDocumentPost**](docs/ReceiptApi.md#receiptsEmailDocumentPost) | **POST** /receipts/email-document | Send email receipt document.
*ReceiptApi* | [**receiptsGet**](docs/ReceiptApi.md#receiptsGet) | **GET** /receipts | Get list all receipt documents
*ReceiptApi* | [**receiptsIdAttachmentPost**](docs/ReceiptApi.md#receiptsIdAttachmentPost) | **POST** /receipts/{id}/attachment | Add Attachment to receipt document.
*ReceiptApi* | [**receiptsIdDelete**](docs/ReceiptApi.md#receiptsIdDelete) | **DELETE** /receipts/{id} | Delete receipt document.
*ReceiptApi* | [**receiptsIdGet**](docs/ReceiptApi.md#receiptsIdGet) | **GET** /receipts/{id} | Get receipt document.
*ReceiptApi* | [**receiptsIdPaymentPost**](docs/ReceiptApi.md#receiptsIdPaymentPost) | **POST** /receipts/{id}/payment | Change paid status of receipt document.
*ReceiptApi* | [**receiptsIdPut**](docs/ReceiptApi.md#receiptsIdPut) | **PUT** /receipts/{id} | Edit receipt document.
*ReceiptApi* | [**receiptsIdStatusStatusIdPost**](docs/ReceiptApi.md#receiptsIdStatusStatusIdPost) | **POST** /receipts/{id}/status/{statusId} | Change status of receipt document.
*ReceiptApi* | [**receiptsInlinePost**](docs/ReceiptApi.md#receiptsInlinePost) | **POST** /receipts/inline | Create receipt document with discount and tax inline.
*ReceiptApi* | [**receiptsInlineWithPaymentPost**](docs/ReceiptApi.md#receiptsInlineWithPaymentPost) | **POST** /receipts/inline/with-payment | Create receipt document with discount and tax inline with payment.
*ReceiptApi* | [**receiptsPost**](docs/ReceiptApi.md#receiptsPost) | **POST** /receipts | Create receipt document.
*ReceiptApi* | [**receiptsSharedocumentPost**](docs/ReceiptApi.md#receiptsSharedocumentPost) | **POST** /receipts/sharedocument | Share link receipt document.
*ReceiptApi* | [**receiptsWithPaymentPost**](docs/ReceiptApi.md#receiptsWithPaymentPost) | **POST** /receipts/with-payment | Create receipt document with payment.
*ReceivingInventoryApi* | [**purchasesEmailDocumentPost**](docs/ReceivingInventoryApi.md#purchasesEmailDocumentPost) | **POST** /purchases/email-document | Send email receiving inventory document.
*ReceivingInventoryApi* | [**purchasesGet**](docs/ReceivingInventoryApi.md#purchasesGet) | **GET** /purchases | Get list all receiving inventory documents.
*ReceivingInventoryApi* | [**purchasesIdAttachmentPost**](docs/ReceivingInventoryApi.md#purchasesIdAttachmentPost) | **POST** /purchases/{id}/attachment | Add Attachment to receiving inventory document.
*ReceivingInventoryApi* | [**purchasesIdDelete**](docs/ReceivingInventoryApi.md#purchasesIdDelete) | **DELETE** /purchases/{id} | Delete receiving inventory document.
*ReceivingInventoryApi* | [**purchasesIdGet**](docs/ReceivingInventoryApi.md#purchasesIdGet) | **GET** /purchases/{id} | Get receiving inventory document.
*ReceivingInventoryApi* | [**purchasesIdPaymentPost**](docs/ReceivingInventoryApi.md#purchasesIdPaymentPost) | **POST** /purchases/{id}/payment | Change paid status of receiving inventory document.
*ReceivingInventoryApi* | [**purchasesIdPut**](docs/ReceivingInventoryApi.md#purchasesIdPut) | **PUT** /purchases/{id} | Edit receiving inventory document.
*ReceivingInventoryApi* | [**purchasesIdStatusStatusIdPost**](docs/ReceivingInventoryApi.md#purchasesIdStatusStatusIdPost) | **POST** /purchases/{id}/status/{statusId} | Change status of receiving inventory document.
*ReceivingInventoryApi* | [**purchasesInlinePost**](docs/ReceivingInventoryApi.md#purchasesInlinePost) | **POST** /purchases/inline | Create receiving inventory document with discount and tax inline.
*ReceivingInventoryApi* | [**purchasesInlineWithPaymentPost**](docs/ReceivingInventoryApi.md#purchasesInlineWithPaymentPost) | **POST** /purchases/inline/with-payment | Create receiving inventory document with discount and tax inline with payment.
*ReceivingInventoryApi* | [**purchasesPost**](docs/ReceivingInventoryApi.md#purchasesPost) | **POST** /purchases | Create receiving inventory document.
*ReceivingInventoryApi* | [**purchasesSharedocumentPost**](docs/ReceivingInventoryApi.md#purchasesSharedocumentPost) | **POST** /purchases/sharedocument | Share link receiving inventory document.
*ReceivingInventoryApi* | [**purchasesWithPaymentPost**](docs/ReceivingInventoryApi.md#purchasesWithPaymentPost) | **POST** /purchases/with-payment | Create receiving inventory document with payment.
*TaxInvoiceApi* | [**taxInvoicesEmailDocumentPost**](docs/TaxInvoiceApi.md#taxInvoicesEmailDocumentPost) | **POST** /tax-invoices/email-document | Send Email tax invoice document
*TaxInvoiceApi* | [**taxInvoicesGet**](docs/TaxInvoiceApi.md#taxInvoicesGet) | **GET** /tax-invoices | Get list all tax invocie documents.
*TaxInvoiceApi* | [**taxInvoicesIdAttachmentPost**](docs/TaxInvoiceApi.md#taxInvoicesIdAttachmentPost) | **POST** /tax-invoices/{id}/attachment | Add Attachment to tax Invoices document.
*TaxInvoiceApi* | [**taxInvoicesIdDelete**](docs/TaxInvoiceApi.md#taxInvoicesIdDelete) | **DELETE** /tax-invoices/{id} | Delete tax invoices document.
*TaxInvoiceApi* | [**taxInvoicesIdGet**](docs/TaxInvoiceApi.md#taxInvoicesIdGet) | **GET** /tax-invoices/{id} | Get tax invoices document.
*TaxInvoiceApi* | [**taxInvoicesIdPaymentPost**](docs/TaxInvoiceApi.md#taxInvoicesIdPaymentPost) | **POST** /tax-invoices/{id}/payment | Change paid status of tax-invoice document.
*TaxInvoiceApi* | [**taxInvoicesIdPut**](docs/TaxInvoiceApi.md#taxInvoicesIdPut) | **PUT** /tax-invoices/{id} | Edit tax invoices document.
*TaxInvoiceApi* | [**taxInvoicesIdStatusStatusIdPost**](docs/TaxInvoiceApi.md#taxInvoicesIdStatusStatusIdPost) | **POST** /tax-invoices/{id}/status/{statusId} | Change status of tax invoices document.
*TaxInvoiceApi* | [**taxInvoicesInlinePost**](docs/TaxInvoiceApi.md#taxInvoicesInlinePost) | **POST** /tax-invoices/inline | Create tax invocie document with discount and tax inline.
*TaxInvoiceApi* | [**taxInvoicesInlineWithPaymentPost**](docs/TaxInvoiceApi.md#taxInvoicesInlineWithPaymentPost) | **POST** /tax-invoices/inline/with-payment | Create tax invocie document with discount and tax inline with payment.
*TaxInvoiceApi* | [**taxInvoicesPost**](docs/TaxInvoiceApi.md#taxInvoicesPost) | **POST** /tax-invoices | Create tax invocie document.
*TaxInvoiceApi* | [**taxInvoicesSharedocumentPost**](docs/TaxInvoiceApi.md#taxInvoicesSharedocumentPost) | **POST** /tax-invoices/sharedocument | Share link tax invoice document.
*TaxInvoiceApi* | [**taxInvoicesWithPaymentPost**](docs/TaxInvoiceApi.md#taxInvoicesWithPaymentPost) | **POST** /tax-invoices/with-payment | Create tax invocie document with payment.
*WithholdingTaxApi* | [**withholdingTaxesEmailDocumentPost**](docs/WithholdingTaxApi.md#withholdingTaxesEmailDocumentPost) | **POST** /withholding-taxes/email-document | Send email withholding tax document.
*WithholdingTaxApi* | [**withholdingTaxesGet**](docs/WithholdingTaxApi.md#withholdingTaxesGet) | **GET** /withholding-taxes | Get list all withholding tax documents.
*WithholdingTaxApi* | [**withholdingTaxesIdAttachmentPost**](docs/WithholdingTaxApi.md#withholdingTaxesIdAttachmentPost) | **POST** /withholding-taxes/{id}/attachment | Add Attachment to expenses.
*WithholdingTaxApi* | [**withholdingTaxesIdDelete**](docs/WithholdingTaxApi.md#withholdingTaxesIdDelete) | **DELETE** /withholding-taxes/{id} | Delete withholding tax document.
*WithholdingTaxApi* | [**withholdingTaxesIdGet**](docs/WithholdingTaxApi.md#withholdingTaxesIdGet) | **GET** /withholding-taxes/{id} | Get withholding tax document.
*WithholdingTaxApi* | [**withholdingTaxesIdPut**](docs/WithholdingTaxApi.md#withholdingTaxesIdPut) | **PUT** /withholding-taxes/{id} | Edit withholding tax document.
*WithholdingTaxApi* | [**withholdingTaxesIdStatusStatusIdPost**](docs/WithholdingTaxApi.md#withholdingTaxesIdStatusStatusIdPost) | **POST** /withholding-taxes/{id}/status/{statusId} | Change status of withholding tax document.
*WithholdingTaxApi* | [**withholdingTaxesPost**](docs/WithholdingTaxApi.md#withholdingTaxesPost) | **POST** /withholding-taxes | Create withholding tax document.
*WithholdingTaxApi* | [**withholdingTaxesSharedocumentPost**](docs/WithholdingTaxApi.md#withholdingTaxesSharedocumentPost) | **POST** /withholding-taxes/sharedocument | Share link withholding tax documents.


## Documentation for Models

 - [AllBankAccountResponse](docs/AllBankAccountResponse.md)
 - [AllDocumentResponse](docs/AllDocumentResponse.md)
 - [AllDocumentResponseData](docs/AllDocumentResponseData.md)
 - [AllExpenseDocumentResponse](docs/AllExpenseDocumentResponse.md)
 - [AllExpenseDocumentResponseData](docs/AllExpenseDocumentResponseData.md)
 - [AllWithholidingTaxDocumentResponse](docs/AllWithholidingTaxDocumentResponse.md)
 - [AllWithholidingTaxDocumentResponseData](docs/AllWithholidingTaxDocumentResponseData.md)
 - [AttachmentResponse](docs/AttachmentResponse.md)
 - [AttachmentResponseData](docs/AttachmentResponseData.md)
 - [AuthenResponse](docs/AuthenResponse.md)
 - [BankAccount](docs/BankAccount.md)
 - [BankAccountResponse](docs/BankAccountResponse.md)
 - [BankAccountResponseData](docs/BankAccountResponseData.md)
 - [BusinessCategory](docs/BusinessCategory.md)
 - [CompanyInfo](docs/CompanyInfo.md)
 - [CompanyInfoResponse](docs/CompanyInfoResponse.md)
 - [CompanyInfoResponseData](docs/CompanyInfoResponseData.md)
 - [Contact](docs/Contact.md)
 - [ContactResponse](docs/ContactResponse.md)
 - [ContactResponseData](docs/ContactResponseData.md)
 - [DeleteResponse](docs/DeleteResponse.md)
 - [DeleteResponseData](docs/DeleteResponseData.md)
 - [Document](docs/Document.md)
 - [DocumentResponse](docs/DocumentResponse.md)
 - [ExpenseDocument](docs/ExpenseDocument.md)
 - [ExpenseInlineDocument](docs/ExpenseInlineDocument.md)
 - [ExpenseInlineDocumentAllOf](docs/ExpenseInlineDocumentAllOf.md)
 - [ExpenseInlineDocumentResponse](docs/ExpenseInlineDocumentResponse.md)
 - [ExpenseInlineDocumentResponseAllOf](docs/ExpenseInlineDocumentResponseAllOf.md)
 - [ExpenseInlineDocumentResponseAllOfData](docs/ExpenseInlineDocumentResponseAllOfData.md)
 - [ExpenseInlineDocumentWithPaymentPaid](docs/ExpenseInlineDocumentWithPaymentPaid.md)
 - [ExpenseInlineDocumentWithPaymentPaidCash](docs/ExpenseInlineDocumentWithPaymentPaidCash.md)
 - [ExpenseInlineDocumentWithPaymentPaidCheque](docs/ExpenseInlineDocumentWithPaymentPaidCheque.md)
 - [ExpenseInlineDocumentWithPaymentPaidCreditCard](docs/ExpenseInlineDocumentWithPaymentPaidCreditCard.md)
 - [ExpenseInlineDocumentWithPaymentPaidTransfer](docs/ExpenseInlineDocumentWithPaymentPaidTransfer.md)
 - [ExpenseInlineProductItem](docs/ExpenseInlineProductItem.md)
 - [ExpenseResponse](docs/ExpenseResponse.md)
 - [ExpenseSimpleDocument](docs/ExpenseSimpleDocument.md)
 - [ExpenseSimpleDocumentAllOf](docs/ExpenseSimpleDocumentAllOf.md)
 - [ExpenseSimpleDocumentResponse](docs/ExpenseSimpleDocumentResponse.md)
 - [ExpenseSimpleDocumentResponseAllOf](docs/ExpenseSimpleDocumentResponseAllOf.md)
 - [ExpenseSimpleDocumentResponseAllOfData](docs/ExpenseSimpleDocumentResponseAllOfData.md)
 - [ExpenseSimpleDocumentWithPaymentPaid](docs/ExpenseSimpleDocumentWithPaymentPaid.md)
 - [ExpenseSimpleDocumentWithPaymentPaidCash](docs/ExpenseSimpleDocumentWithPaymentPaidCash.md)
 - [ExpenseSimpleDocumentWithPaymentPaidCheque](docs/ExpenseSimpleDocumentWithPaymentPaidCheque.md)
 - [ExpenseSimpleDocumentWithPaymentPaidCreditCard](docs/ExpenseSimpleDocumentWithPaymentPaidCreditCard.md)
 - [ExpenseSimpleDocumentWithPaymentPaidTransfer](docs/ExpenseSimpleDocumentWithPaymentPaidTransfer.md)
 - [ExpenseSimpleProductItem](docs/ExpenseSimpleProductItem.md)
 - [InlineDocument](docs/InlineDocument.md)
 - [InlineDocumentAllOf](docs/InlineDocumentAllOf.md)
 - [InlineDocumentResponse](docs/InlineDocumentResponse.md)
 - [InlineDocumentResponseAllOf](docs/InlineDocumentResponseAllOf.md)
 - [InlineDocumentResponseAllOfData](docs/InlineDocumentResponseAllOfData.md)
 - [InlineDocumentWithPaymentPaid](docs/InlineDocumentWithPaymentPaid.md)
 - [InlineDocumentWithPaymentPaidCash](docs/InlineDocumentWithPaymentPaidCash.md)
 - [InlineDocumentWithPaymentPaidCheque](docs/InlineDocumentWithPaymentPaidCheque.md)
 - [InlineDocumentWithPaymentPaidCreditCard](docs/InlineDocumentWithPaymentPaidCreditCard.md)
 - [InlineDocumentWithPaymentPaidTransfer](docs/InlineDocumentWithPaymentPaidTransfer.md)
 - [InlineDocumentWithPaymentReceiving](docs/InlineDocumentWithPaymentReceiving.md)
 - [InlineDocumentWithPaymentReceivingCash](docs/InlineDocumentWithPaymentReceivingCash.md)
 - [InlineDocumentWithPaymentReceivingCheque](docs/InlineDocumentWithPaymentReceivingCheque.md)
 - [InlineDocumentWithPaymentReceivingCreditCard](docs/InlineDocumentWithPaymentReceivingCreditCard.md)
 - [InlineDocumentWithPaymentReceivingTransfer](docs/InlineDocumentWithPaymentReceivingTransfer.md)
 - [InlineObject](docs/InlineObject.md)
 - [InlineObject1](docs/InlineObject1.md)
 - [InlineObject2](docs/InlineObject2.md)
 - [InlineObject3](docs/InlineObject3.md)
 - [InlineObject4](docs/InlineObject4.md)
 - [InlineObject5](docs/InlineObject5.md)
 - [InlineObject6](docs/InlineObject6.md)
 - [InlineObject7](docs/InlineObject7.md)
 - [InlineObject8](docs/InlineObject8.md)
 - [InlineObject9](docs/InlineObject9.md)
 - [InlineProductItem](docs/InlineProductItem.md)
 - [InlineProductItemAllOf](docs/InlineProductItemAllOf.md)
 - [PaymentPaidCash](docs/PaymentPaidCash.md)
 - [PaymentPaidCheque](docs/PaymentPaidCheque.md)
 - [PaymentPaidCreditCard](docs/PaymentPaidCreditCard.md)
 - [PaymentPaidDocument](docs/PaymentPaidDocument.md)
 - [PaymentPaidTransfer](docs/PaymentPaidTransfer.md)
 - [PaymentReceivingCash](docs/PaymentReceivingCash.md)
 - [PaymentReceivingCheque](docs/PaymentReceivingCheque.md)
 - [PaymentReceivingCreditCard](docs/PaymentReceivingCreditCard.md)
 - [PaymentReceivingDocument](docs/PaymentReceivingDocument.md)
 - [PaymentReceivingTransfer](docs/PaymentReceivingTransfer.md)
 - [Product](docs/Product.md)
 - [ProductInventory](docs/ProductInventory.md)
 - [ProductInventoryBalance](docs/ProductInventoryBalance.md)
 - [ProductItem](docs/ProductItem.md)
 - [ProductNonInventory](docs/ProductNonInventory.md)
 - [ProductResponse](docs/ProductResponse.md)
 - [ProductResponseData](docs/ProductResponseData.md)
 - [ProductService](docs/ProductService.md)
 - [ProductType](docs/ProductType.md)
 - [ReferencedByMe](docs/ReferencedByMe.md)
 - [ReferencedToMe](docs/ReferencedToMe.md)
 - [SendEmail](docs/SendEmail.md)
 - [SendEmailCoppies](docs/SendEmailCoppies.md)
 - [SendEmailCoppiesAllOf](docs/SendEmailCoppiesAllOf.md)
 - [SendEmailResponse](docs/SendEmailResponse.md)
 - [SendEmailResponseData](docs/SendEmailResponseData.md)
 - [SendEmailSimple](docs/SendEmailSimple.md)
 - [ShareDocument](docs/ShareDocument.md)
 - [ShareDocumentResponse](docs/ShareDocumentResponse.md)
 - [ShareDocumentResponseData](docs/ShareDocumentResponseData.md)
 - [SimpleDocument](docs/SimpleDocument.md)
 - [SimpleDocumentAllOf](docs/SimpleDocumentAllOf.md)
 - [SimpleDocumentResponse](docs/SimpleDocumentResponse.md)
 - [SimpleDocumentResponseAllOf](docs/SimpleDocumentResponseAllOf.md)
 - [SimpleDocumentResponseAllOfData](docs/SimpleDocumentResponseAllOfData.md)
 - [SimpleDocumentResponseAllOfDataCompany](docs/SimpleDocumentResponseAllOfDataCompany.md)
 - [SimpleDocumentResponseAllOfDataPayments](docs/SimpleDocumentResponseAllOfDataPayments.md)
 - [SimpleDocumentWithPaymentPaid](docs/SimpleDocumentWithPaymentPaid.md)
 - [SimpleDocumentWithPaymentPaidCash](docs/SimpleDocumentWithPaymentPaidCash.md)
 - [SimpleDocumentWithPaymentPaidCheque](docs/SimpleDocumentWithPaymentPaidCheque.md)
 - [SimpleDocumentWithPaymentPaidCreditCard](docs/SimpleDocumentWithPaymentPaidCreditCard.md)
 - [SimpleDocumentWithPaymentPaidTransfer](docs/SimpleDocumentWithPaymentPaidTransfer.md)
 - [SimpleDocumentWithPaymentReceiving](docs/SimpleDocumentWithPaymentReceiving.md)
 - [SimpleDocumentWithPaymentReceivingCash](docs/SimpleDocumentWithPaymentReceivingCash.md)
 - [SimpleDocumentWithPaymentReceivingCheque](docs/SimpleDocumentWithPaymentReceivingCheque.md)
 - [SimpleDocumentWithPaymentReceivingCreditCard](docs/SimpleDocumentWithPaymentReceivingCreditCard.md)
 - [SimpleDocumentWithPaymentReceivingTransfer](docs/SimpleDocumentWithPaymentReceivingTransfer.md)
 - [SimpleProductItem](docs/SimpleProductItem.md)
 - [StatusDocument](docs/StatusDocument.md)
 - [UpdateDocument](docs/UpdateDocument.md)
 - [UpdateExpenseDocument](docs/UpdateExpenseDocument.md)
 - [UpdateExpenseInlineDocument](docs/UpdateExpenseInlineDocument.md)
 - [UpdateExpenseSimpleDocument](docs/UpdateExpenseSimpleDocument.md)
 - [UpdateInlineDocument](docs/UpdateInlineDocument.md)
 - [UpdateSimpleDocument](docs/UpdateSimpleDocument.md)
 - [UpdateWithholidingTaxDocument](docs/UpdateWithholidingTaxDocument.md)
 - [UpgradeDocument](docs/UpgradeDocument.md)
 - [WithholidingTaxDocument](docs/WithholidingTaxDocument.md)
 - [WithholidingTaxDocumentResponse](docs/WithholidingTaxDocumentResponse.md)
 - [WithholidingTaxDocumentResponseData](docs/WithholidingTaxDocumentResponseData.md)
 - [WithholidingTaxItem](docs/WithholidingTaxItem.md)


## Documentation for Authorization

All endpoints do not require authorization.
Authentication schemes defined for the API:

## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issues.

## Author

developer_support@flowaccount.com

