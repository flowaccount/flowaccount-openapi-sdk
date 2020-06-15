# WithholdingTaxApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**withholdingTaxesEmailDocumentPost**](WithholdingTaxApi.md#withholdingTaxesEmailDocumentPost) | **POST** /withholding-taxes/email-document | Send email withholding tax document.
[**withholdingTaxesGet**](WithholdingTaxApi.md#withholdingTaxesGet) | **GET** /withholding-taxes | Get list all withholding tax documents.
[**withholdingTaxesIdAttachmentPost**](WithholdingTaxApi.md#withholdingTaxesIdAttachmentPost) | **POST** /withholding-taxes/{id}/attachment | Add Attachment to expenses.
[**withholdingTaxesIdDelete**](WithholdingTaxApi.md#withholdingTaxesIdDelete) | **DELETE** /withholding-taxes/{id} | Delete withholding tax document.
[**withholdingTaxesIdGet**](WithholdingTaxApi.md#withholdingTaxesIdGet) | **GET** /withholding-taxes/{id} | Get withholding tax document.
[**withholdingTaxesIdPut**](WithholdingTaxApi.md#withholdingTaxesIdPut) | **PUT** /withholding-taxes/{id} | Edit withholding tax document.
[**withholdingTaxesIdStatusStatusIdPost**](WithholdingTaxApi.md#withholdingTaxesIdStatusStatusIdPost) | **POST** /withholding-taxes/{id}/status/{statusId} | Change status of withholding tax document.
[**withholdingTaxesPost**](WithholdingTaxApi.md#withholdingTaxesPost) | **POST** /withholding-taxes | Create withholding tax document.
[**withholdingTaxesSharedocumentPost**](WithholdingTaxApi.md#withholdingTaxesSharedocumentPost) | **POST** /withholding-taxes/sharedocument | Share link withholding tax documents.



## withholdingTaxesEmailDocumentPost

> SendEmailResponse withholdingTaxesEmailDocumentPost(authorization, sendEmailSimple)

Send email withholding tax document.

ส่งเอกสารใบหัก ณ ที่จ่าย ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example

```java
// Import classes:
//import org.openapitools.client.api.WithholdingTaxApi;

WithholdingTaxApi apiInstance = new WithholdingTaxApi();
String authorization = Bearer accessToken; // String | 
SendEmailSimple sendEmailSimple = new SendEmailSimple(); // SendEmailSimple | 
try {
    SendEmailResponse result = apiInstance.withholdingTaxesEmailDocumentPost(authorization, sendEmailSimple);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling WithholdingTaxApi#withholdingTaxesEmailDocumentPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **sendEmailSimple** | [**SendEmailSimple**](SendEmailSimple.md)|  |

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## withholdingTaxesGet

> WithholidingTaxDocumentResponse withholdingTaxesGet(currentPage, pageSize, authorization, sortBy, filter)

Get list all withholding tax documents.

เรียกดูข้อมูลเอกสารใบหัก ณ ที่จ่ายทั้งหมดในระบบ

### Example

```java
// Import classes:
//import org.openapitools.client.api.WithholdingTaxApi;

WithholdingTaxApi apiInstance = new WithholdingTaxApi();
Integer currentPage = null; // Integer | Query current page document withholding tax. <br>Example Pattern: <ex>/withholding-taxes?currentPage=1 </ex><ex>/withholding-taxes?currentPage=1&pageSize=20</ex>
Integer pageSize = null; // Integer | Query document withholding tax list amount per page. <br>Example Pattern: <ex> /withholding-taxes?pageSize=20 </ex>
String authorization = Bearer accessToken; // String | 
String sortBy = null; // String | Query document withholding tax list amount per page. <br>Example Pattern: <ex> /withholding-taxes?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/withholding-taxes?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/withholding-taxes?sortBy=[{'name':'entity','sortOrder':'asc'}]</ex><ex>/withholding-taxes?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/withholding-taxes?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
String filter = null; // String | 
try {
    WithholidingTaxDocumentResponse result = apiInstance.withholdingTaxesGet(currentPage, pageSize, authorization, sortBy, filter);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling WithholdingTaxApi#withholdingTaxesGet");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentPage** | **Integer**| Query current page document withholding tax. &lt;br&gt;Example Pattern: &lt;ex&gt;/withholding-taxes?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/withholding-taxes?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | [default to null]
 **pageSize** | **Integer**| Query document withholding tax list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /withholding-taxes?pageSize&#x3D;20 &lt;/ex&gt; | [default to null]
 **authorization** | **String**|  | [default to Bearer accessToken]
 **sortBy** | **String**| Query document withholding tax list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;entity&#39;,&#39;sortOrder&#39;:&#39;asc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] [default to null]
 **filter** | **String**|  | [optional] [default to null]

### Return type

[**WithholidingTaxDocumentResponse**](WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## withholdingTaxesIdAttachmentPost

> AttachmentResponse withholdingTaxesIdAttachmentPost(authorization, id, file)

Add Attachment to expenses.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ

### Example

```java
// Import classes:
//import org.openapitools.client.api.WithholdingTaxApi;

WithholdingTaxApi apiInstance = new WithholdingTaxApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | 
File file = null; // File | 
try {
    AttachmentResponse result = apiInstance.withholdingTaxesIdAttachmentPost(authorization, id, file);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling WithholdingTaxApi#withholdingTaxesIdAttachmentPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**|  | [default to null]
 **file** | **File**|  | [optional] [default to null]

### Return type

[**AttachmentResponse**](AttachmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## withholdingTaxesIdDelete

> DeleteResponse withholdingTaxesIdDelete(authorization, id)

Delete withholding tax document.

ลบ เอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ &lt;br&gt; ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example

```java
// Import classes:
//import org.openapitools.client.api.WithholdingTaxApi;

WithholdingTaxApi apiInstance = new WithholdingTaxApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
try {
    DeleteResponse result = apiInstance.withholdingTaxesIdDelete(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling WithholdingTaxApi#withholdingTaxesIdDelete");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**| ID เอกสารใช้ recordId | [default to null]

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## withholdingTaxesIdGet

> WithholidingTaxDocumentResponse withholdingTaxesIdGet(authorization, id)

Get withholding tax document.

เรียกดูข้อมูลเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ

### Example

```java
// Import classes:
//import org.openapitools.client.api.WithholdingTaxApi;

WithholdingTaxApi apiInstance = new WithholdingTaxApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId หรือ documentId
try {
    WithholidingTaxDocumentResponse result = apiInstance.withholdingTaxesIdGet(authorization, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling WithholdingTaxApi#withholdingTaxesIdGet");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**| ID เอกสารใช้ recordId หรือ documentId | [default to null]

### Return type

[**WithholidingTaxDocumentResponse**](WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## withholdingTaxesIdPut

> WithholidingTaxDocumentResponse withholdingTaxesIdPut(authorization, id, updateWithholidingTaxDocument)

Edit withholding tax document.

แก้ไขข้อมูลเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example

```java
// Import classes:
//import org.openapitools.client.api.WithholdingTaxApi;

WithholdingTaxApi apiInstance = new WithholdingTaxApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
UpdateWithholidingTaxDocument updateWithholidingTaxDocument = new UpdateWithholidingTaxDocument(); // UpdateWithholidingTaxDocument | 
try {
    WithholidingTaxDocumentResponse result = apiInstance.withholdingTaxesIdPut(authorization, id, updateWithholidingTaxDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling WithholdingTaxApi#withholdingTaxesIdPut");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**| ID เอกสารใช้ recordId | [default to null]
 **updateWithholidingTaxDocument** | [**UpdateWithholidingTaxDocument**](UpdateWithholidingTaxDocument.md)|  |

### Return type

[**WithholidingTaxDocumentResponse**](WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## withholdingTaxesIdStatusStatusIdPost

> WithholidingTaxDocumentResponse withholdingTaxesIdStatusStatusIdPost(authorization, id, statusId)

Change status of withholding tax document.

เปลี่ยนสถานะของเอกสารใบหัก ณ ที่จ่าย สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ ดำเนินการแล้ว (processed)

### Example

```java
// Import classes:
//import org.openapitools.client.api.WithholdingTaxApi;

WithholdingTaxApi apiInstance = new WithholdingTaxApi();
String authorization = Bearer accessToken; // String | 
String id = null; // String | ID เอกสารใช้ recordId
String statusId = null; // String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> processed = ดำเนินการแล้ว <br> void = ยกเลิก
try {
    WithholidingTaxDocumentResponse result = apiInstance.withholdingTaxesIdStatusStatusIdPost(authorization, id, statusId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling WithholdingTaxApi#withholdingTaxesIdStatusStatusIdPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **id** | **String**| ID เอกสารใช้ recordId | [default to null]
 **statusId** | **String**| เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; processed &#x3D; ดำเนินการแล้ว &lt;br&gt; void &#x3D; ยกเลิก | [default to null]

### Return type

[**WithholidingTaxDocumentResponse**](WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## withholdingTaxesPost

> WithholidingTaxDocumentResponse withholdingTaxesPost(authorization, withholidingTaxDocument)

Create withholding tax document.

สร้างเอกสารใบหัก ณ ที่จ่าย เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ดำเนินการแล้ว (issued) &lt;br&gt; &lt;br&gt; ข้อมูลการออกเอกสาร หัก ณ ที่จ่าย : https://flowaccount.com/blog/ภาษีเงินได้-หัก-ณ-ที่จ่า

### Example

```java
// Import classes:
//import org.openapitools.client.api.WithholdingTaxApi;

WithholdingTaxApi apiInstance = new WithholdingTaxApi();
String authorization = Bearer accessToken; // String | 
WithholidingTaxDocument withholidingTaxDocument = new WithholidingTaxDocument(); // WithholidingTaxDocument | 
try {
    WithholidingTaxDocumentResponse result = apiInstance.withholdingTaxesPost(authorization, withholidingTaxDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling WithholdingTaxApi#withholdingTaxesPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **withholidingTaxDocument** | [**WithholidingTaxDocument**](WithholidingTaxDocument.md)|  |

### Return type

[**WithholidingTaxDocumentResponse**](WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## withholdingTaxesSharedocumentPost

> ShareDocumentResponse withholdingTaxesSharedocumentPost(authorization, shareDocument)

Share link withholding tax documents.

แชร์ลิงค์ เอกสารใบหัก ณ ที่จ่าย ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example

```java
// Import classes:
//import org.openapitools.client.api.WithholdingTaxApi;

WithholdingTaxApi apiInstance = new WithholdingTaxApi();
String authorization = Bearer accessToken; // String | 
ShareDocument shareDocument = new ShareDocument(); // ShareDocument | 
try {
    ShareDocumentResponse result = apiInstance.withholdingTaxesSharedocumentPost(authorization, shareDocument);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling WithholdingTaxApi#withholdingTaxesSharedocumentPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **shareDocument** | [**ShareDocument**](ShareDocument.md)|  |

### Return type

[**ShareDocumentResponse**](ShareDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

