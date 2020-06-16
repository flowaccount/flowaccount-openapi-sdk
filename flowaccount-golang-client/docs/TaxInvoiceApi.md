# \TaxInvoiceApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TaxInvoicesEmailDocumentPost**](TaxInvoiceApi.md#TaxInvoicesEmailDocumentPost) | **Post** /tax-invoices/email-document | Send Email tax invoice document
[**TaxInvoicesGet**](TaxInvoiceApi.md#TaxInvoicesGet) | **Get** /tax-invoices | Get list all tax invocie documents.
[**TaxInvoicesIdAttachmentPost**](TaxInvoiceApi.md#TaxInvoicesIdAttachmentPost) | **Post** /tax-invoices/{id}/attachment | Add Attachment to tax Invoices document.
[**TaxInvoicesIdDelete**](TaxInvoiceApi.md#TaxInvoicesIdDelete) | **Delete** /tax-invoices/{id} | Delete tax invoices document.
[**TaxInvoicesIdGet**](TaxInvoiceApi.md#TaxInvoicesIdGet) | **Get** /tax-invoices/{id} | Get tax invoices document.
[**TaxInvoicesIdPaymentPost**](TaxInvoiceApi.md#TaxInvoicesIdPaymentPost) | **Post** /tax-invoices/{id}/payment | Change paid status of tax-invoice document.
[**TaxInvoicesIdPut**](TaxInvoiceApi.md#TaxInvoicesIdPut) | **Put** /tax-invoices/{id} | Edit tax invoices document.
[**TaxInvoicesIdStatusStatusIdPost**](TaxInvoiceApi.md#TaxInvoicesIdStatusStatusIdPost) | **Post** /tax-invoices/{id}/status/{statusId} | Change status of tax invoices document.
[**TaxInvoicesInlinePost**](TaxInvoiceApi.md#TaxInvoicesInlinePost) | **Post** /tax-invoices/inline | Create tax invocie document with discount and tax inline.
[**TaxInvoicesInlineWithPaymentPost**](TaxInvoiceApi.md#TaxInvoicesInlineWithPaymentPost) | **Post** /tax-invoices/inline/with-payment | Create tax invocie document with discount and tax inline with payment.
[**TaxInvoicesPost**](TaxInvoiceApi.md#TaxInvoicesPost) | **Post** /tax-invoices | Create tax invocie document.
[**TaxInvoicesSharedocumentPost**](TaxInvoiceApi.md#TaxInvoicesSharedocumentPost) | **Post** /tax-invoices/sharedocument | Share link tax invoice document.
[**TaxInvoicesWithPaymentPost**](TaxInvoiceApi.md#TaxInvoicesWithPaymentPost) | **Post** /tax-invoices/with-payment | Create tax invocie document with payment.



## TaxInvoicesEmailDocumentPost

> SendEmailResponse TaxInvoicesEmailDocumentPost(ctx, authorization, sendEmailCoppies)

Send Email tax invoice document

ส่งเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**sendEmailCoppies** | [**SendEmailCoppies**](SendEmailCoppies.md)|  | 

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TaxInvoicesGet

> AllDocumentResponse TaxInvoicesGet(ctx, currentPage, pageSize, authorization, optional)

Get list all tax invocie documents.

เรียกดูข้อมูลเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ทั้งหมดในระบบ

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**currentPage** | **int32**| Query current page document tax invoices. &lt;br&gt;Example Pattern: &lt;ex&gt;/tax-invoices?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/tax-invoices?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
**pageSize** | **int32**| Query document tax invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /tax-invoices?pageSize&#x3D;20 &lt;/ex&gt; | 
**authorization** | **string**|  | [default to Bearer accessToken]
 **optional** | ***TaxInvoicesGetOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a TaxInvoicesGetOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **sortBy** | **optional.String**| Query document tax invoices list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /tax-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/tax-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/tax-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/tax-invoices?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | 
 **filter** | **optional.String**|  | 

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TaxInvoicesIdAttachmentPost

> AttachmentResponse TaxInvoicesIdAttachmentPost(ctx, authorization, id, optional)

Add Attachment to tax Invoices document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**id** | **string**| documentId หรือ recordId ของเอกสารที่ต้องการแนบ | 
 **optional** | ***TaxInvoicesIdAttachmentPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a TaxInvoicesIdAttachmentPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **file** | **optional.Interface of *os.File****optional.*os.File**| รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary | 

### Return type

[**AttachmentResponse**](AttachmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TaxInvoicesIdDelete

> DeleteResponse TaxInvoicesIdDelete(ctx, authorization, id)

Delete tax invoices document.

ลบ เอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะรอดำเนินการ 

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**id** | **string**| ID เอกสารใช้ recordId | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TaxInvoicesIdGet

> SimpleDocumentResponse TaxInvoicesIdGet(ctx, authorization, id)

Get tax invoices document.

เรียกดูข้อมูลเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**| ID เอกสารใช้ recordId | [default to Bearer accessToken]
**id** | **string**| ID เอกสารใช้ recordId | 

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TaxInvoicesIdPaymentPost

> InlineDocumentResponse TaxInvoicesIdPaymentPost(ctx, authorization, id, paymentReceivingDocument)

Change paid status of tax-invoice document.

เก็บเงิน เอกสารใบกำกับภาษี/ใบเสร็จรับเงิน เปลี่ยนสถานะเป็น เก็บเงินแล้ว

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**id** | **string**| ID เอกสารใช้ recordId หรือ documentId | 
**paymentReceivingDocument** | [**PaymentReceivingDocument**](PaymentReceivingDocument.md)|  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TaxInvoicesIdPut

> InlineDocumentResponse TaxInvoicesIdPut(ctx, authorization, id, updateInlineDocument)

Edit tax invoices document.

แก้ไขข้อมูลเอกสารใบกำกับภาษี ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**id** | **string**| ID เอกสารใช้ recordId | 
**updateInlineDocument** | [**UpdateInlineDocument**](UpdateInlineDocument.md)|  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TaxInvoicesIdStatusStatusIdPost

> InlineDocumentResponse TaxInvoicesIdStatusStatusIdPost(ctx, authorization, id, statusId)

Change status of tax invoices document.

เปลี่ยนสถานะของเอกสารเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**id** | **string**| ID เอกสารใช้ recordId | 
**statusId** | **string**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; invoicedelivered &#x3D; รอเก็บเงิน &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TaxInvoicesInlinePost

> InlineDocumentResponse TaxInvoicesInlinePost(ctx, authorization, inlineDocument)

Create tax invocie document with discount and tax inline.

สร้างเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) <br> <br> ข้อมูลการออกเอกสารใบกำกับภาษี : https://flowaccount.com/blog/ใบกำกับภาษี

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**inlineDocument** | [**InlineDocument**](InlineDocument.md)|  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TaxInvoicesInlineWithPaymentPost

> InlineDocumentResponse TaxInvoicesInlineWithPaymentPost(ctx, authorization, inlineDocumentWithPaymentReceiving)

Create tax invocie document with discount and tax inline with payment.

สร้างเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้าพร้อมเก็บเงิน <br>เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**inlineDocumentWithPaymentReceiving** | [**InlineDocumentWithPaymentReceiving**](InlineDocumentWithPaymentReceiving.md)|  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TaxInvoicesPost

> SimpleDocumentResponse TaxInvoicesPost(ctx, authorization, simpleDocument)

Create tax invocie document.

สร้างเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) <br> <br> ข้อมูลการออกเอกสารใบกำกับภาษี : https://flowaccount.com/blog/ใบกำกับภาษี

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**simpleDocument** | [**SimpleDocument**](SimpleDocument.md)|  | 

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TaxInvoicesSharedocumentPost

> ShareDocumentResponse TaxInvoicesSharedocumentPost(ctx, authorization, shareDocument)

Share link tax invoice document.

แชร์ลิงค์ เอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**shareDocument** | [**ShareDocument**](ShareDocument.md)|  | 

### Return type

[**ShareDocumentResponse**](ShareDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TaxInvoicesWithPaymentPost

> SimpleDocumentResponse TaxInvoicesWithPaymentPost(ctx, authorization, simpleDocumentWithPaymentReceiving)

Create tax invocie document with payment.

สร้างเอกสารใบกำกับภาษี หรือ ใบกำกับภาษี/ใบเสร็จรับเงิน พร้อมเก็บเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**simpleDocumentWithPaymentReceiving** | [**SimpleDocumentWithPaymentReceiving**](SimpleDocumentWithPaymentReceiving.md)|  | 

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

