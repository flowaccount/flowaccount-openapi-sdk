/**
 * FlowAccount Open API
 * # Introduction  **Servers Production**    <site>Site:</site> https://www.flowaccount.com    <site>Api url:</site> https://openapi.flowaccount.com/v1    **Beta test**   <site>Site:</site> http://sandbox-new.flowaccount.com/    <site>Api url:</site> https://openapi.flowaccount.com/test    **PostMan Collection**   <site>Link:</site> https://www.getpostman.com/collections/01e7c68d7093e2092a64
 *
 * The version of the OpenAPI document: 2-oas3
 * Contact: developer_support@flowaccount.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AllBankAccountResponse from './model/AllBankAccountResponse';
import AllDocumentResponse from './model/AllDocumentResponse';
import AllDocumentResponseData from './model/AllDocumentResponseData';
import AllExpenseDocumentResponse from './model/AllExpenseDocumentResponse';
import AllExpenseDocumentResponseData from './model/AllExpenseDocumentResponseData';
import AllWithholidingTaxDocumentResponse from './model/AllWithholidingTaxDocumentResponse';
import AllWithholidingTaxDocumentResponseData from './model/AllWithholidingTaxDocumentResponseData';
import AttachmentResponse from './model/AttachmentResponse';
import AttachmentResponseData from './model/AttachmentResponseData';
import AuthenResponse from './model/AuthenResponse';
import BankAccount from './model/BankAccount';
import BankAccountResponse from './model/BankAccountResponse';
import BankAccountResponseData from './model/BankAccountResponseData';
import BusinessCategory from './model/BusinessCategory';
import CompanyInfo from './model/CompanyInfo';
import CompanyInfoResponse from './model/CompanyInfoResponse';
import CompanyInfoResponseData from './model/CompanyInfoResponseData';
import Contact from './model/Contact';
import ContactResponse from './model/ContactResponse';
import ContactResponseData from './model/ContactResponseData';
import DeleteResponse from './model/DeleteResponse';
import DeleteResponseData from './model/DeleteResponseData';
import Document from './model/Document';
import DocumentResponse from './model/DocumentResponse';
import ExpenseDocument from './model/ExpenseDocument';
import ExpenseInlineDocument from './model/ExpenseInlineDocument';
import ExpenseInlineDocumentAllOf from './model/ExpenseInlineDocumentAllOf';
import ExpenseInlineDocumentResponse from './model/ExpenseInlineDocumentResponse';
import ExpenseInlineDocumentResponseAllOf from './model/ExpenseInlineDocumentResponseAllOf';
import ExpenseInlineDocumentResponseAllOfData from './model/ExpenseInlineDocumentResponseAllOfData';
import ExpenseInlineDocumentWithPaymentPaid from './model/ExpenseInlineDocumentWithPaymentPaid';
import ExpenseInlineDocumentWithPaymentPaidCash from './model/ExpenseInlineDocumentWithPaymentPaidCash';
import ExpenseInlineDocumentWithPaymentPaidCheque from './model/ExpenseInlineDocumentWithPaymentPaidCheque';
import ExpenseInlineDocumentWithPaymentPaidCreditCard from './model/ExpenseInlineDocumentWithPaymentPaidCreditCard';
import ExpenseInlineDocumentWithPaymentPaidTransfer from './model/ExpenseInlineDocumentWithPaymentPaidTransfer';
import ExpenseInlineProductItem from './model/ExpenseInlineProductItem';
import ExpenseResponse from './model/ExpenseResponse';
import ExpenseSimpleDocument from './model/ExpenseSimpleDocument';
import ExpenseSimpleDocumentAllOf from './model/ExpenseSimpleDocumentAllOf';
import ExpenseSimpleDocumentResponse from './model/ExpenseSimpleDocumentResponse';
import ExpenseSimpleDocumentResponseAllOf from './model/ExpenseSimpleDocumentResponseAllOf';
import ExpenseSimpleDocumentResponseAllOfData from './model/ExpenseSimpleDocumentResponseAllOfData';
import ExpenseSimpleDocumentWithPaymentPaid from './model/ExpenseSimpleDocumentWithPaymentPaid';
import ExpenseSimpleDocumentWithPaymentPaidCash from './model/ExpenseSimpleDocumentWithPaymentPaidCash';
import ExpenseSimpleDocumentWithPaymentPaidCheque from './model/ExpenseSimpleDocumentWithPaymentPaidCheque';
import ExpenseSimpleDocumentWithPaymentPaidCreditCard from './model/ExpenseSimpleDocumentWithPaymentPaidCreditCard';
import ExpenseSimpleDocumentWithPaymentPaidTransfer from './model/ExpenseSimpleDocumentWithPaymentPaidTransfer';
import ExpenseSimpleProductItem from './model/ExpenseSimpleProductItem';
import InlineDocument from './model/InlineDocument';
import InlineDocumentAllOf from './model/InlineDocumentAllOf';
import InlineDocumentResponse from './model/InlineDocumentResponse';
import InlineDocumentResponseAllOf from './model/InlineDocumentResponseAllOf';
import InlineDocumentResponseAllOfData from './model/InlineDocumentResponseAllOfData';
import InlineDocumentWithPaymentPaid from './model/InlineDocumentWithPaymentPaid';
import InlineDocumentWithPaymentPaidCash from './model/InlineDocumentWithPaymentPaidCash';
import InlineDocumentWithPaymentPaidCheque from './model/InlineDocumentWithPaymentPaidCheque';
import InlineDocumentWithPaymentPaidCreditCard from './model/InlineDocumentWithPaymentPaidCreditCard';
import InlineDocumentWithPaymentPaidTransfer from './model/InlineDocumentWithPaymentPaidTransfer';
import InlineDocumentWithPaymentReceiving from './model/InlineDocumentWithPaymentReceiving';
import InlineDocumentWithPaymentReceivingCash from './model/InlineDocumentWithPaymentReceivingCash';
import InlineDocumentWithPaymentReceivingCheque from './model/InlineDocumentWithPaymentReceivingCheque';
import InlineDocumentWithPaymentReceivingCreditCard from './model/InlineDocumentWithPaymentReceivingCreditCard';
import InlineDocumentWithPaymentReceivingTransfer from './model/InlineDocumentWithPaymentReceivingTransfer';
import InlineObject from './model/InlineObject';
import InlineObject1 from './model/InlineObject1';
import InlineObject2 from './model/InlineObject2';
import InlineObject3 from './model/InlineObject3';
import InlineObject4 from './model/InlineObject4';
import InlineObject5 from './model/InlineObject5';
import InlineObject6 from './model/InlineObject6';
import InlineObject7 from './model/InlineObject7';
import InlineObject8 from './model/InlineObject8';
import InlineObject9 from './model/InlineObject9';
import InlineProductItem from './model/InlineProductItem';
import InlineProductItemAllOf from './model/InlineProductItemAllOf';
import PaymentPaidCash from './model/PaymentPaidCash';
import PaymentPaidCheque from './model/PaymentPaidCheque';
import PaymentPaidCreditCard from './model/PaymentPaidCreditCard';
import PaymentPaidDocument from './model/PaymentPaidDocument';
import PaymentPaidTransfer from './model/PaymentPaidTransfer';
import PaymentReceivingCash from './model/PaymentReceivingCash';
import PaymentReceivingCheque from './model/PaymentReceivingCheque';
import PaymentReceivingCreditCard from './model/PaymentReceivingCreditCard';
import PaymentReceivingDocument from './model/PaymentReceivingDocument';
import PaymentReceivingTransfer from './model/PaymentReceivingTransfer';
import Product from './model/Product';
import ProductInventory from './model/ProductInventory';
import ProductInventoryBalance from './model/ProductInventoryBalance';
import ProductItem from './model/ProductItem';
import ProductNonInventory from './model/ProductNonInventory';
import ProductResponse from './model/ProductResponse';
import ProductResponseData from './model/ProductResponseData';
import ProductService from './model/ProductService';
import ProductType from './model/ProductType';
import ReferencedByMe from './model/ReferencedByMe';
import ReferencedToMe from './model/ReferencedToMe';
import SendEmail from './model/SendEmail';
import SendEmailCoppies from './model/SendEmailCoppies';
import SendEmailCoppiesAllOf from './model/SendEmailCoppiesAllOf';
import SendEmailResponse from './model/SendEmailResponse';
import SendEmailResponseData from './model/SendEmailResponseData';
import SendEmailSimple from './model/SendEmailSimple';
import ShareDocument from './model/ShareDocument';
import ShareDocumentResponse from './model/ShareDocumentResponse';
import ShareDocumentResponseData from './model/ShareDocumentResponseData';
import SimpleDocument from './model/SimpleDocument';
import SimpleDocumentAllOf from './model/SimpleDocumentAllOf';
import SimpleDocumentResponse from './model/SimpleDocumentResponse';
import SimpleDocumentResponseAllOf from './model/SimpleDocumentResponseAllOf';
import SimpleDocumentResponseAllOfData from './model/SimpleDocumentResponseAllOfData';
import SimpleDocumentResponseAllOfDataCompany from './model/SimpleDocumentResponseAllOfDataCompany';
import SimpleDocumentResponseAllOfDataPayments from './model/SimpleDocumentResponseAllOfDataPayments';
import SimpleDocumentWithPaymentPaid from './model/SimpleDocumentWithPaymentPaid';
import SimpleDocumentWithPaymentPaidCash from './model/SimpleDocumentWithPaymentPaidCash';
import SimpleDocumentWithPaymentPaidCheque from './model/SimpleDocumentWithPaymentPaidCheque';
import SimpleDocumentWithPaymentPaidCreditCard from './model/SimpleDocumentWithPaymentPaidCreditCard';
import SimpleDocumentWithPaymentPaidTransfer from './model/SimpleDocumentWithPaymentPaidTransfer';
import SimpleDocumentWithPaymentReceiving from './model/SimpleDocumentWithPaymentReceiving';
import SimpleDocumentWithPaymentReceivingCash from './model/SimpleDocumentWithPaymentReceivingCash';
import SimpleDocumentWithPaymentReceivingCheque from './model/SimpleDocumentWithPaymentReceivingCheque';
import SimpleDocumentWithPaymentReceivingCreditCard from './model/SimpleDocumentWithPaymentReceivingCreditCard';
import SimpleDocumentWithPaymentReceivingTransfer from './model/SimpleDocumentWithPaymentReceivingTransfer';
import SimpleProductItem from './model/SimpleProductItem';
import StatusDocument from './model/StatusDocument';
import UpdateDocument from './model/UpdateDocument';
import UpdateExpenseDocument from './model/UpdateExpenseDocument';
import UpdateExpenseInlineDocument from './model/UpdateExpenseInlineDocument';
import UpdateExpenseSimpleDocument from './model/UpdateExpenseSimpleDocument';
import UpdateInlineDocument from './model/UpdateInlineDocument';
import UpdateSimpleDocument from './model/UpdateSimpleDocument';
import UpdateWithholidingTaxDocument from './model/UpdateWithholidingTaxDocument';
import UpgradeDocument from './model/UpgradeDocument';
import WithholidingTaxDocument from './model/WithholidingTaxDocument';
import WithholidingTaxDocumentResponse from './model/WithholidingTaxDocumentResponse';
import WithholidingTaxDocumentResponseData from './model/WithholidingTaxDocumentResponseData';
import WithholidingTaxItem from './model/WithholidingTaxItem';
import AuthenticationApi from './api/AuthenticationApi';
import BankAccountApi from './api/BankAccountApi';
import BillingNotesApi from './api/BillingNotesApi';
import BusinessInfomationApi from './api/BusinessInfomationApi';
import CashInvoiceApi from './api/CashInvoiceApi';
import ContactsApi from './api/ContactsApi';
import ExpensesApi from './api/ExpensesApi';
import ProductsApi from './api/ProductsApi';
import PurchaseOrderApi from './api/PurchaseOrderApi';
import QuotationsApi from './api/QuotationsApi';
import ReceiptApi from './api/ReceiptApi';
import ReceivingInventoryApi from './api/ReceivingInventoryApi';
import TaxInvoiceApi from './api/TaxInvoiceApi';
import WithholdingTaxApi from './api/WithholdingTaxApi';


/**
* _Introduction_Servers_Production__siteSite_site_https__www_flowaccount_com__siteApi_url_site_https__openapi_flowaccount_com_v1__Beta_test_siteSite_site_http__sandbox_new_flowaccount_com___siteApi_url_site_https__openapi_flowaccount_com_test__PostMan_Collection_siteLink_site_https__www_getpostman_com_collections_01e7c68d7093e2092a64.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var FlowAccountOpenApi = require('index'); // See note below*.
* var xxxSvc = new FlowAccountOpenApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new FlowAccountOpenApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new FlowAccountOpenApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new FlowAccountOpenApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2-oas3
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AllBankAccountResponse model constructor.
     * @property {module:model/AllBankAccountResponse}
     */
    AllBankAccountResponse,

    /**
     * The AllDocumentResponse model constructor.
     * @property {module:model/AllDocumentResponse}
     */
    AllDocumentResponse,

    /**
     * The AllDocumentResponseData model constructor.
     * @property {module:model/AllDocumentResponseData}
     */
    AllDocumentResponseData,

    /**
     * The AllExpenseDocumentResponse model constructor.
     * @property {module:model/AllExpenseDocumentResponse}
     */
    AllExpenseDocumentResponse,

    /**
     * The AllExpenseDocumentResponseData model constructor.
     * @property {module:model/AllExpenseDocumentResponseData}
     */
    AllExpenseDocumentResponseData,

    /**
     * The AllWithholidingTaxDocumentResponse model constructor.
     * @property {module:model/AllWithholidingTaxDocumentResponse}
     */
    AllWithholidingTaxDocumentResponse,

    /**
     * The AllWithholidingTaxDocumentResponseData model constructor.
     * @property {module:model/AllWithholidingTaxDocumentResponseData}
     */
    AllWithholidingTaxDocumentResponseData,

    /**
     * The AttachmentResponse model constructor.
     * @property {module:model/AttachmentResponse}
     */
    AttachmentResponse,

    /**
     * The AttachmentResponseData model constructor.
     * @property {module:model/AttachmentResponseData}
     */
    AttachmentResponseData,

    /**
     * The AuthenResponse model constructor.
     * @property {module:model/AuthenResponse}
     */
    AuthenResponse,

    /**
     * The BankAccount model constructor.
     * @property {module:model/BankAccount}
     */
    BankAccount,

    /**
     * The BankAccountResponse model constructor.
     * @property {module:model/BankAccountResponse}
     */
    BankAccountResponse,

    /**
     * The BankAccountResponseData model constructor.
     * @property {module:model/BankAccountResponseData}
     */
    BankAccountResponseData,

    /**
     * The BusinessCategory model constructor.
     * @property {module:model/BusinessCategory}
     */
    BusinessCategory,

    /**
     * The CompanyInfo model constructor.
     * @property {module:model/CompanyInfo}
     */
    CompanyInfo,

    /**
     * The CompanyInfoResponse model constructor.
     * @property {module:model/CompanyInfoResponse}
     */
    CompanyInfoResponse,

    /**
     * The CompanyInfoResponseData model constructor.
     * @property {module:model/CompanyInfoResponseData}
     */
    CompanyInfoResponseData,

    /**
     * The Contact model constructor.
     * @property {module:model/Contact}
     */
    Contact,

    /**
     * The ContactResponse model constructor.
     * @property {module:model/ContactResponse}
     */
    ContactResponse,

    /**
     * The ContactResponseData model constructor.
     * @property {module:model/ContactResponseData}
     */
    ContactResponseData,

    /**
     * The DeleteResponse model constructor.
     * @property {module:model/DeleteResponse}
     */
    DeleteResponse,

    /**
     * The DeleteResponseData model constructor.
     * @property {module:model/DeleteResponseData}
     */
    DeleteResponseData,

    /**
     * The Document model constructor.
     * @property {module:model/Document}
     */
    Document,

    /**
     * The DocumentResponse model constructor.
     * @property {module:model/DocumentResponse}
     */
    DocumentResponse,

    /**
     * The ExpenseDocument model constructor.
     * @property {module:model/ExpenseDocument}
     */
    ExpenseDocument,

    /**
     * The ExpenseInlineDocument model constructor.
     * @property {module:model/ExpenseInlineDocument}
     */
    ExpenseInlineDocument,

    /**
     * The ExpenseInlineDocumentAllOf model constructor.
     * @property {module:model/ExpenseInlineDocumentAllOf}
     */
    ExpenseInlineDocumentAllOf,

    /**
     * The ExpenseInlineDocumentResponse model constructor.
     * @property {module:model/ExpenseInlineDocumentResponse}
     */
    ExpenseInlineDocumentResponse,

    /**
     * The ExpenseInlineDocumentResponseAllOf model constructor.
     * @property {module:model/ExpenseInlineDocumentResponseAllOf}
     */
    ExpenseInlineDocumentResponseAllOf,

    /**
     * The ExpenseInlineDocumentResponseAllOfData model constructor.
     * @property {module:model/ExpenseInlineDocumentResponseAllOfData}
     */
    ExpenseInlineDocumentResponseAllOfData,

    /**
     * The ExpenseInlineDocumentWithPaymentPaid model constructor.
     * @property {module:model/ExpenseInlineDocumentWithPaymentPaid}
     */
    ExpenseInlineDocumentWithPaymentPaid,

    /**
     * The ExpenseInlineDocumentWithPaymentPaidCash model constructor.
     * @property {module:model/ExpenseInlineDocumentWithPaymentPaidCash}
     */
    ExpenseInlineDocumentWithPaymentPaidCash,

    /**
     * The ExpenseInlineDocumentWithPaymentPaidCheque model constructor.
     * @property {module:model/ExpenseInlineDocumentWithPaymentPaidCheque}
     */
    ExpenseInlineDocumentWithPaymentPaidCheque,

    /**
     * The ExpenseInlineDocumentWithPaymentPaidCreditCard model constructor.
     * @property {module:model/ExpenseInlineDocumentWithPaymentPaidCreditCard}
     */
    ExpenseInlineDocumentWithPaymentPaidCreditCard,

    /**
     * The ExpenseInlineDocumentWithPaymentPaidTransfer model constructor.
     * @property {module:model/ExpenseInlineDocumentWithPaymentPaidTransfer}
     */
    ExpenseInlineDocumentWithPaymentPaidTransfer,

    /**
     * The ExpenseInlineProductItem model constructor.
     * @property {module:model/ExpenseInlineProductItem}
     */
    ExpenseInlineProductItem,

    /**
     * The ExpenseResponse model constructor.
     * @property {module:model/ExpenseResponse}
     */
    ExpenseResponse,

    /**
     * The ExpenseSimpleDocument model constructor.
     * @property {module:model/ExpenseSimpleDocument}
     */
    ExpenseSimpleDocument,

    /**
     * The ExpenseSimpleDocumentAllOf model constructor.
     * @property {module:model/ExpenseSimpleDocumentAllOf}
     */
    ExpenseSimpleDocumentAllOf,

    /**
     * The ExpenseSimpleDocumentResponse model constructor.
     * @property {module:model/ExpenseSimpleDocumentResponse}
     */
    ExpenseSimpleDocumentResponse,

    /**
     * The ExpenseSimpleDocumentResponseAllOf model constructor.
     * @property {module:model/ExpenseSimpleDocumentResponseAllOf}
     */
    ExpenseSimpleDocumentResponseAllOf,

    /**
     * The ExpenseSimpleDocumentResponseAllOfData model constructor.
     * @property {module:model/ExpenseSimpleDocumentResponseAllOfData}
     */
    ExpenseSimpleDocumentResponseAllOfData,

    /**
     * The ExpenseSimpleDocumentWithPaymentPaid model constructor.
     * @property {module:model/ExpenseSimpleDocumentWithPaymentPaid}
     */
    ExpenseSimpleDocumentWithPaymentPaid,

    /**
     * The ExpenseSimpleDocumentWithPaymentPaidCash model constructor.
     * @property {module:model/ExpenseSimpleDocumentWithPaymentPaidCash}
     */
    ExpenseSimpleDocumentWithPaymentPaidCash,

    /**
     * The ExpenseSimpleDocumentWithPaymentPaidCheque model constructor.
     * @property {module:model/ExpenseSimpleDocumentWithPaymentPaidCheque}
     */
    ExpenseSimpleDocumentWithPaymentPaidCheque,

    /**
     * The ExpenseSimpleDocumentWithPaymentPaidCreditCard model constructor.
     * @property {module:model/ExpenseSimpleDocumentWithPaymentPaidCreditCard}
     */
    ExpenseSimpleDocumentWithPaymentPaidCreditCard,

    /**
     * The ExpenseSimpleDocumentWithPaymentPaidTransfer model constructor.
     * @property {module:model/ExpenseSimpleDocumentWithPaymentPaidTransfer}
     */
    ExpenseSimpleDocumentWithPaymentPaidTransfer,

    /**
     * The ExpenseSimpleProductItem model constructor.
     * @property {module:model/ExpenseSimpleProductItem}
     */
    ExpenseSimpleProductItem,

    /**
     * The InlineDocument model constructor.
     * @property {module:model/InlineDocument}
     */
    InlineDocument,

    /**
     * The InlineDocumentAllOf model constructor.
     * @property {module:model/InlineDocumentAllOf}
     */
    InlineDocumentAllOf,

    /**
     * The InlineDocumentResponse model constructor.
     * @property {module:model/InlineDocumentResponse}
     */
    InlineDocumentResponse,

    /**
     * The InlineDocumentResponseAllOf model constructor.
     * @property {module:model/InlineDocumentResponseAllOf}
     */
    InlineDocumentResponseAllOf,

    /**
     * The InlineDocumentResponseAllOfData model constructor.
     * @property {module:model/InlineDocumentResponseAllOfData}
     */
    InlineDocumentResponseAllOfData,

    /**
     * The InlineDocumentWithPaymentPaid model constructor.
     * @property {module:model/InlineDocumentWithPaymentPaid}
     */
    InlineDocumentWithPaymentPaid,

    /**
     * The InlineDocumentWithPaymentPaidCash model constructor.
     * @property {module:model/InlineDocumentWithPaymentPaidCash}
     */
    InlineDocumentWithPaymentPaidCash,

    /**
     * The InlineDocumentWithPaymentPaidCheque model constructor.
     * @property {module:model/InlineDocumentWithPaymentPaidCheque}
     */
    InlineDocumentWithPaymentPaidCheque,

    /**
     * The InlineDocumentWithPaymentPaidCreditCard model constructor.
     * @property {module:model/InlineDocumentWithPaymentPaidCreditCard}
     */
    InlineDocumentWithPaymentPaidCreditCard,

    /**
     * The InlineDocumentWithPaymentPaidTransfer model constructor.
     * @property {module:model/InlineDocumentWithPaymentPaidTransfer}
     */
    InlineDocumentWithPaymentPaidTransfer,

    /**
     * The InlineDocumentWithPaymentReceiving model constructor.
     * @property {module:model/InlineDocumentWithPaymentReceiving}
     */
    InlineDocumentWithPaymentReceiving,

    /**
     * The InlineDocumentWithPaymentReceivingCash model constructor.
     * @property {module:model/InlineDocumentWithPaymentReceivingCash}
     */
    InlineDocumentWithPaymentReceivingCash,

    /**
     * The InlineDocumentWithPaymentReceivingCheque model constructor.
     * @property {module:model/InlineDocumentWithPaymentReceivingCheque}
     */
    InlineDocumentWithPaymentReceivingCheque,

    /**
     * The InlineDocumentWithPaymentReceivingCreditCard model constructor.
     * @property {module:model/InlineDocumentWithPaymentReceivingCreditCard}
     */
    InlineDocumentWithPaymentReceivingCreditCard,

    /**
     * The InlineDocumentWithPaymentReceivingTransfer model constructor.
     * @property {module:model/InlineDocumentWithPaymentReceivingTransfer}
     */
    InlineDocumentWithPaymentReceivingTransfer,

    /**
     * The InlineObject model constructor.
     * @property {module:model/InlineObject}
     */
    InlineObject,

    /**
     * The InlineObject1 model constructor.
     * @property {module:model/InlineObject1}
     */
    InlineObject1,

    /**
     * The InlineObject2 model constructor.
     * @property {module:model/InlineObject2}
     */
    InlineObject2,

    /**
     * The InlineObject3 model constructor.
     * @property {module:model/InlineObject3}
     */
    InlineObject3,

    /**
     * The InlineObject4 model constructor.
     * @property {module:model/InlineObject4}
     */
    InlineObject4,

    /**
     * The InlineObject5 model constructor.
     * @property {module:model/InlineObject5}
     */
    InlineObject5,

    /**
     * The InlineObject6 model constructor.
     * @property {module:model/InlineObject6}
     */
    InlineObject6,

    /**
     * The InlineObject7 model constructor.
     * @property {module:model/InlineObject7}
     */
    InlineObject7,

    /**
     * The InlineObject8 model constructor.
     * @property {module:model/InlineObject8}
     */
    InlineObject8,

    /**
     * The InlineObject9 model constructor.
     * @property {module:model/InlineObject9}
     */
    InlineObject9,

    /**
     * The InlineProductItem model constructor.
     * @property {module:model/InlineProductItem}
     */
    InlineProductItem,

    /**
     * The InlineProductItemAllOf model constructor.
     * @property {module:model/InlineProductItemAllOf}
     */
    InlineProductItemAllOf,

    /**
     * The PaymentPaidCash model constructor.
     * @property {module:model/PaymentPaidCash}
     */
    PaymentPaidCash,

    /**
     * The PaymentPaidCheque model constructor.
     * @property {module:model/PaymentPaidCheque}
     */
    PaymentPaidCheque,

    /**
     * The PaymentPaidCreditCard model constructor.
     * @property {module:model/PaymentPaidCreditCard}
     */
    PaymentPaidCreditCard,

    /**
     * The PaymentPaidDocument model constructor.
     * @property {module:model/PaymentPaidDocument}
     */
    PaymentPaidDocument,

    /**
     * The PaymentPaidTransfer model constructor.
     * @property {module:model/PaymentPaidTransfer}
     */
    PaymentPaidTransfer,

    /**
     * The PaymentReceivingCash model constructor.
     * @property {module:model/PaymentReceivingCash}
     */
    PaymentReceivingCash,

    /**
     * The PaymentReceivingCheque model constructor.
     * @property {module:model/PaymentReceivingCheque}
     */
    PaymentReceivingCheque,

    /**
     * The PaymentReceivingCreditCard model constructor.
     * @property {module:model/PaymentReceivingCreditCard}
     */
    PaymentReceivingCreditCard,

    /**
     * The PaymentReceivingDocument model constructor.
     * @property {module:model/PaymentReceivingDocument}
     */
    PaymentReceivingDocument,

    /**
     * The PaymentReceivingTransfer model constructor.
     * @property {module:model/PaymentReceivingTransfer}
     */
    PaymentReceivingTransfer,

    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product,

    /**
     * The ProductInventory model constructor.
     * @property {module:model/ProductInventory}
     */
    ProductInventory,

    /**
     * The ProductInventoryBalance model constructor.
     * @property {module:model/ProductInventoryBalance}
     */
    ProductInventoryBalance,

    /**
     * The ProductItem model constructor.
     * @property {module:model/ProductItem}
     */
    ProductItem,

    /**
     * The ProductNonInventory model constructor.
     * @property {module:model/ProductNonInventory}
     */
    ProductNonInventory,

    /**
     * The ProductResponse model constructor.
     * @property {module:model/ProductResponse}
     */
    ProductResponse,

    /**
     * The ProductResponseData model constructor.
     * @property {module:model/ProductResponseData}
     */
    ProductResponseData,

    /**
     * The ProductService model constructor.
     * @property {module:model/ProductService}
     */
    ProductService,

    /**
     * The ProductType model constructor.
     * @property {module:model/ProductType}
     */
    ProductType,

    /**
     * The ReferencedByMe model constructor.
     * @property {module:model/ReferencedByMe}
     */
    ReferencedByMe,

    /**
     * The ReferencedToMe model constructor.
     * @property {module:model/ReferencedToMe}
     */
    ReferencedToMe,

    /**
     * The SendEmail model constructor.
     * @property {module:model/SendEmail}
     */
    SendEmail,

    /**
     * The SendEmailCoppies model constructor.
     * @property {module:model/SendEmailCoppies}
     */
    SendEmailCoppies,

    /**
     * The SendEmailCoppiesAllOf model constructor.
     * @property {module:model/SendEmailCoppiesAllOf}
     */
    SendEmailCoppiesAllOf,

    /**
     * The SendEmailResponse model constructor.
     * @property {module:model/SendEmailResponse}
     */
    SendEmailResponse,

    /**
     * The SendEmailResponseData model constructor.
     * @property {module:model/SendEmailResponseData}
     */
    SendEmailResponseData,

    /**
     * The SendEmailSimple model constructor.
     * @property {module:model/SendEmailSimple}
     */
    SendEmailSimple,

    /**
     * The ShareDocument model constructor.
     * @property {module:model/ShareDocument}
     */
    ShareDocument,

    /**
     * The ShareDocumentResponse model constructor.
     * @property {module:model/ShareDocumentResponse}
     */
    ShareDocumentResponse,

    /**
     * The ShareDocumentResponseData model constructor.
     * @property {module:model/ShareDocumentResponseData}
     */
    ShareDocumentResponseData,

    /**
     * The SimpleDocument model constructor.
     * @property {module:model/SimpleDocument}
     */
    SimpleDocument,

    /**
     * The SimpleDocumentAllOf model constructor.
     * @property {module:model/SimpleDocumentAllOf}
     */
    SimpleDocumentAllOf,

    /**
     * The SimpleDocumentResponse model constructor.
     * @property {module:model/SimpleDocumentResponse}
     */
    SimpleDocumentResponse,

    /**
     * The SimpleDocumentResponseAllOf model constructor.
     * @property {module:model/SimpleDocumentResponseAllOf}
     */
    SimpleDocumentResponseAllOf,

    /**
     * The SimpleDocumentResponseAllOfData model constructor.
     * @property {module:model/SimpleDocumentResponseAllOfData}
     */
    SimpleDocumentResponseAllOfData,

    /**
     * The SimpleDocumentResponseAllOfDataCompany model constructor.
     * @property {module:model/SimpleDocumentResponseAllOfDataCompany}
     */
    SimpleDocumentResponseAllOfDataCompany,

    /**
     * The SimpleDocumentResponseAllOfDataPayments model constructor.
     * @property {module:model/SimpleDocumentResponseAllOfDataPayments}
     */
    SimpleDocumentResponseAllOfDataPayments,

    /**
     * The SimpleDocumentWithPaymentPaid model constructor.
     * @property {module:model/SimpleDocumentWithPaymentPaid}
     */
    SimpleDocumentWithPaymentPaid,

    /**
     * The SimpleDocumentWithPaymentPaidCash model constructor.
     * @property {module:model/SimpleDocumentWithPaymentPaidCash}
     */
    SimpleDocumentWithPaymentPaidCash,

    /**
     * The SimpleDocumentWithPaymentPaidCheque model constructor.
     * @property {module:model/SimpleDocumentWithPaymentPaidCheque}
     */
    SimpleDocumentWithPaymentPaidCheque,

    /**
     * The SimpleDocumentWithPaymentPaidCreditCard model constructor.
     * @property {module:model/SimpleDocumentWithPaymentPaidCreditCard}
     */
    SimpleDocumentWithPaymentPaidCreditCard,

    /**
     * The SimpleDocumentWithPaymentPaidTransfer model constructor.
     * @property {module:model/SimpleDocumentWithPaymentPaidTransfer}
     */
    SimpleDocumentWithPaymentPaidTransfer,

    /**
     * The SimpleDocumentWithPaymentReceiving model constructor.
     * @property {module:model/SimpleDocumentWithPaymentReceiving}
     */
    SimpleDocumentWithPaymentReceiving,

    /**
     * The SimpleDocumentWithPaymentReceivingCash model constructor.
     * @property {module:model/SimpleDocumentWithPaymentReceivingCash}
     */
    SimpleDocumentWithPaymentReceivingCash,

    /**
     * The SimpleDocumentWithPaymentReceivingCheque model constructor.
     * @property {module:model/SimpleDocumentWithPaymentReceivingCheque}
     */
    SimpleDocumentWithPaymentReceivingCheque,

    /**
     * The SimpleDocumentWithPaymentReceivingCreditCard model constructor.
     * @property {module:model/SimpleDocumentWithPaymentReceivingCreditCard}
     */
    SimpleDocumentWithPaymentReceivingCreditCard,

    /**
     * The SimpleDocumentWithPaymentReceivingTransfer model constructor.
     * @property {module:model/SimpleDocumentWithPaymentReceivingTransfer}
     */
    SimpleDocumentWithPaymentReceivingTransfer,

    /**
     * The SimpleProductItem model constructor.
     * @property {module:model/SimpleProductItem}
     */
    SimpleProductItem,

    /**
     * The StatusDocument model constructor.
     * @property {module:model/StatusDocument}
     */
    StatusDocument,

    /**
     * The UpdateDocument model constructor.
     * @property {module:model/UpdateDocument}
     */
    UpdateDocument,

    /**
     * The UpdateExpenseDocument model constructor.
     * @property {module:model/UpdateExpenseDocument}
     */
    UpdateExpenseDocument,

    /**
     * The UpdateExpenseInlineDocument model constructor.
     * @property {module:model/UpdateExpenseInlineDocument}
     */
    UpdateExpenseInlineDocument,

    /**
     * The UpdateExpenseSimpleDocument model constructor.
     * @property {module:model/UpdateExpenseSimpleDocument}
     */
    UpdateExpenseSimpleDocument,

    /**
     * The UpdateInlineDocument model constructor.
     * @property {module:model/UpdateInlineDocument}
     */
    UpdateInlineDocument,

    /**
     * The UpdateSimpleDocument model constructor.
     * @property {module:model/UpdateSimpleDocument}
     */
    UpdateSimpleDocument,

    /**
     * The UpdateWithholidingTaxDocument model constructor.
     * @property {module:model/UpdateWithholidingTaxDocument}
     */
    UpdateWithholidingTaxDocument,

    /**
     * The UpgradeDocument model constructor.
     * @property {module:model/UpgradeDocument}
     */
    UpgradeDocument,

    /**
     * The WithholidingTaxDocument model constructor.
     * @property {module:model/WithholidingTaxDocument}
     */
    WithholidingTaxDocument,

    /**
     * The WithholidingTaxDocumentResponse model constructor.
     * @property {module:model/WithholidingTaxDocumentResponse}
     */
    WithholidingTaxDocumentResponse,

    /**
     * The WithholidingTaxDocumentResponseData model constructor.
     * @property {module:model/WithholidingTaxDocumentResponseData}
     */
    WithholidingTaxDocumentResponseData,

    /**
     * The WithholidingTaxItem model constructor.
     * @property {module:model/WithholidingTaxItem}
     */
    WithholidingTaxItem,

    /**
    * The AuthenticationApi service constructor.
    * @property {module:api/AuthenticationApi}
    */
    AuthenticationApi,

    /**
    * The BankAccountApi service constructor.
    * @property {module:api/BankAccountApi}
    */
    BankAccountApi,

    /**
    * The BillingNotesApi service constructor.
    * @property {module:api/BillingNotesApi}
    */
    BillingNotesApi,

    /**
    * The BusinessInfomationApi service constructor.
    * @property {module:api/BusinessInfomationApi}
    */
    BusinessInfomationApi,

    /**
    * The CashInvoiceApi service constructor.
    * @property {module:api/CashInvoiceApi}
    */
    CashInvoiceApi,

    /**
    * The ContactsApi service constructor.
    * @property {module:api/ContactsApi}
    */
    ContactsApi,

    /**
    * The ExpensesApi service constructor.
    * @property {module:api/ExpensesApi}
    */
    ExpensesApi,

    /**
    * The ProductsApi service constructor.
    * @property {module:api/ProductsApi}
    */
    ProductsApi,

    /**
    * The PurchaseOrderApi service constructor.
    * @property {module:api/PurchaseOrderApi}
    */
    PurchaseOrderApi,

    /**
    * The QuotationsApi service constructor.
    * @property {module:api/QuotationsApi}
    */
    QuotationsApi,

    /**
    * The ReceiptApi service constructor.
    * @property {module:api/ReceiptApi}
    */
    ReceiptApi,

    /**
    * The ReceivingInventoryApi service constructor.
    * @property {module:api/ReceivingInventoryApi}
    */
    ReceivingInventoryApi,

    /**
    * The TaxInvoiceApi service constructor.
    * @property {module:api/TaxInvoiceApi}
    */
    TaxInvoiceApi,

    /**
    * The WithholdingTaxApi service constructor.
    * @property {module:api/WithholdingTaxApi}
    */
    WithholdingTaxApi
};
