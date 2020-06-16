# \WithholdingTaxApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**WithholdingTaxesEmailDocumentPost**](WithholdingTaxApi.md#WithholdingTaxesEmailDocumentPost) | **Post** /withholding-taxes/email-document | Send email withholding tax document.
[**WithholdingTaxesGet**](WithholdingTaxApi.md#WithholdingTaxesGet) | **Get** /withholding-taxes | Get list all withholding tax documents.
[**WithholdingTaxesIdAttachmentPost**](WithholdingTaxApi.md#WithholdingTaxesIdAttachmentPost) | **Post** /withholding-taxes/{id}/attachment | Add Attachment to expenses.
[**WithholdingTaxesIdDelete**](WithholdingTaxApi.md#WithholdingTaxesIdDelete) | **Delete** /withholding-taxes/{id} | Delete withholding tax document.
[**WithholdingTaxesIdGet**](WithholdingTaxApi.md#WithholdingTaxesIdGet) | **Get** /withholding-taxes/{id} | Get withholding tax document.
[**WithholdingTaxesIdPut**](WithholdingTaxApi.md#WithholdingTaxesIdPut) | **Put** /withholding-taxes/{id} | Edit withholding tax document.
[**WithholdingTaxesIdStatusStatusIdPost**](WithholdingTaxApi.md#WithholdingTaxesIdStatusStatusIdPost) | **Post** /withholding-taxes/{id}/status/{statusId} | Change status of withholding tax document.
[**WithholdingTaxesPost**](WithholdingTaxApi.md#WithholdingTaxesPost) | **Post** /withholding-taxes | Create withholding tax document.
[**WithholdingTaxesSharedocumentPost**](WithholdingTaxApi.md#WithholdingTaxesSharedocumentPost) | **Post** /withholding-taxes/sharedocument | Share link withholding tax documents.



## WithholdingTaxesEmailDocumentPost

> SendEmailResponse WithholdingTaxesEmailDocumentPost(ctx, authorization, sendEmailSimple)

Send email withholding tax document.

ส่งเอกสารใบหัก ณ ที่จ่าย ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

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


## WithholdingTaxesGet

> AllWithholidingTaxDocumentResponse WithholdingTaxesGet(ctx, currentPage, pageSize, authorization, optional)

Get list all withholding tax documents.

เรียกดูข้อมูลเอกสารใบหัก ณ ที่จ่ายทั้งหมดในระบบ

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**currentPage** | **int32**| Query current page document withholding tax. &lt;br&gt;Example Pattern: &lt;ex&gt;/withholding-taxes?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/withholding-taxes?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
**pageSize** | **int32**| Query document withholding tax list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /withholding-taxes?pageSize&#x3D;20 &lt;/ex&gt; | 
**authorization** | **string**|  | [default to Bearer accessToken]
 **optional** | ***WithholdingTaxesGetOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a WithholdingTaxesGetOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **sortBy** | **optional.String**| Query document withholding tax list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;entity&#39;,&#39;sortOrder&#39;:&#39;asc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | 
 **filter** | **optional.String**|  | 

### Return type

[**AllWithholidingTaxDocumentResponse**](AllWithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## WithholdingTaxesIdAttachmentPost

> AttachmentResponse WithholdingTaxesIdAttachmentPost(ctx, authorization, id, optional)

Add Attachment to expenses.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**id** | **string**|  | 
 **optional** | ***WithholdingTaxesIdAttachmentPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a WithholdingTaxesIdAttachmentPostOpts struct


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


## WithholdingTaxesIdDelete

> DeleteResponse WithholdingTaxesIdDelete(ctx, authorization, id)

Delete withholding tax document.

ลบ เอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

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


## WithholdingTaxesIdGet

> WithholidingTaxDocumentResponse WithholdingTaxesIdGet(ctx, authorization, id)

Get withholding tax document.

เรียกดูข้อมูลเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**id** | **string**| ID เอกสารใช้ recordId หรือ documentId | 

### Return type

[**WithholidingTaxDocumentResponse**](WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## WithholdingTaxesIdPut

> WithholidingTaxDocumentResponse WithholdingTaxesIdPut(ctx, authorization, id, updateWithholidingTaxDocument)

Edit withholding tax document.

แก้ไขข้อมูลเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**id** | **string**| ID เอกสารใช้ recordId | 
**updateWithholidingTaxDocument** | [**UpdateWithholidingTaxDocument**](UpdateWithholidingTaxDocument.md)|  | 

### Return type

[**WithholidingTaxDocumentResponse**](WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## WithholdingTaxesIdStatusStatusIdPost

> WithholidingTaxDocumentResponse WithholdingTaxesIdStatusStatusIdPost(ctx, authorization, id, statusId)

Change status of withholding tax document.

เปลี่ยนสถานะของเอกสารใบหัก ณ ที่จ่าย สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ ดำเนินการแล้ว (processed)

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**id** | **string**| ID เอกสารใช้ recordId | 
**statusId** | **string**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; processed &#x3D; ดำเนินการแล้ว &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**WithholidingTaxDocumentResponse**](WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## WithholdingTaxesPost

> WithholidingTaxDocumentResponse WithholdingTaxesPost(ctx, authorization, withholidingTaxDocument)

Create withholding tax document.

สร้างเอกสารใบหัก ณ ที่จ่าย เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ดำเนินการแล้ว (issued) <br> <br> ข้อมูลการออกเอกสาร หัก ณ ที่จ่าย : https://flowaccount.com/blog/ภาษีเงินได้-หัก-ณ-ที่จ่า

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**authorization** | **string**|  | [default to Bearer accessToken]
**withholidingTaxDocument** | [**WithholidingTaxDocument**](WithholidingTaxDocument.md)|  | 

### Return type

[**WithholidingTaxDocumentResponse**](WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## WithholdingTaxesSharedocumentPost

> ShareDocumentResponse WithholdingTaxesSharedocumentPost(ctx, authorization, shareDocument)

Share link withholding tax documents.

แชร์ลิงค์ เอกสารใบหัก ณ ที่จ่าย ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

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

