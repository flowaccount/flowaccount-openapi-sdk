# \ExpensesApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ExpensesCategoriesAccountingGet**](ExpensesApi.md#ExpensesCategoriesAccountingGet) | **Get** /expenses/categories/accounting | Accounting categories expenses document.
[**ExpensesCategoriesBusinessGet**](ExpensesApi.md#ExpensesCategoriesBusinessGet) | **Get** /expenses/categories/business | Business categories expenses document.
[**ExpensesEmailDocumentPost**](ExpensesApi.md#ExpensesEmailDocumentPost) | **Post** /expenses/email-document | Send email expenses document.
[**ExpensesGet**](ExpensesApi.md#ExpensesGet) | **Get** /expenses | Get list all expenses documents.
[**ExpensesIdAttachmentPost**](ExpensesApi.md#ExpensesIdAttachmentPost) | **Post** /expenses/{id}/attachment | Attachment to expenses document.
[**ExpensesIdDelete**](ExpensesApi.md#ExpensesIdDelete) | **Delete** /expenses/{id} | Delete expenses document.
[**ExpensesIdGet**](ExpensesApi.md#ExpensesIdGet) | **Get** /expenses/{id} | Get expenses document.
[**ExpensesIdPaymentPost**](ExpensesApi.md#ExpensesIdPaymentPost) | **Post** /expenses/{id}/payment | Change status is paid expenses document.
[**ExpensesIdPut**](ExpensesApi.md#ExpensesIdPut) | **Put** /expenses/{id} | Edit expenses document.
[**ExpensesIdStatusStatusIdPost**](ExpensesApi.md#ExpensesIdStatusStatusIdPost) | **Post** /expenses/{id}/status/{statusId} | Change status expenses document.
[**ExpensesInlinePost**](ExpensesApi.md#ExpensesInlinePost) | **Post** /expenses/inline | Create expenses document inline discount or inline vat.
[**ExpensesInlineWithPaymentPost**](ExpensesApi.md#ExpensesInlineWithPaymentPost) | **Post** /expenses/inline/with-payment | Create expenses document inline discount or inline vat with payment.
[**ExpensesPost**](ExpensesApi.md#ExpensesPost) | **Post** /expenses | Create expenses document.
[**ExpensesSharedocumentPost**](ExpensesApi.md#ExpensesSharedocumentPost) | **Post** /expenses/sharedocument | Share link expenses document.
[**ExpensesWithPaymentPost**](ExpensesApi.md#ExpensesWithPaymentPost) | **Post** /expenses/with-payment | Create expenses document with payment.



## ExpensesCategoriesAccountingGet

> BusinessCategory ExpensesCategoriesAccountingGet(ctx, authorization)

Accounting categories expenses document.

เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักบัญชี)

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]

### Return type

[**BusinessCategory**](BusinessCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExpensesCategoriesBusinessGet

> BusinessCategory ExpensesCategoriesBusinessGet(ctx, authorization)

Business categories expenses document.

เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักธุรกิจ)

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]

### Return type

[**BusinessCategory**](BusinessCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExpensesEmailDocumentPost

> SendEmailResponse ExpensesEmailDocumentPost(ctx, authorization, sendEmailSimple)

Send email expenses document.

ส่งเอกสารค่าใช้จ่าย ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**sendEmailSimple** | [**SendEmailSimple**](SendEmailSimple.md)|  | 

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


## ExpensesGet

> AllExpenseDocumentResponse ExpensesGet(ctx, currentPage, pageSize, authorization, optional)

Get list all expenses documents.

เรียกดูข้อมูลเอกสารค่าใช้จ่ายทั้งหมดในระบบ

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**currentPage** | **int32**| Query current page expenses document. &lt;br&gt;Example Pattern: &lt;ex&gt;/expenses?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/expenses?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
**pageSize** | **int32**| Query expenses document list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?pageSize&#x3D;20 &lt;/ex&gt; | 
**authorization** | **string**|  | [default to Bearer accessToken]
 **optional** | ***ExpensesGetOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a ExpensesGetOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **sortBy** | **optional.String**| Query sort by expense document. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | 
 **filter** | **optional.String**| Query filter expenses document. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?filter&#x3D;[{&#39;columnName&#39;:&#39;Status&#39;,&#39;columnValue&#39;:&#39;processed&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}] &lt;/ex&gt; | 

### Return type

[**AllExpenseDocumentResponse**](AllExpenseDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExpensesIdAttachmentPost

> AttachmentResponse ExpensesIdAttachmentPost(ctx, authorization, id, optional)

Attachment to expenses document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**id** | **string**|  | 
 **optional** | ***ExpensesIdAttachmentPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a ExpensesIdAttachmentPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **file** | **optional.Interface of *os.File****optional.*os.File**|  | 

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


## ExpensesIdDelete

> DeleteResponse ExpensesIdDelete(ctx, authorization, id)

Delete expenses document.

ลบ เอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

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


## ExpensesIdGet

> AllExpenseDocumentResponse ExpensesIdGet(ctx, authorization, id)

Get expenses document.

เรียกดูข้อมูลเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**id** | **string**|  | 

### Return type

[**AllExpenseDocumentResponse**](AllExpenseDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExpensesIdPaymentPost

> ExpenseSimpleDocumentResponse ExpensesIdPaymentPost(ctx, authorization, id, paymentPaidDocument)

Change status is paid expenses document.

ชำระเงิน เอกสารค่าใช้จ่ายเปลี่ยน สถานะเป็น ชำระเงินแล้ว

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**id** | **string**| ID เอกสารใช้ recordId หรือ documentId | 
**paymentPaidDocument** | [**PaymentPaidDocument**](PaymentPaidDocument.md)|  | 

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExpensesIdPut

> ExpenseInlineDocumentResponse ExpensesIdPut(ctx, authorization, id, updateExpenseDocument)

Edit expenses document.

แก้ไขข้อมูลเอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**id** | **string**| ID เอกสารใช้ recordId | 
**updateExpenseDocument** | [**UpdateExpenseDocument**](UpdateExpenseDocument.md)|  | 

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExpensesIdStatusStatusIdPost

> ExpenseInlineDocumentResponse ExpensesIdStatusStatusIdPost(ctx, authorization, id, statusId)

Change status expenses document.

เปลี่ยนสถานะของเอกสารค่าใช้จ่าย สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**id** | **string**| ID เอกสารใช้ recordId | 
**statusId** | **string**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; received &#x3D; รับใบเสร็จแล้ว &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExpensesInlinePost

> ExpenseInlineDocumentResponse ExpensesInlinePost(ctx, authorization, expenseInlineDocument)

Create expenses document inline discount or inline vat.

สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**expenseInlineDocument** | [**ExpenseInlineDocument**](ExpenseInlineDocument.md)|  | 

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExpensesInlineWithPaymentPost

> ExpenseInlineDocumentResponse ExpensesInlineWithPaymentPost(ctx, authorization, expenseInlineDocumentWithPaymentPaid)

Create expenses document inline discount or inline vat with payment.

สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**expenseInlineDocumentWithPaymentPaid** | [**ExpenseInlineDocumentWithPaymentPaid**](ExpenseInlineDocumentWithPaymentPaid.md)|  | 

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExpensesPost

> ExpenseSimpleDocumentResponse ExpensesPost(ctx, authorization, expenseSimpleDocument)

Create expenses document.

สร้างเอกสารค่าใช้จ่าย เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**expenseSimpleDocument** | [**ExpenseSimpleDocument**](ExpenseSimpleDocument.md)|  | 

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExpensesSharedocumentPost

> ShareDocumentResponse ExpensesSharedocumentPost(ctx, authorization, shareDocument)

Share link expenses document.

แชร์ลิงค์ เอกสารค่าใช้จ่าย ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

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


## ExpensesWithPaymentPost

> ExpenseSimpleDocumentResponse ExpensesWithPaymentPost(ctx, authorization, expenseSimpleDocumentWithPaymentPaid)

Create expenses document with payment.

สร้างเอกสารค่าใช้จ่าย พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**expenseSimpleDocumentWithPaymentPaid** | [**ExpenseSimpleDocumentWithPaymentPaid**](ExpenseSimpleDocumentWithPaymentPaid.md)|  | 

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

